// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import RegistrationButton from './src/components/RegistrationButton';
// import LoginScreen from './src/screens/LoginScreen';
// import LoginScreenNavigation from './src/navigations/LoginScreenNavigation';
// import RegisterScreenNavigation from './src/navigations/RegisterScreenNavigation';
// import RegisterScreen from './src/screens/RegisterScreen';
// import MainPage from "./src/screens/MainPage";
// import ProductDetail from './src/components/ProductDetail';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//     function Main() {
//         return (
//             <MainPage />
//         );
//     }

//     function Details() {
//         return (
//             <ProductDetail />
//         );
//     }

//     const Stack = createNativeStackNavigator();

//   return (

//      // <RegisterScreen/>

//       <NavigationContainer>
//           <Stack.Navigator >
//               <Stack.Screen name="MainPage" component={Main} />
//               <Stack.Screen name="ProductDetail" component={Details} />
//           </Stack.Navigator>
//       </NavigationContainer>

//      //  <ProductDetail />

//   );
// }

import { StatusBar } from "expo-status-bar";
import React, { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationButton from "./src/components/RegistrationButton";
import LoginScreen from "./src/screens/LoginScreen";
import LoginScreenNavigation from "./src/navigations/LoginScreenNavigation";
import AddProductScreenNavigation from "./src/navigations/AddProductScreenNavigation";
import ProductDetailsScreenNavigation from "./src/navigations/ProductDetailsScreenNavigation";
import RegisterScreenNavigation from "./src/navigations/RegisterScreenNavigation";
import RegisterScreen from "./src/screens/RegisterScreen";
import PasswordRecoveryScreen from "./src/screens/PasswordRecoveryScreen";
import MainPage from "./src/screens/MainPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./src/components/BottomNavigation";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadImage from "./src/components/UploadImage";
import ProfileScreen from "./src/screens/ProfileScreen";
import AddProduct from "./src/screens/AddProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import AddProductScreen from "./src/screens/AddProductScreen";
import MainScreenNavigation from "./src/navigations/MainPageNavigation";
import MyTabs from "./src/components/BottomNavigation";
import TabsFunc from "./src/components/BottomNavigation";
import { ContextProvider } from "./src/components/Context";

//const Stack = createStackNavigator();

// const Auth = () => {
//   // Stack Navigator for Login and Sign up Screen
//   return (
//     <Stack.Navigator initialRouteName="login">
//       <Stack.Screen
//         name="login"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="signUp"
//         component={RegisterScreen}
//         options={{
//           title: 'signUp', //Set Header Title
//           headerStyle: {
//             backgroundColor: '#307ecc', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={MainPage} />
      <Tab.Screen name="Settings" component={AddProductScreen} />
    </Tab.Navigator>
  );
}

// function Tabs() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="main" component={MainScreenNavigation} />
//       <Tab.Screen name="add" component={AddProductScreenNavigation} />
//     </Tab.Navigator>
//   );
// }
export const Context = createContext();

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        {/* <Stack.Navigator screenOptions={{ headerShown: true }}> */}
        <LoginScreenNavigation />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="EditPost" component={MainScreenNavigation} /> */}
        {/* </Stack.Navigator> */}
      </ContextProvider>
    </NavigationContainer>
    // <View>
    //   <MainPage />
    // </View>
    // <ProfileScreen />
    // <AddProduct />
    // <ProductDetailsScreen />
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>

//     <PasswordRecoveryScreen  />

//   </NavigationContainer>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// const styles = StyleSheet.create({
//   btn: {

//     backgroundColor: '#131369',

//   },
// });
