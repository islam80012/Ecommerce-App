import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../src/screens/HomeScreen';
import CartScreen from '../../src/screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            headerShown: false, // Si tu veux masquer le header
          }}
        />
        <Drawer.Screen 
          name="Cart" 
          component={CartScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
            headerShown: false, // Si tu veux masquer le header
          }}
        />
      </Drawer.Navigator>
  );
};

export default App;
