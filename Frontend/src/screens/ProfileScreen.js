import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationFormFields from "../components/RegistrationFormFields";
import RegistrationForms from "../components/RegistrationForms";
import UploadImage from "../components/UploadImage";
import RegistrationButton from "../components/RegistrationButton";
import * as Yup from "yup";
import { Button } from "@rneui/base";
import MainButton from "../components/MainButton";
import TextButton from "../components/TextButton";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email required")
    .email()
    .label("Enter your student email"),
  password: Yup.string()
    .required("Password required")
    .label("Enter your password"),
  phone: Yup.string().required().label("Phone").min(10).max(10),
});

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <UploadImage />
        <Text style={styles.txt}>Jane Doe{"\n"}Toronto, ON</Text>
      </View>
      <View style={styles.fields}>
        <RegistrationForms
          initialValues={{ email: "", password: "", phone: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <RegistrationFormFields
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor="#210404"
            placeholder="Email                                   jdoe@gmail.com"
          />
          <RegistrationFormFields
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="visible-password"
            textContentType="password"
            secureTextEntry={true}
            placeholderTextColor="#210404"
            placeholder="Password                         ******************"
          />
          <RegistrationFormFields
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            textContentType="telephoneNumber"
            placeholderTextColor="#210404"
            placeholder="Phone                                +1 416-123-4567"
          />
        </RegistrationForms>
      </View>
      <RegistrationButton title="Edit" style={styles.btn} />
      <View style={{ marginTop: 20 }}>
        <MainButton title="Favorites" style={styles.button} />
        <MainButton title="Purchased" style={styles.button} />
        <MainButton title="My items" style={styles.button} />
        {/* <TextButton
          title="Log out"
          onPress={() => navigation.navigate("login")}
          style={styles.logOut}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    //marginTop: 70,
    // backgroundColor: "#c7b5b5",
  },

  txt: {
    padding: 10,
    marginTop: "25%",
    fontSize: 20,
  },

  fields: {
    padding: 10,
    marginTop: "5%",
    fontSize: 20,
  },

  btn: {
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    width: "50%",
    height: "7%",
    marginTop: "5%",
    alignSelf: "center",
  },

  btns: {
    margin: 10,
  },

  button: {
    marginBottom: 8,
  },

  logOut: {
    alignSelf: "center",
    marginTop: 16,
  },
});
