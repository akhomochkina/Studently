import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import * as Yup from "yup";
import * as Animatable from "react-native-animatable";
import RegistrationForms from "../components/RegistrationForms";
import RegistrationFormFields from "../components/RegistrationFormFields";
import MainButton from "../components/MainButton";
import TextButton from "../components/TextButton";

//hide keyboard when the screen is pressed
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email required")
    .email()
    .label("Enter your student email"),
  password: Yup.string()
    .required("Password required")
    .label("Enter your password"),
});

function LoginScreen({ navigation }) {
  return (
    <DismissKeyboard>
      {/* <ScrollView> */}
      <ImageBackground
        source={require("../assets/images/Intersect.png")}
        resizeMode="cover"
        style={styles.bg}
      >
        <View>
          <View style={styles.container}>
            <Animatable.Text animation="fadeInDown">Welcome to</Animatable.Text>
            <Animatable.Image
              source={require("../assets/images/logo2.png")}
              style={styles.logo}
              animation="fadeInDown"
            />
            <RegistrationForms
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <View style={styles.formContainer}>
                <RegistrationFormFields
                  name="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  icon="email"
                  placeholder="Enter your student email"
                />
                <RegistrationFormFields
                  name="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  icon="lock"
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              </View>
            </RegistrationForms>
            <MainButton
              title="Log in"
              onPress={() => navigation.navigate("mainPage")}
              style={styles.submitBtn}
            />
            <TextButton
              onPress={() => navigation.navigate("recoverPassword")}
              title="Forgot password?"
            />
            <View style={styles.signUp}>
              <Text>Don't have an account?</Text>
              <TextButton
                title="Sign up"
                onPress={() => navigation.navigate("signUp")}
                style={styles.signUpBtn}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* </ScrollView> */}
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    paddingTop: 170,
  },
  formContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    width: "100%",
  },
  logo: {
    marginBottom: 40,
    marginTop: 8,
  },
  submitBtn: {
    marginTop: 40,
    width: 100,
    marginBottom: 20,
  },
  signUp: {
    position: "absolute",
    bottom: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signUpBtn: {
    marginLeft: 8,
  },
});

export default LoginScreen;
