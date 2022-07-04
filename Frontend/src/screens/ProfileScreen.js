import React from "react";
import { StyleSheet, ImageBackground, Keyboard, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImage from "../components/UploadImage";

export default function ProfileScreen({ navigation }){
    return(
        <View style={styles.container}>    
            <UploadImage />       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: "20%"
    },

    image: { 

    },
});