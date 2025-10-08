// main.js
import { books } from "./data.js";
import { renderBooks } from "./books.js";
import { addToCart } from "./cart.js";
import { renderCart } from "./ui.js";

function init() {
  renderBooks(books, (book) => {
    addToCart(book);
    renderCart();
  });
}

init();
