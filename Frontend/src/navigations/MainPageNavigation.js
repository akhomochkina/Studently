import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import ProductDetailsScreenNavigation from "./ProductDetailsScreenNavigation";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const MainScreenNavigation = () => {
    return( 
    <Stack.Navigator>
        <Stack.Screen 
            name='mainPage'
            component={MainPage}
            options={{
                title: 'Home',
                headerShown: false,
            }}
            /> 
         <Stack.Screen 
            name='productDetails'
            component={ProductDetailsScreen}
            options={{
                title: 'Details',
                headerShown: false,
            }}
            />        
    </Stack.Navigator>    
    )
}

export default MainScreenNavigation;