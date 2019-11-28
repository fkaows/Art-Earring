import React from 'react';
import { FlatList, Platform, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Slideshow from 'react-native-image-slider-show';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  // const dispatch = useDispatch();

  return (
    <View style={[styles.container]}>
      <Slideshow
        dataSource={[
          { url: 'https://www.mehrasonsjewellers.com/Catalog/HomeSlider1/Banner22.jpg' },
          { url: 'http://www.moissanitejewelryshop.com/media/catalog/category/TOP_BANNER_STUDS_3.jpg' },
          { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReQD3RSeO4DRaaYFzvleGlIDG5OcyPa1hkfovLVNQe9FZgAcMR' }
        ]} />
      <View style={styles.actions2}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={itemData => (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}
              onViewDetail={() => {
                props.navigation.navigate('ProductDetail', {
                  productId: itemData.item.id,
                  productTitle: itemData.item.title
                });
              }}
              onAddToCart={() => {
                dispatch(cartActions.addToCart(itemData.item));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

/*ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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
};*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // maxHeight: "20%",
    // borderColor: 2,
    //borderColor: "pink"
  },
  actions2: {
    marginTop: 15,
    marginBottom:180,
  },
});

export default ProductsOverviewScreen;
