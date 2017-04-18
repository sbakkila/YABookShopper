var express = require('express')
var app = express()
var Book = require('../db/models/book.js')
var Publisher = require('../db/models/publisher.js')

app.param('id', function(req, res, next, id) {
  Book.findById(Number(id))
    .then(book => {
      if (!book) {
        res.sendStatus(404)
      } else {
        req.book = book
        next()
      }
    })
      .catch(next)
})

app.get('/', (req, res, next) => {
  if (req.query.title) {
    Book.findAll({
      where: {
        title: req.query.title
      }
    })
    .then(books => res.send(books))
    .catch(next)
  } else if (req.query.publisher) {
    Publisher.findAll({
      where: {
        name: req.query.publisher
      },
      include: [Book]
    })
      .then(booksByPublisher => {
        res.send(booksByPublisher.books)
      })
      .catch(next)
  } else {
    Book.findAll()
    .then(books => res.send(books))
    .catch(next)
  }
})

app.post('/', (req, res, next) => {
  // ToDo: find user, check if they are an admin
  Book.create(req.body)
    .then((book) => {
      res.status(201)
      res.send(book)
    })
    .catch(next)
})

app.get('/:id', (req, res, next) => {
  res.send(req.book)
})

app.put('/:id', (req, res, next) => {
  // ToDo: find user, check if they are an admin

  req.book.update(req.body)
    .then((book) => {
      res.send(book)
    })
    .catch(next)
})

app.delete('/:id', (req, res, next) => {
  // ToDo: find user, check if they are an admin

  // fix this tomorrow
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

module.exports = app
