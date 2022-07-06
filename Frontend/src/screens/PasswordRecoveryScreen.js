import React from "react";
import { useState, useEffect } from 'react';
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
    const [label, setLabel] = useState('');
    return(
        <DismissKeyboard>  
                <ImageBackground source={require('../assets/images/bg2.jpg')} blurRadius={5} resizeMode="cover" style={styles.image}>
          
          <View style={styles.container}>
              <Animatable.Text animation='fadeInDown' style={styles.header}>
                  Welcome To Studently!                    
              </Animatable.Text>
              <Animatable.Text animation='fadeInDown' style={styles.subheaher}>
                  Please Enter email associated with your account                   
              </Animatable.Text>   
              <RegistrationForms                     
                  initialValues={{ email: '', password: ''}}
                  onSubmit={(values) => console.log(values)}
                  validationSchema={validationSchema}
                  >
                <View style={{width: "80%"}}>
                  <RegistrationFormFields
                      name='email'
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      textContentType='emailAddress'
                      icon='email'
                      placeholder='Enter your student email'                      
                  />
                </View>
                  <Text style={styles.txt}>{label}</Text>
                  <RegistrationButton title='Reset Password' style={styles.btn} onPress={()=>setLabel('Reset link has been sent to your inbox')}/>
                   
                  
              </RegistrationForms>     
                                            
          </View>
          <View style={styles.accnt}>
                  <Text >Don't Have an Account?
                      <Text style={{ color: '#dfe6eb' }} onPress={()=> navigation.navigate('signUp')}> Sign Up!</Text>
                  </Text>                        
          </View>               
          </ImageBackground>        
        </DismissKeyboard>
    )
}

const styles=StyleSheet.create({
    container: { 
        marginTop: '30%',
        alignItems: 'center',
        justifyContent: "center",
    },   

    header: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold', 
        color: '#1f2021',     
    },

    btn: {        
        backgroundColor: 'rgba(240, 240, 240, 0.5)',        
        width: '80%',
        height: '12%',
        marginTop: '30%',
    },

    image: {
        flex: 1,          
      },

    subheaher: {
        fontSize: 15,
        marginBottom: 50,
        fontWeight: 'bold',  
        color: '#1f2021',  

    },

    txt: {
        marginTop: '10%',
        color: '#b83535',
        fontWeight: 'bold'
    },

    accnt: {
       bottom: 50,
       position: 'absolute',    
       alignSelf: 'center'       
    },    
})

