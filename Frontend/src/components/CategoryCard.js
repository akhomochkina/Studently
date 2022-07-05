import * as React from 'react';
import { Button } from 'react-native-paper';
// const customData = require('../assets/data/items.json');
// const customCategories = require('../assets/data/categories.json');

import {useState , useEffect} from 'react';
import {StyleSheet , Text} from 'react-native';


export default function CategoryCard({categories , setItem , filterItem}){

    const [category , setCategory] = useState();
    const getCategory = () => {
        fetch(categories).then(response => response.json())
    }

    useEffect(() => {
        setCategory(category);
    })
    return categories.map((category) => {

        return (
        <Button style={styles.categoryCard} key={category} mode="contained" onPress={() => filterItem(category)}>
            {category}
        </Button>
        )
    })
}

const styles = StyleSheet.create({
    categoryCard: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
    }
});


