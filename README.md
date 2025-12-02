# 🦐 SHRIMPU — AI Shrimp Species Classifier App

**SHRIMPU** is a cross-platform mobile application designed to classify shrimp species  
using **image recognition** and **deep learning** technologies.  
It enables users to identify shrimp types quickly and accurately through a built-in smartphone camera interface.

### 🧠 Model Overview
- Built with **TensorFlow** using the **MobileNetV2** architecture  
- Dataset split ratio: **Train 70%**, **Validation 15%**, **Test 15%**  
- Data augmentation applied using:  
  - `RandomFlip`, `RandomRotation`, `RandomZoom`, `RandomTranslation`  
- Output: shrimp species classification with confidence score  

### 🧩 API Overview
- **TensorFlow**: Load pre-trained `.h5` model for inference  
- **FastAPI**: Build RESTful API endpoint with **CORSMiddleware** enabled  
- **Hosting**: Deployed on IoT Server for communication with the Shrimpu mobile app  
- **Usage:** The app sends captured shrimp images to the API for classification results  

🔗 **Read more / Colab notebook:**  
[Google Colab – Shrimpu AI Model](https://colab.research.google.com/drive/1OnCOOR-Ewl6lUzwqYznfQMsBiDn251Y-#scrollTo=ed772e4a)

---

> *This project is part of the course* **90642172 – Team Project 2**  
> *at King Mongkut’s Institute of Technology Ladkrabang (KMITL).*  
