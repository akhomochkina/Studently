import { createStackNavigator } from "@react-navigation/stack";
import AddProductScreen from "../screens/AddProductScreen";

const Stack = createStackNavigator();

const AddProductScreenNavigation = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="addProduct"
      component={AddProductScreen}
      options={{
        title: "Add product",
        headerShown: true,
      }}
    />
  </Stack.Navigator>;
};

export default AddProductScreenNavigation;
