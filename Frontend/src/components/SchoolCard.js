import * as React from 'react';
import { Button } from 'react-native-paper';
// const customData = require('../assets/data/items.json');
// const customCategories = require('../assets/data/categories.json');

import {useState , useEffect} from 'react';
import {StyleSheet , Text} from 'react-native';


export default function SchoolCard({categories , setItem , filterItem}){

    const [school , setSchool] = useState();
    const getCategory = () => {
        fetch(categories).then(response => response.json())
    }

    useEffect(() => {
        setSchool(school);
    })
    return categories.map((school) => {

        return (
            <Button style={styles.categoryCard} key={school} mode="contained" onPress={() => filterItem(school)}>
                {school}
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


