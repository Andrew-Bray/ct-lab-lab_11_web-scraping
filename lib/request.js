require('dotenv').config();
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async() => {
  const response = await fetch('http://books.toscrape.com/');
  const html = await response.text();
  const dom = new JSDOM(html);

  //console.log(html);
  return dom.window.document;
};


module.exports = request;
