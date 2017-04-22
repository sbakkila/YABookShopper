var express = require('express')
var Router = express.Router()

const db = require('APP/db')
const Book = db.model('books')
const Author = db.model('author')
const Review = db.model('review')
const Publisher = db.model('publisher')

Router.param('id', function(req, res, next, id) {
  // we want to add eager loading for reviews
  Book.findById(Number(id))
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

Router.get('/:id', (req, res) => {
  res.status(200).send(req.book)
})

Router.get('/', (req, res, next) => {
  Book.findAll({ include: [ Author ] })
  .then(books => res.send(books))
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

// Return to this while writing Route Tests
// get one book, and get all reviews for that book
// Router.get('/:id/reviews', (req, res, next) => {
//   Review.findAll({
//     where: {
//       bookId: req.book.id
//     },

//   })
//   .then((reviews) => { req.book.reviews = reviews })
//   .then(
//     res.send(req.book)
//   )
//   .catch(next)
// })

Router.put('/:id', (req, res, next) => {
  // ToDo: find user, check if they are an admin

  req.book.update(req.body)
    .then((book) => {
      res.send(book)
    })
    .catch(next)
})

Router.delete('/:id', (req, res, next) => {
  // ToDo: find user, check if they are an admin

  // fix this later
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
