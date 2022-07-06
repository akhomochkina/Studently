import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

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
import MainButton from "../components/MainButton";
import TextButton from "../components/TextButton";
import ChooseCategories from "../components/ChooseCategories";
import Items from "../assets/data/items";

const AddProductScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const getPermission = async () => {
    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log("permission:", imagePermission.status);

    setGalleryPermission(imagePermission.status === "granted");

    if (imagePermission.status !== "granted") {
      alert("Permission for media access needed.");
    }
  };

  const uploadImage = async () => {
    // getPermission();

    // if (galleryPermission) {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    // if (!result.cancelled) {
    setImage(result.uri);
    setProduct({ ...product, img: result.uri });
    // }
    // }
  };

  function submitForm() {
    setSubmitted(true);
    alert(`${product.Name} has been posted`);
    Items.push(product);
    console.log(Items);
  }

  function fetchImage() {
    const accessKey = "h6tJzpxOM079qC08gY1SwJQk4PNsFYFYP79YEBt3IoQ";
    const query = product.name;
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=${accessKey}&limit=1&query=${query}`
    )
      .then((res) => res.json())
      .then((res) => setImage(res.results[0].urls.regular));
  }

  const ex = {
    Id: 1,
    Name: "Bath towels",
    Price: 25,
    Category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    dateCreated: "05/07/2022",
    prodLocation: "North York",
    school: "Seneca College",
    description:
      "Produced from sustainably sourced 100% certified Egyptian cotton, our plush terry towels are made with the planet in mind.",
    userId: 11111,
    userName: "Reza Poursafa",
    userPhone: "647 111 1111",
    userImg:
      "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            editable
            placeholder="Enter product name"
            style={styles.input}
            onChangeText={(e) => setProduct({ ...product, Name: e })}
          />
        </View>
        <View>
          <Text style={styles.label}>Description</Text>
          <TextInput
            editable
            placeholder="Enter product description"
            style={styles.input}
            multiline
            numberOfLines={5}
            onChangeText={(e) => setProduct({ ...product, description: e })}
          />
        </View>
        <View>
          <Text style={styles.label}>Price (CAD)</Text>
          <TextInput
            editable
            placeholder="Enter product price"
            style={styles.input}
            onChangeText={(e) => setProduct({ ...product, Price: e })}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>Image</Text>
          <View style={styles.imgContainer}>
            <TextButton title="Upload" onPress={uploadImage} />
            <TextButton
              title="Generate"
              style={styles.generate}
              onPress={fetchImage}
            />
          </View>
          <View style={styles.img}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </View>
        <View>
          <Text style={styles.label}>Category</Text>
          <ChooseCategories setProduct={setProduct} product={product} />
        </View>
        <View>
          <Text style={styles.label}>Location</Text>
          <TextInput
            editable
            placeholder="Enter area name"
            style={styles.input}
            onChangeText={(e) => setProduct({ ...product, location: e })}
          />
        </View>
        <View>
          <Text style={styles.label}>School</Text>
          <TextInput
            editable
            placeholder="Choose school if relevant"
            style={styles.input}
            onChangeText={(e) => setProduct({ ...product, school: e })}
          />
        </View>
        <MainButton
          title="Submit"
          onPress={() => submitForm()}
          style={styles.submitBtn}
        />
        {/* <View>
          {submitted && (
            <>
              <Text>Review</Text>
              <Text>{product.name}</Text>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
              <Text>{product.location}</Text>
              <Text>{product.school}</Text>
              <Text>{product.category}</Text>
              <Image
                source={{ uri: product.img }}
                style={{ width: 200, height: 200 }}
              />
            </>
          )}
        </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
  },
  generate: {
    marginLeft: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
  },
  imgContainer: {
    // flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // marginTop: 8,
  },
  img: {
    marginTop: 12,
  },
  submitBtn: {
    marginTop: 12,
  },
});
