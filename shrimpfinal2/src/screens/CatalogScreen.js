import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLang } from '../context/LangContext';
import { useThemeX } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function CatalogScreen() {
  const navigation = useNavigation();
  const { t } = useLang(); 
  const { colors } = useThemeX();

  const shrimps = [
    { id: 'white_shrimp', name: t('Whiteleg shrimp '), img: require('../../assets/images/shrimp-icon.png') },
    { id: 'banana_shrimp', name: t('Banana Shrimp'), img: require('../../assets/images/shrimp-icon.png') },
    { id: 'tiger_shrimp', name: t('Black Tiger Shrimp'), img: require('../../assets/images/shrimp-icon.png') },
  ];

  const cardColors = ['#FEF7DF', '#FEEBDA', '#E6F5FF']; // สีเหลืองอ่อน ส้มอ่อน ฟ้าอ่อน

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.backText, { color: colors.text }]}>{t('catalog.back')}</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>{t('catalog.title')}</Text>
        <View style={{ width: 60 }} />
      </View>

      <FlatList
        data={shrimps}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const colorIndex = index % cardColors.length;
          const cardColor = cardColors[colorIndex];

          return (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: cardColor, borderColor: cardColor }]}
              onPress={() => {
                if (item.id === 'white_shrimp') navigation.navigate('WhiteShrimp');
                else if (item.id === 'banana_shrimp') navigation.navigate('BananaShrimp');
                else if (item.id === 'tiger_shrimp') navigation.navigate('TigerShrimp');
              }}

            >
              <Image source={item.img} style={styles.img} />
              <Text style={[styles.name, { color: '#333' }]}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={22} color={'#555'} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: 70,
    paddingHorizontal: 16, 
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: { fontSize: 16, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '800' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    flex: 1, 
  },
});
