import * as React from 'react';
import {AppRegistry, View , StyleSheet} from 'react-native';
import {Provider as PaperProvider, Chip, Card, Title, Paragraph, Button , Avatar} from 'react-native-paper';
// import { name as appName } from './app.json';
// import App from './src/App';
// import item from '../assets/data/items.json'
// const customData = require('../assets/data/items.json');
import {useEffect, useState} from "react";
const customData = require('../assets/data/items.json');


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function Main() {

    const [data , setData] = useState();

    const getData = () => {
        fetch(customData).then(response => response.json())
    }

    useEffect(() => {
        setData(customData);
    })

    return customData.Items.map((data) => {
        return (

            <PaperProvider>

                <View style={styles.view}>

                    <Card style={styles.cardGroup}>
                        <Card.Title title="Card Title"  />
                        <Card.Content>
                            <Title>{data.Name}</Title>
                            <Paragraph>{data.Price} CAD</Paragraph>

                        </Card.Content>
                        <Card.Cover source={{ uri: data.image }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>

                </View>


            </PaperProvider>
        );
    })


}

const styles = StyleSheet.create({
    cardGroup: {
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "center",
        // display: "table-cell",
        margin: 20,
        padding: 30,

    },

    view: {
        display: "table",
        width: "100%"
    },
});