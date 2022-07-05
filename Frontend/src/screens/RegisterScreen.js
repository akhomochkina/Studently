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
    firstName: Yup.string().required('Please enter First Name').label('First Name'),
    lastName: Yup.string().required('Please enter Last Name').label('Last Name'),
    email: Yup.string().required("Email required").email().label("Enter student email"),
    password: Yup.string().required("Password required").label("Create password").min(6),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null]).label('Confirm password').required(),
    phone: Yup.string().required().label("Phone").min(10).max(10),
});

export default function RegisterScreen({ navigation }) {
    return(
        <DismissKeyboard>                         
           <ImageBackground source={require('../assets/images/bg2.jpg')} blurRadius={5} resizeMode="cover" style={styles.image}>
          
          <View style={styles.container}>
              <Animatable.Text animation='fadeInDown' style={styles.header}>
                  Welcome To Studently!                    
              </Animatable.Text>
              <Animatable.Text animation='fadeInDown' style={styles.subheaher}>
                  Safe and Reliable marketplace for students                    
              </Animatable.Text>   
              <RegistrationForms                  
                  initialValues={{ email: '', password: ''}}
                  onSubmit={(values) => console.log(values)}
                  validationSchema={validationSchema}
                  >
                <View style={{width: "80%"}}>
                    <RegistrationFormFields
                      name='firstName'
                      autoCapitalize='none'
                      autoCorrect={false}                      
                      textContentType='givenName'
                      icon='account'
                      placeholder='Enter your First Name' 
                     
                    />

                    <RegistrationFormFields                    
                      name='lastName'
                      autoCapitalize='none'
                      autoCorrect={false}
                      textContentType='familyName'
                      icon='account'
                      placeholder='Enter your Last Name' 
                     
                    />
                    <RegistrationFormFields
                      name='email'
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      textContentType='emailAddress'
                      icon='email'
                      placeholder='Enter your student email' 
                     
                    />
                    <RegistrationFormFields
                      name='password'
                      autoCapitalize='none'
                      autoCorrect={false}
                      textContentType='password'
                      icon='lock'
                      placeholder='Create your password'
                      secureTextEntry={true}                        
                  />
                  <RegistrationFormFields
                      name='passwordConfirmation'
                      autoCapitalize='none'
                      autoCorrect={false}
                      textContentType='password'
                      icon='lock'
                      placeholder='Re-enter your password'
                      secureTextEntry={true}                        
                  />
                  <RegistrationFormFields
                      name='phone'
                      autoCapitalize='none'
                      autoCorrect={false}
                      textContentType='telephoneNumber'
                      icon='phone'
                      placeholder='Enter your phone'
                  />
                </View>
                  <RegistrationButton title='Create Account' onPress={()=>navigation.navigate("login")} style={styles.btn}/>                                    
              </RegistrationForms>    
                                            
          </View>
          <View style={styles.accnt}>
                  <Text >Already Have an Account?
                      <Text style={{ color: '#dfe6eb' }} onPress={()=> navigation.navigate('login')}> Log In!</Text>
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
        height: '10%',
        marginTop: '15%',
    },

    image: {
        flex: 1,          
      },

    subheaher: {
        fontSize: 15,
        marginBottom: 30,
        fontWeight: 'bold',  
        color: '#1f2021',  
    },

    passwRecovery: {
        marginTop: 15,
        textDecorationLine: 'underline',
        color: '#1478b3',
    },

    accnt: {
       bottom: 50,
       position: 'absolute',    
       alignSelf: 'center'       
    },    
})

