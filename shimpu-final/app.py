from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
from io import BytesIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model once at startup
MODEL_PATH = "shrimp_classifier_final.h5"
model = load_model(MODEL_PATH)

# derive expected input size from the model, fallback to (120,120)
try:
    _, expected_h, expected_w, expected_c = model.input_shape
    expected_size = (expected_h or 120, expected_w or 120)
except Exception:
    expected_size = (120, 120)

# class names (must match training order)
class_names = ['kungchaebuay', 'kunglinesua', 'kungwhite', 'unknown']

def preprocess_image(image_bytes, target_size):
    img = Image.open(BytesIO(image_bytes)).convert('RGB')
    img = img.resize(target_size, Image.BILINEAR)
    img_array = np.array(img).astype("float32") / 255.0
    return np.expand_dims(img_array, axis=0)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        img = preprocess_image(image_bytes, expected_size)

        preds = model.predict(img)[0]
        top_indices = preds.argsort()[::-1][:3]
        top_3 = [{"class": class_names[i], "confidence": float(preds[i])} for i in top_indices]

        # primary logic
        top1_class = top_3[0]["class"]
        top1_conf = top_3[0]["confidence"]
        top2_class = top_3[1]["class"]
        top2_conf = top_3[1]["confidence"]

        threshold_conf = 0.5    # ถ้าต่ำกว่านี้จะพิจารณาเป็น unknown (เริ่มต้น)
        margin_conf = 0.1       # ถ้าความต่างน้อยกว่า margin ก็นับเป็นไม่ชัดเจน
        promote_if_unknown_next_conf = 0.70  # ถ้า top1 เป็น unknown แต่ top2 > ค่านี้ ให้ใช้ top2

        # ถ้า top1 เป็น unknown ให้ตรวจสอบข้อยกเว้น: ถ้าอันดับถัดไปมีความมั่นใจสูงพอ ให้เลือกอันดับถัดไป
        if top1_class == "unknown":
            if top2_conf >= promote_if_unknown_next_conf:
                predicted_class = top2_class
                confidence = float(top2_conf)
                note = "promoted_from_unknown"
            else:
                # ยังใช้เกณฑ์เดิม: ถ้าความมั่นใจของ unknown ต่ำกว่าขั้นต่ำ หรือต่างกับ top2 น้อยเกิน ให้คืน unknown
                if top1_conf < threshold_conf or (top1_conf - top2_conf) < margin_conf:
                    predicted_class = "unknown"
                    confidence = float(top1_conf)
                    note = "unknown_by_threshold"
                else:
                    predicted_class = "unknown"
                    confidence = float(top1_conf)
                    note = "unknown_high_conf"
        else:
            # top1 ไม่ใช่ unknown: ใช้เกณฑ์เดิมในการยืนยัน
            if top1_conf < threshold_conf or (top1_conf - top2_conf) < margin_conf:
                predicted_class = "unknown"
                confidence = float(top1_conf)
                note = "demoted_to_unknown"
            else:
                predicted_class = top1_class
                confidence = float(top1_conf)
                note = "accepted"

        return {
            "status": "success",
            "predicted_class": predicted_class,
            "confidence": confidence,
            "note": note,
            "top_3": top_3
        }
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }