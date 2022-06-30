import Card from '../components/Card'
import SearchBar from "../components/SearchBar";
import {Fragment} from "react";
import {Image, ScrollView, StyleSheet} from "react-native";

export default function MainPage(){
    return(
        <Fragment>
            <ScrollView>



                <Image source={require('../assets/images/Studently.png')} style={styles.image} />
                <SearchBar />
                <Card />
            </ScrollView>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "20%"
// width: "50%"
    }
});