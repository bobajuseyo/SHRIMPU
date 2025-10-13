import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const colorsLight = {
  bg: '#f5f5f5',
  text: '#222',
  card: '#ffffff',
  orange: '#d85f3b',
  teal: '#247b86',
  muted: '#666',
  peach: '#ffd3bf',
  border: '#e5e5e5'
};
const colorsDark = {
  bg: '#0f1115',
  text: '#e7e9ee',
  card: '#171a21',
  orange: '#d87355',
  teal: '#2aa0ab',
  muted: '#a8adbb',
  peach: '#1e232b',
  border: '#2a2f3a'
};

const ThemeContext = createContext();
export const useThemeX = () => useContext(ThemeContext);

export default function ThemeProvider({children}) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    (async () => {
      const m = await AsyncStorage.getItem('theme');
      if (m) setMode(m);
    })();
  }, []);

  const isDark = mode === 'dark';
  const colors = isDark ? colorsDark : colorsLight;

  // ส่ง theme ให้ react-navigation ด้วย
  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.bg,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      primary: colors.orange
    }
  };

  const value = useMemo(() => ({
    mode, isDark, colors,
    toggle: async () => {
      const m = isDark ? 'light' : 'dark';
      setMode(m);
      await AsyncStorage.setItem('theme', m);
    },
    setMode: async (m) => { setMode(m); await AsyncStorage.setItem('theme', m); }
  }), [isDark]);

  return (
    <ThemeContext.Provider value={{...value, navTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
