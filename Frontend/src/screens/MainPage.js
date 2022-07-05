import Card from '../components/Card'
import SearchBar from "../components/SearchBar";
import {useState , useEffect} from "react";
import {View} from 'react-native'
import {Image, ScrollView, StyleSheet} from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import CategoryCard from "../components/CategoryCard";
import ProductDetail from "../components/ProductDetail";
import Items from '../assets/data/items.js';

console.log(Items)

export default function MainPage({navigation}){

    // console.log(customData)

    const [item , setItem] = useState(Items);

    const categories = [...new Set(Items.map((Val) => Val.Category))];

    console.log(categories)

    const filterItem = (curcat) => {
        const newItem = Items.filter((newVal) => {
            return newVal.Category === curcat;
        });
        setItem(newItem);
    };

    return(
        <View>
            <ScrollView>

                <Image source={require('../assets/images/logo.png')} style={styles.image} />

                <CategoryCard categories={categories} setItem={setItem} filterItem={filterItem}/>
                <SearchBar />
                <Card item={item}/>



            </ScrollView>
            <BottomNavigation />
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 20
    },
    bottom: {
        position: "absolute",
        top: 0,
    }
});