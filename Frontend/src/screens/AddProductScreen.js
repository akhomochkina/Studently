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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      {/* <ScrollView> */}
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          editable
          placeholder="Enter product name"
          style={styles.input}
          onChangeText={(e) => setProduct({ ...product, name: e })}
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
          onChangeText={(e) => setProduct({ ...product, price: e })}
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
        // onPress={() => navigation.navigate("mainPage")}
        onPress={submitForm}
        style={styles.submitBtn}
      />
      <View>
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
      </View>
      {/* </ScrollView> */}
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
