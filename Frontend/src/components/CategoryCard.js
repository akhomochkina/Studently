import * as React from "react";
// import { Button } from "react-native-paper";
import { Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// const customData = require('../assets/data/items.json');
// const customCategories = require('../assets/data/categories.json');

import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CategoryCard({ categories, setItem, filterItem }) {
  const [category, setCategory] = useState();
  const getCategory = () => {
    fetch(categories).then((response) => response.json());
  };

  useEffect(() => {
    setCategory(category);
  });

  function getIcon(category) {
    let name = "home";

    if (category == "Study Material") {
      name = "book-open-outline";
    }

    return name;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal={true}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => filterItem(item)}
            key={item}
            title={item}
          >
            <View style={styles.flexContainer}>
              <View style={styles.categoryCard}>
                <MaterialCommunityIcons
                  name={getIcon(item)}
                  color={"white"}
                  size={30}
                />
              </View>
              <Text style={styles.text}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  categoryCard: {
    backgroundColor: "#7E94E5",
    height: 80,
    width: 120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 4,
  },
  text: {
    marginTop: 4,
  },
});
