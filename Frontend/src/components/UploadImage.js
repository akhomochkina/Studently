import React, { useState } from 'react';
import { Button, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
  
  const [image, setImage] = useState(null); 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (

    <TouchableOpacity style={styles.container} onPress={pickImage} >
      {image && <Image source={{ uri: image }} style={styles.img}  /> }
       <Text style={{position: 'absolute', top: 55, left: 20, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} > Click Here To {"\n"} Upload Image</Text>  
    </TouchableOpacity>
  
  );
}

const styles=StyleSheet.create({
  container: {
    //marginTop: "70%",
  },

  img: {
    width: 150,
    height: 150,
    backgroundColor: "#d1cdcd",
  },
 
})
