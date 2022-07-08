import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../screens/ProfileScreen";
import { Button } from "react-native";
import RNRestart from 'react-native-restart';

const Stack = createStackNavigator();



const ProfileScreenNavigation = ({navigation}) => {
   return( <Stack.Navigator>
        <Stack.Screen 
            name='profileScreen'
            component={ProfileScreen}
            options={{
                headerTitle: "Account Info" ,
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("login")}
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