import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ThemeProvider, { useThemeX } from './src/context/ThemeContext';
import LangProvider, { useLang } from './src/context/LangContext';
import { View, TouchableOpacity } from 'react-native';

// Import หน้าจอทั้งหมดที่แอปพลิเคชันใช้งาน
import HomeScreen from './src/screens/HomeScreen';
import IngredientScreen from './src/screens/IngredientScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ScanScreen from './src/screens/ScanScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import WhiteShrimpScreen from './src/screens/ShrimpDetail/ShrimpDetailWhite';
import BananaShrimpScreen from './src/screens/ShrimpDetail/ShrimpDetailBanana';
import TigerShrimpScreen from './src/screens/ShrimpDetail/ShrimpDetailTiger';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Component สำหรับจัดการกลุ่มหน้าจอในแท็บ Home
function HomeStack(){
  const { colors } = useThemeX();
  const { t } = useLang();
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{ headerShown: false }} // ซ่อน Header ของหน้า Home
      />

      <Stack.Screen
        name="Ingredient"
        component={IngredientScreen}
        options={({ navigation }) => ({
          title: t('common.ingredient'),
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 12, marginRight: 4 }}>
              <TouchableOpacity onPress={() => {/* handle save */}}>
                <Ionicons name="bookmark-outline" size={22} color="#000 "  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {/* handle share */}}>
                <Ionicons name="share-social-outline" size={22} color="#000" />
              </TouchableOpacity>
            </View>
          ),
          // Optional: Custom Back Button
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 4 }}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}
      />


      <Stack.Screen 
        name="Catalog" 
        component={CatalogScreen}
        options={{ headerShown: false }} // ซ่อน Header ของหน้า Catalog (เพื่อให้ใช้ Header ที่สร้างเอง)
      />
      
      <Stack.Screen name="WhiteShrimp" component={WhiteShrimpScreen} options={{ headerShown: false }} />
<Stack.Screen name="BananaShrimp" component={BananaShrimpScreen} options={{ headerShown: false }} />
<Stack.Screen name="TigerShrimp" component={TigerShrimpScreen} options={{ headerShown: false }} />


    </Stack.Navigator>

  );
}

// Component สำหรับสร้างแถบเมนูหลักด้านล่าง
function Tabs(){
  const { navTheme } = useThemeX();
  const { t } = useLang();
  return (
    <Tab.Navigator screenOptions={({route})=>({
      headerShown:false, // ซ่อน Header ของ Tab Navigator เอง
      tabBarActiveTintColor: navTheme.colors.primary, // สีของแท็บที่ถูกเลือก
      tabBarStyle:{ height:60, paddingBottom:8 }, // สไตล์ของแถบเมนู
      tabBarLabelPosition: 'below-icon', // กำหนดให้ข้อความอยู่ "ข้างล่าง" ไอคอน

      // ฟังก์ชันสำหรับเลือกไอคอนในแต่ละแท็บ
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'apps-outline';
            break;
          case 'Scan':
            iconName = focused ? 'camera' : 'camera-outline';
            break;
          case 'Settings':
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            break;
          default:
            iconName = 'alert-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      {/* ลงทะเบียนแต่ละแท็บ */}
      <Tab.Screen name="Home" component={HomeStack} options={{ title: t('common.home') }}/>
      <Tab.Screen name="Scan" component={ScanScreen} options={{ title: t('common.scan') }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: t('common.settings') }}/>
    </Tab.Navigator>
  );
}

// Component หลักของแอปพลิเคชัน (จุดเริ่มต้น)
export default function App(){
  return (
    // ครอบแอปทั้งหมดด้วย Provider เพื่อให้ทุกหน้าเข้าถึงข้อมูล ธีม และ ภาษา ได้
    <ThemeProvider>
      <LangProvider>
        <AppContainer/>
      </LangProvider>
    </ThemeProvider>
  );
}

// Component ที่ทำหน้าที่ตั้งค่า Navigation Container
function AppContainer(){
  const { navTheme } = useThemeX();

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs หลัก */}
        <Stack.Screen name="MainTabs" component={Tabs} />

        {/* รายละเอียดกุ้งทุกชนิด */}
        <Stack.Screen name="WhiteShrimp" component={WhiteShrimpScreen} />
        <Stack.Screen name="BananaShrimp" component={BananaShrimpScreen} />
        <Stack.Screen name="TigerShrimp" component={TigerShrimpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
