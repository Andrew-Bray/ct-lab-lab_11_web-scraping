require('dotenv').config();
const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  coverImage;
  rating;
  price;
  isInStock;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.coverImage = row.cover_image;
    this.rating = row.rating;
    this.price = row.price;
    this.isInStock = row.is_in_stock;
  }
  
  static async insert(book) {
    const {
      title,
      coverImage,
      rating,
      price,
      isInStock
    } = book;

    const { rows } = await pool.query(
      `INSERT INTO books
        (title, cover_image, rating, price, is_in_stock)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [title, coverImage, rating, price, isInStock]
    );

    if(!rows[0]) throw new Error('looks like you didn\'t insert a book buddy');

    return new Book(rows[0]);


  }
};
