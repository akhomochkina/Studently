import { createStackNavigator } from "@react-navigation/stack";
import AddProductScreen from "../screens/AddProductScreen";
import MainPage from "../screens/MainPage";

const Stack = createStackNavigator();

const AddProductScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="addProduct"
        component={AddProductScreen}
        options={{
          title: "Add product",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="mainPage"
        component={MainPage}
        options={{
          title: "Add product",
          headerShown: false,
        }}
      />
    </Stack.Navigator>

  );
};

export default AddProductScreenNavigation;
