import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import PasswordRecoveryScreen from "../screens/PasswordRecoveryScreen";
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from "../screens/LoginScreen";
import MainPage from "../screens/MainPage";
import CardFunc from "../components/Card";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import AddProductScreen from "../screens/AddProductScreen";
import MainScreenNavigation from "./MainPageNavigation";
import ChatPage from '../screens/Chat'

const Stack = createStackNavigator();

const LoginScreenNavigation = () => {
    return( 
    <Stack.Navigator>
        <Stack.Screen 
            name='login'
            component={LoginScreen}
            options={{
                title: 'Back',
                headerShown: false,
            }}
            />
        <Stack.Screen 
            name='recoverPassword'
            component={PasswordRecoveryScreen}
            options={{
                title: 'Back',
                headerShown: false,
            }}
            />
        <Stack.Screen 
            name='signUp'
            component={RegisterScreen}
            options={{
                title: 'Back',
                headerShown: false,
            }}
            />            
        <Stack.Screen 
            name='mainPage'
            component={MainScreenNavigation}
            options={{
                title: 'Home',
                headerShown: false,
            }}
            />       
        <Stack.Screen 
            name='card'
            component={CardFunc}
            options={{
                title: 'Details',
                headerShown: false,
            }}
            /> 
        {/*<Stack.Screen */}
        {/*    name='productDetails'*/}
        {/*    component={ProductDetailsScreen}*/}
        {/*    options={{*/}
        {/*        title: 'Details',*/}
        {/*        headerShown: false,*/}
        {/*    }}*/}
        {/*    /> */}
            <Stack.Screen 
            name='addProduct'
            component={AddProductScreen}
            options={{
                title: 'Back',
                headerShown: false,
            }}
            />
            <Stack.Screen
                name='chat'
                component={ChatPage}
                options={{
                    title: 'Back',
                    headerShown: false,
                }}
            />
    
    </Stack.Navigator>  )  
}

export default LoginScreenNavigation;