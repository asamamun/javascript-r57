class ShoppingCart {
    constructor() {
      // Load existing cart from localStorage or initialize an empty cart
      this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    }
  //{id:101, quantity:1, name:"ABC",price: 2000}
    addToCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
  
      if (existingItem) {
        // Item already exists in the cart, update quantity
        existingItem.quantity += item.quantity;
      } else {
        // Item is not in the cart, add it
        this.cartItems.push(item);
      }
  
      // Update localStorage with the updated cart
      this.saveCart();
    }
  
    updateQuantity(itemId, newQuantity) {
      const itemToUpdate = this.cartItems.find(item => item.id === itemId);
  
      if (itemToUpdate) {
        // Update the quantity of the specified item
        itemToUpdate.quantity = newQuantity;
  
        // Update localStorage with the updated cart
        this.saveCart();
      } else {
        console.error('Item not found in the cart');
      }
    }
  
    deleteFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  
      // Update localStorage with the updated cart
      this.saveCart();
    }
  
    showCart() {
    //   console.log('Shopping Cart:');
    //   console.log(this.cartItems);
      return this.cartItems;
    }
  
    saveCart() {
      // Save the current state of the cart to localStorage
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    clearCart(){
        localStorage.removeItem('cart');
    }
    totalItems(){
        return this.cartItems.length;
    }

  }
  
  // Example usage:
  /*
  const myCart = new ShoppingCart();
  
  const item1 = { id: 1, name: 'Product 1', price: 10, quantity: 2 };
  const item2 = { id: 2, name: 'Product 2', price: 15, quantity: 1 };
  
  myCart.addToCart(item1);
  myCart.addToCart(item2);
  
  myCart.showCart();
  
  myCart.updateQuantity(1, 5);
  
  myCart.showCart();
  
  myCart.deleteFromCart(2);
  
  myCart.showCart();
  */