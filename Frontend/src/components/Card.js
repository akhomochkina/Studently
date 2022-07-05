import * as React from 'react';
import {AppRegistry, View , StyleSheet} from 'react-native';
import {Provider as PaperProvider, Chip, Card, Title, Paragraph, Button , Avatar} from 'react-native-paper';
import {useEffect, useState} from "react";



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function CardFunc({item}) {

    return item
        .map((data) => {

            return (

                <PaperProvider key={data.Id}>

                    <View style={styles.view} >

                        <Card style={styles.cardGroup} >
                            {/*<Card.Title title="Card Title"  />*/}
                            <Card.Content>
                                <Title>{data.Name}</Title>
                                <Paragraph>{data.Price} CAD</Paragraph>

                            </Card.Content>
                            <Card.Cover source={{ uri: data.image }} />
                            <Card.Actions>
                                {/*<Button>Cancel</Button>*/}
                                <Button contentStyle={styles.button} icon="arrow-right" onPress={() => navigation.navigate('ProductDetail')}>Buy</Button>
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
        // display: "grid",
        // gridTemplateColumns: "repeat(2 , 1fr)",
        // columnGap: 10,
        // rowGap: "1em",

    },

    view: {


    },
    button: {
        flexDirection: 'row-reverse',
        float: 'right'
    }

});


