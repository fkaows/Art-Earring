import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import { Text,View,Platform, TouchableOpacity,StyleSheet,Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import About from '../screens/shop/About';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

import * as firebase from 'firebase';

export default class App extends React.Component {


  render() {
    return (
      <AppContainer />
    );
  }
}

class ProfileScreen extends React.Component {
  state = {
    email : ''
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    this.setState({ email: user.email })
  }
  
  logout() {
    firebase.auth().signOut().then(() => {
      console.log('Logout successfully')
      // alert('Logout Successfully')
      this.setModalVisible(true)
    }).catch(error => {
      // alert('An error occured: '+ error.message)
      console.log('An error occured: '+ error.message)
    })
  }

  render() {
    return (
      <View>
        <Text style={{alignSelf:'center',paddingTop: 20,fontSize:35}}>Profile</Text>
        <Image style={styles.pic}
        source={require('../profilepic.png')}/>
        <Text style={{alignSelf:'center',paddingTop:15,fontSize:20}}>Email: {this.state.email} </Text>
        <TouchableOpacity
         onPress={() => this.logout()}
        style={styles.Login}>
          <Text style={styles.LoginText}>logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles= StyleSheet.create({
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
  pic:{
    height:150,
    width:150,
    alignSelf:'center',
    paddingTop:30
  }
})

const Products = createBottomTabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color={tintColor} />
        )
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" size={25} color={tintColor} />
        )
      }
    },
    Home: {
      screen: ProductsOverviewScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Orders: {
      screen: OrdersScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" size={25} color={tintColor} />
        )
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={25} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#F08080'
    }
  },
);

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: '#F08080'
  },
  headerTintColor: '#FDFEFE',
      headerTitle: 'Art Earring',
};

const ProductsNavigator = createStackNavigator(
  {
    Products: Products,
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator
  },
  /*{
    contentOptions: {
      activeTintColor: Colors.primary
    }
  }*/

);
const AppContainer = createAppContainer(ShopNavigator);
