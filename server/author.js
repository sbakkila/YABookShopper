var express = require('express')
var app = express()
var Book = require('../db/models/book.js')
var Publisher = require('../db/models/publisher.js')
var Review = require('../db/models/review.js')
var BooksGenres = require('../db/models/book.js')
var Author = require('../db/models/author.js')

app.get('/', function(req, res, next) {
  // query string will look like ?author=authorLastName
  if (req.query.author) {
    Author.findOne({
      where: {
        lastName: req.query.author
      }
    })
    .then(author => { author.getBooks() })
    .then(myBooks => {
      if (myBooks.length) {
        res.send(myBooks)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(next)
  } else {
    res.sendStatus(404)
  }
})

module.exports = app
