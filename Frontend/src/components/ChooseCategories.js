import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MainButton from "./MainButton";
import { useState } from "react";

const ChooseCategories = ({ setProduct, product }) => {
  const [selected, setSelected] = useState(null);
  const categories = [
    {
      id: 1,
      name: "Home Appliances",
    },
    {
      id: 2,
      name: "Study Material",
    },
    {
      id: 3,
      name: "Books",
    },
  ];

  function handlePress(name) {
    setSelected(name);
    setProduct({ ...product, Category: name });
  }

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <View key={category.id}>
          <TouchableOpacity onPress={() => handlePress(category.name)}>
            <View
              style={[
                styles.button,
                {
                  backgroundColor:
                    selected === category.name ? "#2E3C6F" : "#7E94E5",
                },
              ]}
            >
              <Text style={styles.buttonText}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ChooseCategories;

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7E94E5",
    marginBottom: 4,
  },
  buttonText: {
    textAlign: "center",
    padding: 16,
    color: "white",
    fontWeight: "bold",
  },
});
