var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = showCartItem(item);
  getCart.push(item);
  return `${item.itemName} has been added to your cart.`;
}
function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

//EXTRA FUNCTIONS
function priceFind(min, max) {
   min = Math.ceil(1)
   max = Math.floor(100)
   return Math.floor(Math.random() * (max - min)) + min
 }
 
 function showCartItem(item) {
   return {
     item: itemName,
     itemPrice: priceFind(1, 100)
   }
 }
