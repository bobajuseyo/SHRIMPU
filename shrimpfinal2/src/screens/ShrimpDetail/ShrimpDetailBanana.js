import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useThemeX } from '../../context/ThemeContext';
import { useLang } from '../../context/LangContext';
import { SHRIMP_DATA } from '../../data/shrimpData';
import { Ionicons } from '@expo/vector-icons';

export default function WhiteShrimpScreen() {
  const shrimp = SHRIMP_DATA['banana_shrimp'];
  const navigation = useNavigation();
  const { colors } = useThemeX();
  const { t, lang } = useLang();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View>
        <Image source={shrimp.image} style={styles.headerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 16 }}>
        <Text style={[styles.title, { color: colors.text }]}>{t(shrimp.nameKey)}</Text>
        <Text style={[styles.description, { color: colors.text }]}>{shrimp.description[lang]}</Text>

        {/* <Text style={styles.sourceText}>source: {shrimp.source}</Text> */}

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Nutrition Facts</Text>
        <View style={[styles.card, { borderColor: colors.border }]}>
          {shrimp.nutrition.map((item, i) => (
            <View key={i} style={styles.row}>
              <Text style={[styles.label, { color: colors.text }]}>{item.label}</Text>
              <Text style={[styles.value, { color: colors.text }]}>{item.value}</Text>
            </View>
          ))}
        </View>

         {/* Prices */}
        <Text style={[styles.sectionTitle, { color: colors.text, marginTop: 24 }]}>
          {lang === 'th' ? 'ราคาตามร้านค้า' : 'Check Price'}
        </Text>

         {shrimp.prices.map((p, i) => (
          <View key={i} style={[styles.priceCard, { borderColor: colors.border }]}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.priceName, { color: colors.text }]}>{p.retailer}</Text>
              <Text style={{ color: colors.muted }}>{p.size[lang]}</Text>
            </View>
            <Text style={[styles.priceValue, { color: colors.text }]}>{p.price}
              <Text style={{ fontSize: 14 }}>{p.unit}</Text>
            </Text>
            <Image source={p.logo} style={styles.retailerLogo} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: { width: '100%', height: 240, resizeMode: 'cover' },
  backButton: { position: 'absolute', top: 40, left: 16, backgroundColor: '#fff8', padding: 6, borderRadius: 20 },
  title: { fontSize: 28, fontWeight: '800', marginTop: 12 },
  description: { fontSize: 16, marginVertical: 12, lineHeight: 24 },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginVertical: 12 },
  card: { borderWidth: 1, borderRadius: 12, padding: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  label: { fontSize: 14 },
  value: { fontSize: 14, fontWeight: '600' },
  priceCard: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 12, padding: 12, marginBottom: 10 },
  retailerLogo: { width: 32, height: 32, resizeMode: 'contain', marginLeft: 10 },
  priceName: { fontSize: 16, fontWeight: '600' },
  priceValue: { fontSize: 20, fontWeight: '700' },
});