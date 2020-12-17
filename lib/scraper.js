require('dotenv').config();
// Write a lib/scraper.js file (no need for a test). 

// Use your request function, 
// parser function, 
// and store function in combination 

// to store an array of books by scraping the Books to Scrape site. Once complete console.log the number of books processed.
const parser = require('./parser');
const request = require('./request');
const store = require('./store');

request()
  .then(document => parser(document))
  .then(books => store(books))
  .then(console.log);
