import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationButton from "./src/components/RegistrationButton";
import LoginScreen from "./src/screens/LoginScreen";
import LoginScreenNavigation from "./src/navigations/LoginScreenNavigation";
import RegisterScreenNavigation from "./src/navigations/RegisterScreenNavigation";
import RegisterScreen from "./src/screens/RegisterScreen";
import MainPage from "./src/screens/MainPage";
import AddProduct from "./src/screens/AddProduct";

export default function App({ navigation }) {
  return (
    // <RegisterScreen/>
    // <MainPage />
    <AddProduct />
  );
}

// const styles = StyleSheet.create({
//   btn: {

//     backgroundColor: '#131369',

//   },
// });
