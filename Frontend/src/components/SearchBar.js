import React,{useState} from 'react'
// import './App.css';
// import item from '../assets/data/items'
import { Searchbar } from 'react-native-paper';
import {StyleSheet , Button} from 'react-native';
import Card from './Card';
import Item from '../assets/data/items'

export default function Searching({item , setItem , filterSearchItem}) {

    const [searchTerm,setSearchTerm] = useState('')

    return (
        <>
        <div className="App">
            <input type="text" style={{backgroundColor: 'white' , color: 'red' , borderColor: 'white' , borderRadius: 5}} placeholder="Search..." onChange={
                e=>{
                    setSearchTerm(e.target.value);
                filterSearchItem(e.target.value , setSearchTerm)}
            } />
            <Button
                title="Clear"
                onPress={() => setItem(Item)}
                style={{}}
            />
        </div>
        </>
    );
}

const styles = StyleSheet.create({
    searchBar : {
        margin: 30
    }
});

