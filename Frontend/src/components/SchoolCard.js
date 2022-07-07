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
      //   <Button
      //     style={styles.categoryCard}
      //     key={school}
      //     mode="contained"
      //     onPress={() => filterItem(school)}
      //   >
      //     {school}
      //   </Button>
      //   <View style={styles.categoryCard}>
      //     <Text style={styles.text}>{school}</Text>
      //   </View>
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
  //   categoryCard: {
  //     // marginLeft: 20,
  //     // marginRight: 20,
  //     // marginTop: 5,
  //     backgroundColor: "#7E94E5",
  //     height: 50,
  //     width: "100%",
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginBottom: 8,
  //   },
  //   text: {
  //     color: "white",
  //     marginTop: 4,
  //   },
});
