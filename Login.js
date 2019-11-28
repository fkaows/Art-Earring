import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, 
    Text, 
    View,
    ScrollView,
    TextInput, 
    TouchableOpacity,
    Modal,
  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

//import ChatScreen from './ChatScreen'

export default class Login extends React.Component {
    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Signed Up');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }
    
      login() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }
    
      render() {
        return (
          <View style={{ textAlign: 'center' }}>
            
              <Text>Email</Text>
              <TextInput id="email" placeholder="Enter Email.." type="text"/>
            
            <View>
              <Text>Password</Text>
              <TextInput id="password" placeholder="Enter Password.." type="text"/>
            </View>
            <TouchableHighlight style={{margin: '10px'}} onClick={this.login}>Login</TouchableHighlight>
            <TouchableHighlight style={{margin: '10px'}} onClick={this.signUp}>Sign Up</TouchableHighlight>
          </View>
        )
      }
    }
    
   
