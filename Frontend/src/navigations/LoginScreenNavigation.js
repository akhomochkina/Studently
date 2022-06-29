import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import PasswordRecoveryScreen from "../screens/PasswordRecoveryScreen";
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const LoginScreenNavigation = () => {
    <Stack.Navigator>
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
    </Stack.Navigator>    
}

export default LoginScreenNavigation;