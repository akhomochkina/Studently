import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function ErrorMessages({ error, visible }) {
    if(!visible || !error) return null;
    return <Text style={styles.err}>{error}</Text>;
}

const styles = StyleSheet.create({
    err: {
        color: '#b83535'
    },
})