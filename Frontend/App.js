import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationButton from "./src/components/RegistrationButton";
import LoginScreen from "./src/screens/LoginScreen";
import LoginScreenNavigation from "./src/navigations/LoginScreenNavigation";
import RegisterScreenNavigation from "./src/navigations/RegisterScreenNavigation";
import RegisterScreen from "./src/screens/RegisterScreen";
import PasswordRecoveryScreen from "./src/screens/PasswordRecoveryScreen";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadImage from "./src/components/UploadImage";
import ProfileScreen from "./src/screens/ProfileScreen";
import AddProduct from "./src/screens/AddProduct";

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

export default function App() {
  return (
    // <NavigationContainer>
    //   <LoginScreenNavigation />
    // </NavigationContainer>
    // <ProfileScreen />
    <AddProduct />
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
