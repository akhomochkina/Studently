import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RegistrationInutFields({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, { style }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor={"#A4A3A3"}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}
// dark grey - #A4A3A3
// light grey - #D9D9D9
// super light grey - #F3F3F3
// blue - #7E94E5

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#A4A3A3",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: "2%",
    marginTop: "5%",
    width: "100%",
  },

  icon: {
    marginRight: 10,
    color: "#A4A3A3",
  },

  text: {
    fontSize: 16,
  },
});
