import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';

import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';

const CartScreen = props => {

  var email = firebase.auth().currentUser.email;

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();




  return (
    <View style={styles.screen}>
      <View style={styles.board}>
        <View style={styles.summary}>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.productId}
            renderItem={itemData => (
              <CartItem

                image={itemData.item.imageUrl}
                title={itemData.item.productTitle}
                quantity={itemData.item.quantity}
                amount={itemData.item.sum}
                deletable
                onRemove={() => {
                  dispatch(cartActions.removeFromCart(itemData.item.productId));
                }}
              />
            )}
          />
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total:{' '}
            <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
          </Text>
          <Button
            color={'#FFC107'}
            title="Order Now"
            disabled={cartItems.length === 0}
            onPress={() => {
              alert("Order Complete!!")
              dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
              cartItems.forEach(item => {
                firebase.database().ref('order').push({
                  user: email,
                  items: cartItems,
                  
                })
              })
            }}
          />
        </View>
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FADBD8'
  },
  board: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'red',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  summaryText: {
    fontSize: 18
  },
  amount: {
    color: '#C2185B'
  }
});

export default CartScreen;