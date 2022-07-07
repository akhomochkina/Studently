import * as React from "react";
import { Button } from "react-native-paper";
// const customData = require('../assets/data/items.json');
// const customCategories = require('../assets/data/categories.json');

import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "./MainButton";

export default function SchoolCard({ categories, setItem, filterItem }) {
  const [school, setSchool] = useState();
  const getCategory = () => {
    fetch(categories).then((response) => response.json());
  };

  useEffect(() => {
    setSchool(school);
  });
  return categories.map((school) => {
    return (
      <MainButton
        title={school}
        onPress={() => filterItem(school)}
        style={styles.btn}
      />
    );
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 8,
  },
  btn: {
    marginBottom: 8,
  },
});
