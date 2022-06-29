import React from "react";
import { StyleSheet, ImageBackground, Keyboard, Text, View, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';
import RegistrationForms from "../components/RegistrationForms";
import RegistrationFormFields from "../components/RegistrationFormFields";
import RegistrationButton from "../components/RegistrationButton";
import { yupToFormErrors } from "formik";

//hide keyboard when the screen is pressed
const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email required").email().label("Enter student email"),
    password: Yup.string().required("Password required").label("Create password").min(6),
    passwordConfirmation: yupToFormErrors.string().oneOf([Yup.ref('password'), null]).label('Confirm password').required(),
    phone: Yup.string().phone("CA", true, 'Invalid phone number').required().label("Phone").min(10).max(10),
});

export default function RegisterScreen({ navigation }) {
    return (
        <DismissKeyboard>                         
           
        </DismissKeyboard>
    )
}

