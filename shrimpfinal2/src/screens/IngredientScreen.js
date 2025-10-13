// src/screens/IngredientScreen.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeX } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';
import { RECIPES } from '../data/recipes';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

const { width } = Dimensions.get('window');

// โหลดฟอนต์ Kanit จาก Google Fonts
let customFonts = {
  Kanit_400Regular: require('../../assets/fonts/Kanit/Kanit-Regular.ttf'),
  Kanit_600SemiBold: require('../../assets/fonts/Kanit/Kanit-SemiBold.ttf'),
  Kanit_700Bold: require('../../assets/fonts/Kanit/Kanit-Bold.ttf'),
};

export default function IngredientScreen({ route }) {
  const scrollRef = useRef(null);
  const { id = 'crispy' } = route.params || {};
  const { colors } = useThemeX();
  const { lang } = useLang();
  const r = RECIPES[id];
  const t = r[lang] || r.th;
  const [fontsLoaded] = Font.useFonts(customFonts);

 if (!fontsLoaded) {
  return (
    <View style={[styles.center, { backgroundColor: colors.bg }]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

  const handleScrollToInstructions = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <LinearGradient colors={['#fff7f1', '#fff']} style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header Image */}
        <View style={styles.cardContainer}>
          <LinearGradient colors={['#fff', '#ffe7de']} style={styles.imageGradient}>
            <Image source={r.cover} style={styles.image} />
          </LinearGradient>
          <Text style={styles.title}>{t.title}</Text>
        </View>

        {/* Ingredients Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="restaurant" size={20} color="#c44b2a" />
            <Text style={styles.sectionHeader}>{t.ingTitle}</Text>
          </View>

          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHead]}>
              <Text style={[styles.tableCell, styles.tableHeaderCell]}>Ingredients</Text>
              <Text style={[styles.tableCell, styles.tableHeaderCell]}>Quantity</Text>
            </View>
            {t.ingredients.map(([name, amount], i) => (
              <View key={i} style={[styles.tableRow, i % 2 !== 0 && styles.tableRowAlt]}>
                <Text style={styles.tableCell}>{name}</Text>
                <Text style={styles.tableCell}>{amount}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Instructions Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="list-circle" size={20} color="#c44b2a" />
            <Text style={styles.sectionHeader}>{t.insTitle}</Text>
          </View>

          <View style={styles.instructionsBox}>
            {t.steps.map((s, i) => (
              <View key={i} style={styles.stepRow}>
                <Text style={styles.stepIndex}>{i + 1}.</Text>
                <Text style={styles.stepText}>{s}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Start Cooking Button */}
      <TouchableOpacity style={styles.fab} onPress={handleScrollToInstructions}>
        <LinearGradient colors={['#ff8c42', '#ff5e1f']} style={styles.fabInner}>
          <Ionicons name="flame" size={22} color="#fff" />
          <Text style={styles.fabText}>Start Cooking</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 24,
    marginBottom: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  imageGradient: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Kanit_700Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#c44b2a',
    paddingVertical: 14,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionHeader: {
    fontFamily: 'Kanit_600SemiBold',
    fontSize: 18,
    color: '#c44b2a',
  },
  table: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffd7c2',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tableRowAlt: {
    backgroundColor: '#fff8f5',
  },
  tableHead: {
    backgroundColor: '#ffe7de',
  },
  tableHeaderCell: {
    fontFamily: 'Kanit_700Bold',
    color: '#b23b12',
    fontSize: 15,
  },
  tableCell: {
    flex: 1,
    fontFamily: 'Kanit_400Regular',
    color: '#333',
    fontSize: 14,
  },
  instructionsBox: {
    borderRadius: 12,
    backgroundColor: '#fff9f5',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffd7c2',
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  stepIndex: {
    fontFamily: 'Kanit_700Bold',
    color: '#d85a2b',
    fontSize: 16,
    marginRight: 8,
  },
  stepText: {
    flex: 1,
    fontFamily: 'Kanit_400Regular',
    color: '#333',
    fontSize: 15,
    lineHeight: 22,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  fabInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 4,
  },
  fabText: {
    fontFamily: 'Kanit_600SemiBold',
    color: '#fff',
    fontSize: 16,
    marginLeft: 6,
  },
});
