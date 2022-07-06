import { TouchableOpacity, View, Text } from "react-native";

const TextButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = {
  buttonText: {
    color: "#7E94E5",
    fontWeight: "bold",
    fontSize: 14,
  },
};
