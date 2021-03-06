import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";

const MainButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

MainButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "#7E94E5",
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    padding: 16,
    color: "white",
    fontWeight: "bold",
  },
};
