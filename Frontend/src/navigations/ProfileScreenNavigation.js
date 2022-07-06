import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import MainPage from "../screens/MainPage";
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
            <Stack.Screen 
            name='mainPage'
            component={MainPage}
            options={{
                headerShown: false,
            }}
            />       
    </Stack.Navigator>    
   )
}

export default ProfileScreenNavigation;