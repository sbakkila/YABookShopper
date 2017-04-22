var express = require('express')
var Router = express.Router()

const db = require('APP/db')
const Book = db.model('books')
const Author = db.model('author')
const Review = db.model('review')
const Publisher = db.model('publisher')
const Genre = db.model('genre')

Router.param('id', function(req, res, next, id) {
  // we want to add eager loading for reviews
  Book.findById(Number(id),
  { include: [{model: Genre}, {model: Publisher}, {model: Author}] })
  .then(book => {
    if (!book) {
      // can refactor to use HttpError later
      res.sendStatus(404)
    } else {
      req.book = book
      next()
    }
  })
    .catch(next)
})

// look up book by id
Router.get('/:id', (req, res) => {
  res.status(200).send(req.book)
})

// get all books
Router.get('/', (req, res, next) => {
  if (req.query) {
    next()
  }
  else {
    Book.findAll({ include: [Author] })
    .then(books => res.send(books))
    .catch(next)
  }
})

// look up book by query string. remember to properly factor query strings
Router.get('/', function(req, res, next) {
  Book.findAll({
    where: req.query,
    include: [Author]
  })
  .then(function(books) {
    if (!books) {
      res.status(404).end()
    } else {
      res.status(200).send(books)
    }
  })
  .catch(next)
})

Router.post('/', (req, res, next) => {
  // ToDo: find user, check if they are an admin
  Book.create(req.body)
    .then((book) => {
      res.status(201)
      res.send(book)
    })
    .catch(next)
})

// get one book, and get all reviews for that book
Router.get('/:id/reviews', (req, res, next) => {
  Review.findAll({
    where: {
      bookId: req.book.id
    }
  })
  .then((reviews) => {
    if (!reviews) {
      res.status(404).end()
    } else {
      res.status(200).send(reviews)
    }
  })
  .catch(next)
})

Router.put('/:id', (req, res, next) => {
  // ToDo: find user, check if they are an admin
  req.book.update(req.body)
    .then((book) => {
      res.status(201).send(book)
    })
    .catch(next)
})

// We're not actually going to delete these once inventory hits 0; they just
// become unavailable. We can keep this for edge case of admin needing to remove
// permanently from DB, but otherwise we can get rid of this.
Router.delete('/:id', (req, res, next) => {
  req.book.destroy()
  .then((num) => {
    if (num) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  })
  .catch(next)
})

module.exports = Router
