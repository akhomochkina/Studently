import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import RegistrationFormFields from "../components/RegistrationFormFields";
import RegistrationForms from "../components/RegistrationForms";
import UploadImage from "../components/UploadImage";
import RegistrationButton from "../components/RegistrationButton";
import { Button } from "@rneui/base";

export default function ProfileScreen({ navigation }){
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>    
            <UploadImage />    
            <Text style={styles.txt}>Jane Doe{"\n"}Toronto, ON</Text>   
        </View>
        <View style={styles.fields}>
            <RegistrationForms>
                <RegistrationFormFields 
                        name='email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        placeholderTextColor='#210404'
                        placeholder="Email                                   jdoe@gmail.com"
                        />
                <RegistrationFormFields 
                        name='password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='password-'
                        textContentType='password'
                        placeholderTextColor='#210404'
                        placeholder="Password                         ******************"
                        />
                <RegistrationFormFields 
                        name='phone'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='telephoneNumber'
                        textContentType='telephoneNumber'
                        placeholderTextColor='#210404'
                        placeholder="Phone                                +1 416-123-4567"
                        />
            </RegistrationForms>
        </View>
        <RegistrationButton title="Edit" style={styles.btn} />
        <View style={{marginTop: 20}}>
            <Button style={styles.btns} color="#7E94E5" title="Favorites"></Button>
            <Button style={styles.btns} color="#7E94E5" title="Purchased"></Button>
            <Button style={styles.btns} color="#7E94E5" title="My Items"></Button>
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
        backgroundColor: 'rgba(240, 240, 240, 0.5)',        
        width: '50%',
        height: '7%',
        marginTop: '5%',
        alignSelf: "center"
    },

    btns: {
        margin: 10,             
    }
     
});