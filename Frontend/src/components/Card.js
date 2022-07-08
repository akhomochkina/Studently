import * as React from "react";
import { AppRegistry, View, StyleSheet, Text } from "react-native";
import {
  Provider as PaperProvider,
  Chip,
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
} from "react-native-paper";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function CardFunc({ item, navigation }) {
  return item.map((data) => {
    return (
      <PaperProvider key={data.Id}>
        <View style={styles.view}>
          <Card
            style={styles.cardGroup}
            mode="outlined"
            onPress={() =>
              navigation.navigate("productDetails", { data: data })
            }
          >
            <Card.Cover
              source={{ uri: data.image }}
              style={{ marginBottom: 8, height: 150 }}
            />
            <Card.Content>
              <Text style={styles.name}>{data.Name}</Text>
              <View style={styles.paragraph}>
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  color={"#A4A3A3"}
                  size={25}
                />
                <Text style={{ marginLeft: 4, color: "#A4A3A3" }}>
                  {data.prodLocation}
                </Text>
              </View>
              <View style={styles.bottom}>
                <Text style={styles.price}>${data.Price}</Text>
                <MaterialCommunityIcons
                  name="heart-outline"
                  color={"#A4A3A3"}
                  size={25}
                />
              </View>
              {/* <Paragraph>{data.Price} CAD</Paragraph> */}
            </Card.Content>
            <Card.Actions>{/*<Button>Cancel</Button>*/}</Card.Actions>
          </Card>
        </View>
      </PaperProvider>
    );
  });
}

const styles = StyleSheet.create({
  cardGroup: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // display: "table-cell",
    // margin: 20,
    // padding: 30,
    // display: "grid",
    // gridTemplateColumns: "repeat(2 , 1fr)",
    // columnGap: 10,
    // rowGap: "1em",
    borderRadius: 4,
    marginBottom: 8,
  },
  paragraph: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 18,
  },
  name: {
    marginBottom: 12,
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: "#e3e3e3"
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7E94E5",
  },
  //   view: {
  //     minWidth: 200,
  //   },

  // view: {},
  // button: {
  //   flexDirection: "row-reverse",
  //   float: "right",
  // },
});
