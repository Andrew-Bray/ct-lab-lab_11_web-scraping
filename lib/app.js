const express = require('express');
const Book = require('./models/books');
const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
  Book
    .insert(req.body)
    .then(book => res.send(book))
    .catch(next);
});


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
