import React, { useState } from "react";
// import './App.css';
// import item from '../assets/data/items'
import { Searchbar } from "react-native-paper";
import { StyleSheet, Button, View, TextInput } from "react-native";
import Card from "./Card";
import Item from "../assets/data/items";
import TextButton from "./TextButton";

export default function Searching({ item, setItem, filterSearchItem }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <View>
        {/*<TextInput*/}
        {/*  style={styles.searchBar}*/}
        {/*  onChangeText={(e) => {*/}
        {/*    setSearchTerm(e);*/}
        {/*    filterSearchItem(e, setSearchTerm);*/}
        {/*  }}*/}

        {/*/>*/}
        <Searchbar
          placeholder="Search"
          onChangeText={(e) => {
            setSearchTerm(e);
            filterSearchItem(e, setSearchTerm);
          }}
          value={searchTerm}
          style={styles.searchBar}
        />

        <TextButton
          title="Clear"
          onPress={() => setItem(Item)}
          style={styles.clear}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderColor: "black",
    marginBottom: 20,
  },
  clear: {
    alignSelf: "center",
  },
});
