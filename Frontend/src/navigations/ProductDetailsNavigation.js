import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ChatPage from "../screens/Chat";

const Stack = createStackNavigator();

const ProductDetailsNavigation = () => {
   return( <Stack.Navigator>
        <Stack.Screen 
            name='productDetails'
            component={ProductDetailsScreen}
            options={{
                title: 'test',
                headerShown: true,
            }}
            />     
        {/* <Stack.Screen 
            name='chat'
            component={ChatPage}
            options={{
                title: 'Chat',
                headerShown: true,
            }}
            />               */}
    </Stack.Navigator>    
   )
}

export default ProductDetailsNavigation;