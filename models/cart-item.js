class CartItem {
  constructor(quantity, productPrice, productTitle, sum,imageUrl ) {
    this.imageUrl = imageUrl;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
  }
}

export default CartItem;
