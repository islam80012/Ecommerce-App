import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen';
import CartScreen from '../../src/screens/CartScreen';
import ChoosenProduct from '../../src/screens/ChoosenProduct';
import LoginScreen from '../../src/screens/Authentification/LoginScreen';
import SignUpScreen from '../../src/screens/Authentification/SignUpScreen';
import ResetPasswdScreen from '../../src/screens/Authentification/ResetPasswdScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Le Drawer avec Home et Cart
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

// L'App principale avec Stack + Drawer
export default function App() {
  return (
      <Stack.Navigator>
        {/* Le Drawer comme écran principal */}
        <Stack.Screen 
          name="Root" 
          component={DrawerNavigator} 
          options={{ headerShown: false }}
        />
        
        {/* Les écrans de navigation "internes" */}
        <Stack.Screen 
          name="ChoosenProduct" 
          component={ChoosenProduct} 
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen} // Assurez-vous que le chemin est correct
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen} // Assurez-vous que le chemin est correct
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="ResetPasswd"
          component={ResetPasswdScreen} // Assurez-vous que le chemin est correct
          options={{ title: 'Reset Password' }}
        />
      </Stack.Navigator>
  );
}
