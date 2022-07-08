import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { Image, ScrollView, StyleSheet, Button } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import CategoryCard from "../components/CategoryCard";
import Items from "../assets/data/items.js";
import MyTabs from "../components/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreenNavigation from "../navigations/MainPageNavigation";
import AddProductScreenNavigation from "../navigations/AddProductScreenNavigation";
import SchoolCard from "../components/SchoolCard";
import { Context } from "../../App";
import Item from "../assets/data/items";
import TextButton from "../components/TextButton";

const Tab = createBottomTabNavigator();

export default function MainPage({ navigation }) {
  const { products, setProducts } = useContext(Context);
  const [item, setItem] = useState(products);
  const categories = [...new Set(Items.map((Val) => Val.Category))];
  const schools = [...new Set(Items.map((Val) => Val.school))];

  const filterItem = (curcat) => {
    const newItem = Items.filter((newVal) => {
      return newVal.Category === curcat;
    });

    setItem(newItem);
  };

  const filterSchoolItem = (curschool) => {
    const newItem = Items.filter((newVal) => {
      return newVal.school === curschool;
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
    <View style={styles.container}>
      <ScrollView>
        <SearchBar
          item={item}
          setItem={setItem}
          filterSearchItem={filterSearchItem}
        />
        <Text style={styles.text}>Categories</Text>
        <CategoryCard
          categories={categories}
          setItem={setItem}
          filterItem={filterItem}
        />

        <Text style={styles.text}>Schools</Text>
        <SchoolCard
          setItem={setItem}
          filterItem={filterSchoolItem}
          categories={schools}
        />
        <TextButton
            title="Clear Filters"
            onPress={() => setItem(Item)}
            style={styles.clear}
        />
        <View style={styles.results}>
          <Card item={item} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20,
  },
  bottom: {
    position: "absolute",
    top: 0,
  },
  text: {
    // marginLeft: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  results: {
    marginTop: 16,
    // flex: 1,
    // flexDirection: "row",
  },
  clear: {
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 10
  },
});
