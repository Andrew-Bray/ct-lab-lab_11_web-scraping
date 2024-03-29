require('dotenv').config();

const parser = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    coverImage: book.querySelector('img').src,
    rating: book.querySelector('.star-rating').classList[1],
    price: book.querySelector('.price_color').textContent,
    isInStock: !!book.querySelector('.icon-ok')
  }));
};

module.exports = parser;
