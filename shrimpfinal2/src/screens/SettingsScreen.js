import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useThemeX } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

export default function SettingsScreen() {
  const { isDark, colors, toggle } = useThemeX();
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex:1, backgroundColor: colors.bg, padding:12, paddingBottom:90 }}>
      <View style={[styles.hero,{ backgroundColor: colors.teal }]}>
        <Text style={styles.heroTitle}>{t('common.settings')}</Text>
      </View>

      <View style={[styles.list, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {/* Dark Mode */}
        <View style={styles.item}>
          <Text style={[styles.itemTitle,{ color: colors.orange }]}>{t('common.darkMode')}</Text>
          <Switch value={isDark} onValueChange={toggle}/>
        </View>

        <View style={[styles.divider,{ backgroundColor: colors.border }]} />

        {/* Language */}
        <TouchableOpacity style={styles.item} onPress={() => setOpen(true)}>
          <Text style={[styles.itemTitle,{ color: colors.orange }]}>{t('common.language')}</Text>
          <Text style={{ color: colors.text }}>{lang === 'en' ? 'English' : 'ไทย'}  ›</Text>
        </TouchableOpacity>
      </View>

      {/* Modal เลือกภาษา */}
      <Modal transparent animationType="fade" visible={open} onRequestClose={()=>setOpen(false)}>
        <View style={styles.modalBackdrop}>
          <View style={[styles.modalCard,{ backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.modalTitle,{ color: colors.text }]}>{t('common.language')}</Text>

            {['th','en'].map((v)=>(
              <TouchableOpacity key={v} style={styles.langBtn}
                onPress={async ()=>{ await setLang(v); setOpen(false); }}>
                <Text style={{ fontSize:16, color: colors.text }}>
                  {v==='en'?'English':'ไทย'}
                </Text>
                <Text style={{ opacity: lang===v?1:0, color: colors.teal }}>✓</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  hero:{marginTop:50, height:96, borderRadius:18, alignItems:'center', justifyContent:'center', marginBottom:30 },
  heroTitle:{ color:'#fff', fontWeight:'800', fontSize:28 },
  list:{ borderRadius:12, borderWidth:1, overflow:'hidden' },
  item:{ padding:16, flexDirection:'row', alignItems:'center', justifyContent:'space-between' },
  itemTitle:{ fontSize:22, fontWeight:'700' },
  divider:{ height:1 },
  modalBackdrop:{ flex:1, backgroundColor:'rgba(0,0,0,0.35)', alignItems:'center', justifyContent:'center' },
  modalCard:{ width:'88%', borderRadius:14, borderWidth:1, padding:12 },
  modalTitle:{ fontWeight:'800', fontSize:18, marginBottom:8 },
  langBtn:{ paddingVertical:12, flexDirection:'row', justifyContent:'space-between' }
});
