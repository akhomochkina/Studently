import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileScreenNavigation = () => {
   return( <Stack.Navigator>
        <Stack.Screen 
            name='profileScreen'
            component={ProfileScreen}
            options={{
                title: 'Account Info',
                headerShown: true,
            }}
            />                
    </Stack.Navigator>    
   )
}

export default ProfileScreenNavigation;