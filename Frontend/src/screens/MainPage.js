import Card from '../components/Card'
import SearchBar from "../components/SearchBar";
import {useState , useEffect} from "react";
import {View} from 'react-native'
import {Image, ScrollView, StyleSheet} from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import CategoryCard from "../components/CategoryCard";
import ProductDetail from "../components/ProductDetail";
import Items from '../assets/data/items.js';

export default function MainPage({navigation}){

    const [item , setItem] = useState(Items);
    const categories = [...new Set(Items.map((Val) => Val.Category))];

    const filterItem = (curcat) => {
        const newItem = Items.filter((newVal) => {
            return newVal.Category === curcat;
        });

        setItem(newItem);
    };


    const filterSearchItem = (searchTerm , setSearchTerm) => {
        const newItem = item.filter((val)=>{

            if(searchTerm == ""){

                setItem(Items);
                return val;
            }
            else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){

                return val;
            }
        })
        setItem(newItem)

    };



    return(
        <View>
            <ScrollView>

                <Image source={require('../assets/images/logo.png')} style={styles.image} />

                <CategoryCard categories={categories} setItem={setItem} filterItem={filterItem}/>
                {/* <SearchBar item={item} setItem={setItem} filterSearchItem={filterSearchItem}/> */}
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