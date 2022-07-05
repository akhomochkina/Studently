import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const ProductDetailsScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="productDetails"
        component={ProductDetailsScreen}
        options={{
          title: "Product details",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailsScreenNavigation;
