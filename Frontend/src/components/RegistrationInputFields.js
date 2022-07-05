import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RegistrationInutFields({icon, style, ...otherProps}){
    return (
        <View style={[styles.container, {style}]}>
            {icon && (<MaterialCommunityIcons name={icon} size={20} style={styles.icon}/>)}
            <TextInput placeholderTextColor={'#a9a9ab'} style={styles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#1b1b1c',
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: '2%',
        marginTop: '5%'
    },

    icon: {
        marginRight: 10
    },

    text: {
        fontSize: 16
    }
})