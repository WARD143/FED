// ui.js
import { getCart, removeFromCart, calculateTotal } from "./cart.js";

export function renderCart() {
  const cartContainer = document.getElementById("cart");
  const cart = getCart();

  cartContainer.innerHTML = "<h2>Shopping Cart</h2>";

  if (cart.length === 0) {
    cartContainer.innerHTML += "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p>${item.title} - $${item.price.toFixed(2)}</p>
      <button data-id="${index}">Remove</button>
    `;
    div.querySelector("button").addEventListener("click", () => {
      removeFromCart(index);
      renderCart();
    });
    cartContainer.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `
    <h3>Total: $${calculateTotal().toFixed(2)}</h3>
    <button id="checkout">Proceed to Checkout</button>
  `;
  cartContainer.appendChild(totalDiv);

  document.getElementById("checkout").addEventListener("click", () => {
    alert("Proceeding to checkout... (mock)");
  });
}
