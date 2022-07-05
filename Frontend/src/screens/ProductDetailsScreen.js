import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
} from "react-native";

const ProductDetailsScreen = () => {
  const [image, setImage] = useState(null);

  const example = {
    product: {
      title: "MacBook Air M1",
      description:
        "Bought 3 years ago. Works really well, I just wanted an upgrade. Can be picked up at Seneca Newnham",
      price: 500,
      location: "North York",
      school: "Seneca College",
      img: "https://i.rtings.com/assets/products/l3QhIc1S/apple-macbook-air-13-m1-2020/design-medium.jpg",
    },
    user: {
      id: 48532355,
      name: "Jane Doe",
      phone: "123 456 789",
      img: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg",
    },
  };

  const { product, user } = example;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView>
        <Image source={{ uri: product.img }} style={styles.img} />
        <View style={styles.header}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <View style={styles.subheader}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={20}
            style={styles.icon}
          />
          <Text style={styles.iconText}>{product.location}</Text>
          <MaterialCommunityIcons
            name="school-outline"
            size={20}
            style={[styles.icon, styles.schoolIcon]}
          />
          <Text>{product.school}</Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.contactBox}>
          <View style={styles.contactUser}>
            <Image source={{ uri: user.img }} style={styles.profileImg} />
            <Text>{user.name}</Text>
          </View>
          <Button title="Contact" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  img: {
    height: 300,
    width: "100%",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 12,
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
    backgroundColor: "#D9D9D9",
  },
  contactUser: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
