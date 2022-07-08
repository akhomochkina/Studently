import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../screens/ProfileScreen";
import { Button } from "react-native";
import RNRestart from 'react-native-restart';

const Stack = createStackNavigator();

const ProfileScreenNavigation = () => {
   return( <Stack.Navigator>
        <Stack.Screen 
            name='profileScreen'
            component={ProfileScreen}
            options={{
                headerTitle: "Account Info" ,
                headerRight: () => (
                  <Button
                    onPress={() => alert(`You've been sucessfully logged out!`)}
                    title="Log Out"
                    color="#7E94E5"
                    marginLeft="10"
                  />
                ),
              }}
            />                
    </Stack.Navigator>    
   )
}

export default ProfileScreenNavigation;