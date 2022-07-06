// import * as React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import AddProductScreenNavigation from '../navigations/AddProductScreenNavigation';
// import MainScreenNavigation from '../navigations/MainPageNavigation';
// import ProfileScreenNavigation from '../navigations/ProfileScreenNavigation';
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// export default function MyTabBar({ state, descriptors, navigation }) {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label =
//             options.tabBarLabel !== undefined
//               ? options.tabBarLabel
//               : options.title !== undefined
//               ? options.title
//               : route.name;
  
//           const isFocused = state.index === index;
  
//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//             });
  
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };
  
//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };
  
//           return (
//             <TouchableOpacity
//               accessibilityRole="button"
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{ flex: 1 }}
//             >
//               <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                 {label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   }

//   export default function TabsFunc() {
//     return (
//         <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             if (route.name === 'Home') {
//               return (
//                 <Ionicons
//                   name={
//                     focused
//                       ? 'ios-information-circle'
//                       : 'ios-information-circle-outline'
//                   }
//                   size={size}
//                   color={color}
//                 />
//               );
//             } else if (route.name === 'Settings') {
//               return (
//                 <Ionicons
//                   name={focused ? 'ios-list-box' : 'ios-list'}
//                   size={size}
//                   color={color}
//                 />
//               );
//             }
//           },
//           tabBarInactiveTintColor: 'gray',
//           tabBarActiveTintColor: 'tomato',
//         })}
//       >
//         <Tab.Screen
//           name="main"
//           component={MainScreenNavigation}
          
//         />
//         <Tab.Screen name="add" component={AddProductScreenNavigation} />
//       </Tab.Navigator>
//     );
//   }

// // function Feed() {
// //     return (
// //         <View >
// //             <Text />
// //         </View>
// //     );
// // }

// // function Profile() {
// //     return (
// //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //             <Text>Profile!</Text>
// //         </View>
// //     );
// // }

// // function Notifications() {
// //     return (
// //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //             <Text>Notifications!</Text>
// //         </View>
// //     );
// // }

// // const Tab = createBottomTabNavigator();

// // function MyTabs() {
// //     return (
// //         <Tab.Navigator
// //             initialRouteName="Feed"
// //             screenOptions={{
// //                 tabBarActiveTintColor: '#e91e63',
// //                 tabBarStyle: {  position: 'fixed'  , platform: 'ios' },

// //             }}
// //         >
// //             <Tab.Screen
// //                 name="Feed"
// //                 component={Feed}
// //                 options={{
// //                     tabBarLabel: 'Home',
// //                     tabBarIcon: ({ color, size }) => (
// //                         <MaterialCommunityIcons name="home" color={color} size={size} />
// //                     ),
// //                 }}
// //             />
// //             <Tab.Screen
// //                 name="Notifications"
// //                 component={Notifications}
// //                 options={{
// //                     tabBarLabel: 'Add',
// //                     tabBarIcon: ({ color, size }) => (
// //                         <MaterialCommunityIcons name="plus" color={color} size={size} />
// //                     ),
// //                 }}
// //             />
// //             <Tab.Screen
// //                 name="Profile"
// //                 component={Profile}
// //                 options={{
// //                     tabBarLabel: 'Profile',
// //                     tabBarIcon: ({ color, size }) => (
// //                         <MaterialCommunityIcons name="account" color={color} size={size} />
// //                     ),
// //                 }}
// //             />
// //         </Tab.Navigator>
// //     );
// // }

// // export default function App() {
// //     return (
// //         // <NavigationContainer>
// //             <MyTabs />
// //         // </NavigationContainer>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     bottomNav: {
// //         position: "fixed",
// //         backgroundColor: "red"
// //     }
// // });

