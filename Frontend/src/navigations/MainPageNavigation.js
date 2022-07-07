import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddProductScreenNavigation from "./AddProductScreenNavigation";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreenNavigation from "./ProfileScreenNavigation";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={MainPage} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={40} />
          ),
        }}/>
        <Tab.Screen name="add" component={AddProductScreenNavigation} options={{
          tabBarLabel: 'Sell',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle-outline" color={color} size={40} />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreenNavigation}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          ),
        }} />
      </Tab.Navigator>
    );
  }

const MainScreenNavigation = () => {
    return( 
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="main" component={MainScreenNavigation} />
         <Stack.Screen 
            name='productDetails'
            component={ProductDetailsScreen}
            options={{
                title: 'Details',
                headerShown: true,
            }}
            />    
        <Stack.Screen name="+" component={AddProductScreenNavigation} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
 
       
    </Stack.Navigator>    
     
    
    )
}

export default MainScreenNavigation;
