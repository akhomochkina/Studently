import React from "react";
import { StyleSheet, ImageBackground, Keyboard, Text, View, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';
import RegistrationForms from "../components/RegistrationForms";
import RegistrationFormFields from "../components/RegistrationFormFields";
import RegistrationButton from "../components/RegistrationButton";

//hide keyboard when the screen is pressed
const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email required").email().label("Enter your student email"),
    password: Yup.string().required("Password required").label("Enter your password"),
});

export default function PasswordRecoveryScreen({ navigation }) {
    return (
        <DismissKeyboard>  
                       
        </DismissKeyboard>
    )
}

