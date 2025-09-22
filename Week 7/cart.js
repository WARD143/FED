// cart.js
let cart = [];

export function addToCart(book) {
  cart.push(book);
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function getCart() {
  return cart;
}

export function calculateTotal() {
  return cart.reduce((total, item) => total + item.price, 0);
}
