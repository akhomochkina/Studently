import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import ProductDetailsScreenNavigation from "./ProductDetailsScreenNavigation";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import MyTabBar from "../components/BottomNavigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddProductScreenNavigation from "./AddProductScreenNavigation";
import AddProductScreen from "../screens/AddProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileScreenNavigation from "./ProfileScreenNavigation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="main" component={MainPage} />
        <Tab.Screen name="add" component={AddProductScreenNavigation} />
        <Tab.Screen name="profile" component={ProfileScreenNavigation} />
      </Tab.Navigator>
    );
  }

const MainScreenNavigation = () => {
    return( 
    <Stack.Navigator>
        <Stack.Screen 
            name='mainPage'
            component={MainPage}
            options={{
                title: 'Home',
                headerShown: false,
            }}
            /> 
         {/*<Stack.Screen */}
         {/*   name='productDetails'*/}
         {/*   component={ProductDetailsScreen}*/}
         {/*   options={{*/}
         {/*       title: 'Details',*/}
         {/*       headerShown: false,*/}
         {/*   }}*/}
         {/*   />        */}
    </Stack.Navigator>    
     
    
    )
}

export default MainScreenNavigation;