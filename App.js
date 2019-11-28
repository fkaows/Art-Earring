import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
// import Login from './Login';
import LoginScreen from './LoginScreen';
import { StyleSheet, 
  Text, 
  View,
  Image,
  ScrollView,
  TextInput, 
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from 'react-native';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';


const firebaseConfig = {
  apiKey: "AIzaSyBbMslPsB20PXJTIUNR0q0g61HAtZY_fjI",
  authDomain: "mobileproject-652fd.firebaseapp.com",
  databaseURL: "https://mobileproject-652fd.firebaseio.com",
  projectId: "mobileproject-652fd",
  storageBucket: "mobileproject-652fd.appspot.com",
  messagingSenderId: "880002806856",
  appId: "1:880002806856:web:969a89ec56b490967ed47d"
};

firebase.initializeApp(firebaseConfig);
console.ignoredYellowBox = [
  'Setting a timer'
]

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);
export default class App extends React.Component {
constructor(props){
  super(props);
  this.database = firebase.database();
  this.state = {
    modalVisible: true,
    name: "Anonymous",
    isShowLogin: true,
    loggedIn: null,
    register: false,
    email: "",
    password: ""
  };
  //this.chatsRef = this.database.ref('chats');
  //this.sendChat = this.sendChat.bind(this);
  this.register = this.register.bind(this);
  this.login = this.login.bind(this);
  // this.logout = this.logout.bind(this)
  //this.setModalVisible = this.setModalVisible.bind(this)
  this.listenForAuthChange = this.listenForAuthChange.bind(this);
}

listenForAuthChange() {
  firebase.auth().onAuthStateChanged((user) => {
    console.log("auth changed");
    if (user) {
      console.log('User details', user);
      console.log(user.uid);
      this.setState({name: user.email})
    } 
    else {
      console.log("no one is signed in ");
      this.setState({
        name: 'Anonymous',
        modalVisible: true
      });
    }
  });
}

componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
}

register() {
  console.log(this.state.email, this.state.password);
  firebase.auth().createUserWithEmailAndPassword(this.state.email,
    this.state.password).then((user) => {
      this.setState({isShowLogin: true, modalVisible: false});
      console.log("Created user successfully");
  }).catch((error) => {
    alert("An error occured: " + error.message);
    console.log('An error occured', error.message);
  });
}

login() {
  firebase.auth().signInWithEmailAndPassword(this.state.email, 
    this.state.password).then((user) => {
      console.log("Login user successfully");
      console.log(user);
      this.setState({modalVisible: false});
    }).catch((error) => {
      alert("An error occured: " + error.message);
      console.log('An error occured', error.message);
  });
}

renderButton() {
  if (this.state.register) {
      return (
        <View>
          <View>
            
              <TouchableHighlight
                  onPress={() => this.register()} style={styles.Login}
              >
                  <Text style={styles.LoginText}>Register</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  onPress={() => this.setState({
                      register: false,
                      email: '',
                      password: ''
                  })}
              >
                  <Text style={styles.textaccount}>Already have an account ?</Text>
              </TouchableHighlight>
          </View>
          </View>
      )
  } else {
      return (
          <View>
            
              <TouchableHighlight
                  onPress={() => this.login()} 
              style={styles.Login}>
                  <Text style={styles.LoginText}>Log In</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  onPress={() => this.setState({
                      register: true,
                      email: '',
                      password: ''
                  })} 
              >
                  <Text style={styles.textaccount}>Don't have an account ?</Text>
              </TouchableHighlight>
          </View>
      )

  }
}

render() {
  if(!this.state.loggedIn) {
    return(

      <View style={styles.container}>
        <Image  style={styles.logo}
          			source={require('../practice-shop-13-finished-orderitem/logo.jpg')}/>
          		<Text style={styles.logoText}>Welcome to Art Earrings.</Text>	
        <Text style={styles.textInput}>E-mail</Text>
        <TextInput keyboardType="email-address" autoCapitalize="none"
          style={styles.input} value={this.state.email}
          onChangeText={(t) => this.setState({email: t})}></TextInput>
        <Text style={styles.textInput}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input}
          value={this.state.password}
          onChangeText={(t) => this.setState({password: t})}></TextInput>
        {this.renderButton()}
      </View>
    )
  }
  else {
    return(
  <Provider store={store}> 
             <ShopNavigator />
          
    </Provider>   )}
    

  }

}


const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 70
},
logo:{
  alignSelf:'center',
  width:100,
  height:100,
  borderRadius:20
},
logoText : {
  marginVertical: 15,
  fontSize:18,
  color:'black',
  alignSelf:'center'
},
FrontText: {
  alignSelf: 'center',
  fontSize: 16,
  paddingTop:10

},
content:{
  padding: 10,
  flex: 1,
  // justifyContent: 'flex-start',
},
input: {
  alignSelf:'center',
  marginBottom: 20,
  width:300,
  paddingRight: 15,
  paddingLeft: 15,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: 'pink',
  color: '#555',
  fontSize: 18,
},
textInput: {
  flex: 1,
  height: 2,
  width: 300,
  padding: 5,
  backgroundColor: 'white',
  borderWidth: 1,
  borderRadius: 5,
  alignItems: 'center',
  
},
textaccount:{
  alignSelf:'center',
  paddingTop:10,
  fontSize:16
},
textInput:{
  paddingLeft:35
},
button:{
  width: 100,
  backgroundColor: 'darkblue',
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center'
},
buttonText:{
  fontSize: 20,
  color: 'white'
},
modal: {
  height: 280,
  width: 300,
  marginTop: 150,
  padding: 10,
  alignSelf: 'center',
  backgroundColor: 'lightblue',
  margin: 10,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center'
},
submitButton: {
  alignSelf: 'center',
  backgroundColor: 'darkblue',
  width: 100,
  height: 44,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 10
},
bold: {
  fontWeight: 'bold'
},
title: {
  fontSize: 20,
  fontWeight: 'bold'
},
Login: {
  paddingTop: 12,
  paddingBottom: 12,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: 'white',
  backgroundColor: 'pink',
  alignSelf:'center',
  width:100
},
LoginText: {
  color: '#555',
  fontSize: 18,
  alignSelf: 'center',
},
switchRegister: {
  marginTop: 40,
  fontSize: 14,
  color: '#555'
}
});
