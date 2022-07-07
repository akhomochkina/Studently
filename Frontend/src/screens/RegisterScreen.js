import React from "react";
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
  firstName: Yup.string()
    .required("Please enter First Name")
    .label("First Name"),
  lastName: Yup.string().required("Please enter Last Name").label("Last Name"),
  email: Yup.string()
    .required("Email required")
    .email()
    .label("Enter student email"),
  password: Yup.string()
    .required("Password required")
    .label("Create password")
    .min(6),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .label("Confirm password")
    .required(),
  phone: Yup.string().required().label("Phone").min(10).max(10),
});

export default function RegisterScreen({ navigation }) {
  return (
    <DismissKeyboard>
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
              <View style={{ width: "80%" }}>
                <RegistrationFormFields
                  name="firstName"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="givenName"
                  icon="account"
                  placeholder="Enter your First Name"
                />

                <RegistrationFormFields
                  name="lastName"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="familyName"
                  icon="account"
                  placeholder="Enter your Last Name"
                />
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
                  placeholder="Create your password"
                  secureTextEntry={true}
                />
                <RegistrationFormFields
                  name="passwordConfirmation"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  icon="lock"
                  placeholder="Re-enter your password"
                  secureTextEntry={true}
                />
                <RegistrationFormFields
                  name="phone"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="telephoneNumber"
                  icon="phone"
                  placeholder="Enter your phone"
                />
              </View>
            </RegistrationForms>
            <MainButton
              title="Create Account"
              onPress={() => navigation.navigate("mainPage")}
              style={styles.submitBtn}
            />
            <View style={styles.signUp}>
              <Text>Already have an account?</Text>
              <TextButton
                title="Log in"
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
