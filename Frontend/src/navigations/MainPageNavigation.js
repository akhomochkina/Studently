import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';

const Stack = createStackNavigator();

const MainScreenNavigation = () => {
    <Stack.Navigator>
        <Stack.Screen 
            name='mainPage'
            component={MainPage}
            options={{
                title: 'Home',
                headerShown: false,
            }}
            />        
    </Stack.Navigator>    
}

export default MainScreenNavigation;