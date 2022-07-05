import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();

const ProfileScreenNavigation = () => {
    <Stack.Navigator>
        <Stack.Screen 
            name='editprofile'
            component={EditProfileScreen}
            options={{
                title: 'Account Info',
                headerShown: true,
            }}
            />        
    </Stack.Navigator>    
}

export default ProfileScreenNavigation;