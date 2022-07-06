import { TouchableOpacity, View, Text } from "react-native";

const MainButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "#7E94E5",
  },
  buttonText: {
    textAlign: "center",
    padding: 16,
    color: "white",
  },
};
