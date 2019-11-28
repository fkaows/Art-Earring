import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.col}>
        <Text style={styles.mainText}>{props.title}</Text>
        <Text style={styles.quantity}>{props.quantity} Pieces</Text>
        <View style={styles.itemData}>
          <Text style={styles.priceText}>${props.amount.toFixed(2)}</Text></View>
      </View>
      <View style={styles.trash}>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <AntDesign
              name={'delete'}
              size={23}
            />
          </TouchableOpacity>
        )}</View>




    </View>


  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontSize: 16,
  },
  priceText: {
    fontSize: 16,
    color: '#E74C3C'
  },
  deleteButton: {
    //marginLeft: 5
  },
  col: {
    flexDirection: 'column',
  },
  trash: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});

export default CartItem;