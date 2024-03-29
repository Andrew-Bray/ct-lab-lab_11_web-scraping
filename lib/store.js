require('dotenv').config(); 
const Book = require('./models/books');


const store = books => {
  return Promise.all(books.map(book => Book.insert(book)));
};

module.exports = store;

