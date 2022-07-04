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

const AddProduct = () => {
  const [imageStatus, setImageStatus] = useState("");
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImageStatus("Success");
      setProduct({ ...product, img: result.uri });
    }
  };

  function submitForm() {
    setSubmitted(true);
  }

  useEffect(() => {
    fetchLocations(product.location);
    console.log(locationSuggestions);
  }, [product.location]);

  function fetchLocations(input) {
    fetch(`https://geogratis.gc.ca/services/geoname/en/geonames?q=${input}`)
      .then((res) => res.json())
      .then((res) => setLocationSuggestions(res.features));
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView>
        <View>
          <Text style={styles.title}>Add product</Text>
        </View>
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
          <View style={styles.imgUpload}>
            <Button
              title="Upload"
              style={styles.imgBtn}
              onPress={uploadImage}
            />
            <Text style={{ marginLeft: 8 }}>{imageStatus}</Text>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
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
        <Button title="Submit" onPress={submitForm} />
        <View>
          {submitted && (
            <>
              <Text>Review</Text>
              <Text>{product.title}</Text>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
              <Text>{product.location}</Text>
              <Text>{product.school}</Text>
              <Image
                source={{ uri: product.img }}
                style={{ width: 200, height: 200 }}
              />
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 70,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    marginTop: 16,
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    marginTop: 8,
  },
  imgUpload: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});
