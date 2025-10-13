import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLang } from '../context/LangContext';
import { useThemeX } from '../context/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { t } = useLang();
  const { colors } = useThemeX();

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 12, paddingBottom: 90, backgroundColor: colors.bg }}>
      <View style={{ paddingHorizontal: 12 , paddingVertical: 20}}>

        {/* Catalog Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Catalog')}
          style={[styles.catalog, { backgroundColor: colors.orange }]}
          activeOpacity={0.9}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: '#fff', marginRight: 8 }}>🍤</Text>
            <Text style={{ color: '#fff', fontWeight: '800', fontSize: 30 }}>{t('common.catalog')}</Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 50, fontWeight: '900' }}>›</Text>
        </TouchableOpacity>

        <Text style={[styles.sectionHead, { color: colors.text }]}>{t('common.recipe')}</Text>
      </View>

      {/* Crispy Fried Shrimp (ชิดขวา) */}
      <TouchableOpacity
        key="crispy"
        style={styles.recipeContainerRight} // <-- ใช้สไตล์สำหรับชิดขวา
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Ingredient', { id: 'crispy' })}
      >
        <Image source={require('../../assets/images/crispy_shrimp_no_bg.png')} style={styles.recipeImage} />
      </TouchableOpacity>

      {/* Raw Shrimp in Fish Sauce (ชิดซ้าย) */}
      <TouchableOpacity
        key="raw"
        style={styles.recipeContainerLeft} // <-- ใช้สไตล์สำหรับชิดซ้าย
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Ingredient', { id: 'raw' })}
      >
        <Image source={require('../../assets/images/raw_shrimp_no_bg.png')} style={styles.recipeImage} />
      </TouchableOpacity>

      {/* Ha Gow (Crystal Shrimp Dumpling) (ชิดซ้ายเป็นค่าเริ่มต้น) */}
      <TouchableOpacity
        key="hagow"
        style={styles.recipeContainerRight} // <-- ใช้สไตล์สำหรับชิดซ้าย
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Ingredient', { id: 'hagow' })}
      >
        <Image source={require('../../assets/images/ha_gow_no_bg.png')} style={styles.recipeImage} />
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  catalog: {
    marginTop: 40,
    height: 150,
    borderRadius: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 16
  },
  sectionHead: { fontSize: 40, fontWeight: '800', marginVertical: 30 },
  
  // --- สไตล์ที่ปรับแก้ใหม่ ---
  // Container สำหรับรูปที่ชิดซ้าย
  recipeContainerLeft: {
    alignItems: 'flex-start', // จัดให้ item ข้างใน (Image) ไปอยู่ด้านซ้ายสุด
    marginVertical: 12,
  },
  // Container สำหรับรูปที่ชิดขวา
  recipeContainerRight: {
    alignItems: 'flex-end', // จัดให้ item ข้างใน (Image) ไปอยู่ด้านขวาสุด
    marginVertical: 12,
  },
  recipeImage: {
    width: '90%', // ลดความกว้างลงเล็กน้อยเพื่อให้เห็นการจัดชิดซ้าย-ขวา
    height: 300,  // เพิ่มความสูงเพื่อให้ดูเด่นขึ้น
    resizeMode: 'contain',
  },
});