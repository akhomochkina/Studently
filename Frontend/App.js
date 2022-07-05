import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationButton from './src/components/RegistrationButton';
import LoginScreen from './src/screens/LoginScreen';
import LoginScreenNavigation from './src/navigations/LoginScreenNavigation';
import RegisterScreenNavigation from './src/navigations/RegisterScreenNavigation';
import RegisterScreen from './src/screens/RegisterScreen';
import MainPage from "./src/screens/MainPage";
import ProductDetail from './src/components/ProductDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
    function Main() {
        return (
            <MainPage />
        );
    }

    function Details() {
        return (
            <ProductDetail />
        );
    }

    const Stack = createNativeStackNavigator();

  return (
    
     // <RegisterScreen/>

      <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen name="MainPage" component={Main} />
              <Stack.Screen name="ProductDetail" component={Details} />
          </Stack.Navigator>
      </NavigationContainer>

     //  <ProductDetail />
     
  );
}

