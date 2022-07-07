import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  Linking,
  Dimensions,
} from "react-native";
import MainButton from "../components/MainButton";


const ProductDetailsScreen = ({ navigation , route }) => {

  let item = route.params.data;

  const [image, setImage] = useState(null);

  function handlePress() {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${1234567890}";
    } else {
      phoneNumber = "telprompt:${1234567890}";
    }

    Linking.openURL(phoneNumber);
  }

  function goToChat(){
    navigation.navigate('chat' , {initial: false})
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView>
        <Image source={{ uri: item.image }} style={styles.img} />
        <Text style={styles.date}>Created on {item.dateCreated}</Text>
        <View style={styles.header}>
          <Text style={styles.title}>{item.Name}</Text>
          <Text style={styles.price}>${item.Price}</Text>
        </View>
        <View style={styles.subheader}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={20}
            style={styles.icon}
          />
          <Text style={styles.iconText}>{item.prodLocation}</Text>
          <MaterialCommunityIcons
            name="school-outline"
            size={20}
            style={[styles.icon, styles.schoolIcon]}
          />
          <Text style={styles.iconText}>{item.school}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.contactBox}>
          <View style={styles.contactUser}>
            <Image source={{ uri: item.userImg }} style={styles.profileImg} />
            <Text>{item.userName}</Text>
          </View>
          <View >
          <MainButton title="Call" onPress={handlePress} />
          <Text> </Text>
          <MainButton title="Chat" onPress={goToChat} />
          </View>          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductDetailsScreen;

// dark grey - #A4A3A3
// light grey - #D9D9D9
// super light grey - #F3F3F3
// blue - #7E94E5

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 300,
    minWidth: "100%",
    borderRadius: 4,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 12,
  },
  date: {
    fontStyle: "italic",
    marginTop: 12,
    color: "#A4A3A3",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "#7E94E5",
    fontSize: 18,
    fontWeight: "bold",
  },
  subheader: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 8,
  },
  icon: {
    marginRight: 4,
    color: "#A4A3A3",
  },
  schoolIcon: {
    marginRight: 8,
  },
  iconText: {
    marginRight: 16,
    color: "#A4A3A3",
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 99999,
    marginRight: 12,
  },
  description: {
    fontSize: 16,
  },
  contactBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 4,
  },
  contactUser: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
