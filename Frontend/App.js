import React, { createContext } from "react";
import LoginScreenNavigation from "./src/navigations/LoginScreenNavigation";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/components/Context";
import { LogBox } from 'react-native';


export const Context = createContext();

export default function App() {
  
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <ContextProvider>
        <LoginScreenNavigation />
      </ContextProvider>
    </NavigationContainer>
  );
}