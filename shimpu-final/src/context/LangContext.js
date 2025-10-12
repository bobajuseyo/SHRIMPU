import React, {createContext, useContext, useEffect, useState, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DICT } from '../i18n/i18n';

const LangContext = createContext();
export const useLang = () => useContext(LangContext);

export default function LangProvider({children}) {
  const [lang, setLang] = useState('th');

  useEffect(() => {
    (async () => {
      const v = await AsyncStorage.getItem('lang');
      if (v) setLang(v);
    })();
  }, []);

  const t = (path) => {
    if (!path) return '';
    if (typeof path !== 'string') return path[lang] || '';
    const parts = (path || '').split('.');
    let cur = DICT[lang];
    for (const p of parts) {
      if (!cur || !(p in cur)) return path;
      cur = cur[p];
    }
    return cur;
  };

  const value = useMemo(() => ({
    lang, setLang: async (v) => { setLang(v); await AsyncStorage.setItem('lang', v); },
    t
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
