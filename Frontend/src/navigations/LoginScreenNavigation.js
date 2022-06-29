import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import PasswordRecoveryScreen from "../screens/PasswordRecoveryScreen";

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
    </Stack.Navigator>
    
}

export default LoginScreenNavigation;