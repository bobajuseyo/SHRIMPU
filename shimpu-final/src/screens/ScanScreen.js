import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useThemeX } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//URL ของ FastAPI backend 
const API_URL = "https://toonkai.aiotsecuritylab.net/predict"; 

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const camRef = useRef(null);
  const navigation = useNavigation();
  const { colors } = useThemeX();
  const { t } = useLang();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  //ฟังก์ชันถ่ายรูป
  const handleTakePicture = async () => {
    if (camRef.current) {
      try {
        const photo = await camRef.current.takePictureAsync({ quality: 0.7, base64: false });
        setCapturedPhoto(photo);
      } catch (error) {
        console.error("Failed to take picture:", error);
      }
    }
  };

  //ฟังก์ชันส่งภาพไปให้ AI วิเคราะห์
  const analyzeShrimp = async () => {
    if (!capturedPhoto) return;
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", {
        uri: capturedPhoto.uri,
        name: "shrimp.jpg",
        type: "image/jpeg",
      });

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const result = await response.json();
      console.log("🔍 API response:", result);

      if (result.status === "success") {
        const predicted = result.predicted_class;

        // map class จากโมเดลให้ตรงกับชื่อหน้าจอ
        if (predicted === "kungwhite") navigation.navigate("WhiteShrimp");
        else if (predicted === "kungchaebuay") navigation.navigate("BananaShrimp");
        else if (predicted === "kunglinesua") navigation.navigate("TigerShrimp");
        else {
          Alert.alert("❌ ไม่พบข้อมูล", "ไม่สามารถระบุข้อมูลนี้ได้ (" + predicted + ")");
        }
      } else {
        Alert.alert("⚠️ Error", result.message || "การวิเคราะห์ล้มเหลว");
      }
    } catch (error) {
      console.error("❌ Error analyzing:", error);
      Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
    } finally {
      setIsLoading(false);
    }
  };

  // ยังไม่ได้รับอนุญาตใช้กล้อง
  if (!permission) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: colors.bg }]}>
        <ActivityIndicator size="large" color={colors.teal} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: colors.bg, padding: 24 }]}>
        <Text style={{ marginBottom: 12, textAlign: 'center', color: colors.text }}>
          {t('scan.permissionNeeded')}
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={[styles.permissionButton, { backgroundColor: colors.teal }]}
        >
          <Text style={styles.permissionButtonText}>{t('scan.grantPermission')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // เมื่อถ่ายภาพเสร็จ
  if (capturedPhoto) {
    return (
      <View style={styles.fullScreen}>
        <Image source={{ uri: capturedPhoto.uri }} style={styles.fullScreen} />

        {isLoading ? (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={{ color: '#fff', marginTop: 10 }}>{t('scan.analyzing')}</Text>
          </View>
        ) : (
          <>
            <TouchableOpacity style={styles.analyzeButton} onPress={analyzeShrimp}>
              <Ionicons name="search" size={20} color="#fff" />
              <Text style={styles.analyzeButtonText}>{t('Analyze')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.retakeButton}
              onPress={() => setCapturedPhoto(null)}
            >
              <Ionicons name="camera-reverse" size={20} color="#fff" />
              <Text style={styles.retakeButtonText}>{t('Retake')}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }

  // หน้ากล้องหลัก
  return (
    <View style={styles.fullScreen}>
      {isFocused && <CameraView ref={camRef} style={StyleSheet.absoluteFill} facing="back" />}

      {/* กรอบสแกน */}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.scanFrame} />
        <View style={styles.topTextContainer}>
          <Text style={styles.scanText}>{t('Shrimp Scan')}</Text>
        </View>

        {/* ปุ่มถ่ายภาพ */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.captureButton} onPress={handleTakePicture}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
     



const styles = StyleSheet.create({
  fullScreen: { flex: 1 },
  centerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  permissionButton: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10 },
  permissionButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  scanFrame: {
    flex: 1,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    margin: 30,
    borderRadius: 20,
  },
  topTextContainer: { position: 'absolute', top: 80, width: '100%', alignItems: 'center' },
  scanText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: { width: 62, height: 62, borderRadius: 31, borderWidth: 3, borderColor: '#333' },
  analyzeButton: {
    position: 'absolute',
    bottom: 130,
    alignSelf: 'center',
    backgroundColor: '#00b894',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  analyzeButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  loadingOverlay: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  retakeButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  retakeButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
