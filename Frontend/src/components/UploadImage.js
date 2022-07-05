import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
  
  const [image, setImage] = useState(" "); 
  const [text, setText] = useState(`Click Here To \n Upload Image`); 

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
      setText(" ");
    }
  };

  return(
    <TouchableOpacity  onPress={pickImage} >
      {image && <Image source={{ uri: image }} style={styles.img}  /> }
       <Text style={{position: 'absolute', top: 55, left: 25, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} >{text}</Text>  
    </TouchableOpacity>  
  );
}

const styles=StyleSheet.create({
   img: {
    width: 150,
    height: 150,
    backgroundColor: "#d1cdcd",
  }, 
})
