// books.js
export function renderBooks(books, onAddToCart) {
  const bookContainer = document.getElementById("book-list");
  bookContainer.innerHTML = "";

  books.forEach((book, index) => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
      <p><em>${book.availability}</em></p>
      <button ${book.availability !== "in stock" ? "disabled" : ""} data-id="${index}">
        Add to Cart
      </button>
    `;
    div.querySelector("button").addEventListener("click", () => onAddToCart(book));
    bookContainer.appendChild(div);
  });
}
