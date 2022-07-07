import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import * as Animatable from "react-native-animatable";
import RegistrationForms from "../components/RegistrationForms";
import RegistrationFormFields from "../components/RegistrationFormFields";
import RegistrationButton from "../components/RegistrationButton";
import TextButton from "../components/TextButton";
import MainButton from "../components/MainButton";

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

export default function PasswordRecoveryScreen({ navigation }) {
  const [label, setLabel] = useState("");
  return (
    <DismissKeyboard>
      <ImageBackground
        source={require("../assets/images/Intersect.png")}
        resizeMode="cover"
        style={styles.bg}
      >
        <View>
          <View style={styles.container}>
            {/* <Animatable.Text animation="fadeInDown">Welcome to</Animatable.Text> */}

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
              <View style={{ width: "80%" }}>
                <RegistrationFormFields
                  name="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  icon="email"
                  placeholder="Enter your student email"
                />
              </View>
            </RegistrationForms>
            <Text style={styles.label}>{label}</Text>
            <MainButton
              title="Reset password"
              onPress={() => setLabel("Reset link has been sent to your inbox")}
              style={styles.submitBtn}
            />
            <View style={styles.backToLogin}>
              <TextButton
                title="Back to Login"
                onPress={() => navigation.navigate("login")}
                style={styles.signUpBtn}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
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
    marginBottom: 20,
  },
  backToLogin: {
    position: "absolute",
    bottom: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    marginTop: 12,
  },
});
