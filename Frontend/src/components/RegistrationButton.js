import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RegistrationButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#1f2021",
    fontWeight: "bold",
    fontSize: 17,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
