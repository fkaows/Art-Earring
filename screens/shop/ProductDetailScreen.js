import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Platform,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';

import * as cartActions from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <View>
      <SliderBox
        images={[
          selectedProduct.imageUrl,
          selectedProduct.imageUrl1]}
        sliderBoxHeight={400}
      />
    <ScrollView>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
      <View style={styles.actions}>
        <Button
          color="#FDFEFE"
          title="Add to Cart"
          onPress={() => {
            alert("Added!")
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
    </ScrollView>
    </View>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: "#F08080",
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  button: {
    backgroundColor: '#C2185B',
  }
});

export default ProductDetailScreen;
