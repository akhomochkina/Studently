import React,{useState} from 'react'
// import './App.css';
// import item from '../assets/data/items'
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Button, View, TextInput } from "react-native";
import Card from './Card';
import Item from '../assets/data/items'


export default function Searching({item , setItem , filterSearchItem}) {

    const [searchTerm,setSearchTerm] = useState('')


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
                    filterSearchItem(e, setSearchTerm)}}
                value={searchTerm}
                style={styles.searchBar}
            />

          <Button title="Clear" onPress={() => setItem(Item)} />
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 20,
    borderColor: "black",

  },
});

