import React , {useState , useEffect} from "react";
import { StyleSheet, Text, TextInput } from 'react-native';
import Card from './Card';
import {ScrollView , Image , View} from 'react-native';
import customData from '../assets/data/items.js';

export default function ProductDetail() {

    const [data , setData] = useState();
    const getData = () => {
        fetch(customData).then(response => response.json())
    }

    useEffect(() => {
        setData(customData);
    })

    // console.log(customData.Items[0].image)


    return (
        <>
            {/*<Image source={{uri : customData.Items[0].image}} />*/}
            {/*<Text>{customData.Items[0].Name}</Text>*/}
        </>

    );
}