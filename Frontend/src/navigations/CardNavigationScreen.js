import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import CardFunc from "../components/Card";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const CardNavigationScreen = () => {
    return( 
    <Stack.Navigator>  
        <Stack.Screen 
            name='mainPage'
            component={MainPage}
            options={{
                title: 'Details',
                headerShown: true,
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
         {/*   name='productDetails'*/}
         {/*   component={ProductDetailsScreen}*/}
         {/*   options={{*/}
         {/*       title: 'Details',*/}
         {/*       headerShown: true,*/}
         {/*   }}*/}
         {/*   />        */}
    </Stack.Navigator>   
     )
}

export default CardNavigationScreen;