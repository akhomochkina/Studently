import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const RegisterScreenNavigation = () => {
    <Stack.Navigator>
        <Stack.Screen 
            name='login'
            component={LoginScreen}
            options={{
                title: 'Back',
                headerShown: false,
            }}
            />        
    </Stack.Navigator>    
}

export default RegisterScreenNavigation;