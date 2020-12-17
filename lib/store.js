// Write a lib/store.js file. 
const Book = require('./models/books');

// You should export a function from the file that takes an array of books and stores each book in a postgres database.
const store = books => {
  return Promise.all(books.map(book => Book.insert(book)));
};

module.exports = store;

