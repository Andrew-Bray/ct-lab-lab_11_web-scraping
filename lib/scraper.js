require('dotenv').config();
const parser = require('./parser');
const request = require('./request');
const store = require('./store');

request()
  .then(document => parser(document))
  .then(books => store(books))
  .then(books => console.log(`You have scraped ${books.length} books`));
