import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { Image, ScrollView, StyleSheet, Button } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import CategoryCard from "../components/CategoryCard";
import Items from "../assets/data/items.js";
import MyTabs from "../components/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreenNavigation from "../navigations/MainPageNavigation";
import AddProductScreenNavigation from "../navigations/AddProductScreenNavigation";
import { Context } from "../../App";

const Tab = createBottomTabNavigator();

export default function MainPage({ navigation }) {
  const { products, setProducts } = useContext(Context);
  const [item, setItem] = useState(products);
  const categories = [...new Set(Items.map((Val) => Val.Category))];

  const filterItem = (curcat) => {
    const newItem = Items.filter((newVal) => {
      return newVal.Category === curcat;
    });

    setItem(newItem);
  };

  const filterSearchItem = (searchTerm, setSearchTerm) => {
    const newItem = item.filter((val) => {
      if (searchTerm == "") {
        setItem(Items);
        return val;
      } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
    setItem(newItem);
  };

  return (
    <View>
      <ScrollView>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        />

        <CategoryCard
          categories={categories}
          setItem={setItem}
          filterItem={filterItem}
        />
        <SearchBar
          item={item}
          setItem={setItem}
          filterSearchItem={filterSearchItem}
        />
        <Card item={item} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  bottom: {
    position: "absolute",
    top: 0,
  },
});
