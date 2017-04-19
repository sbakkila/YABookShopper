var express = require('express')
var app = express()

const db = require('APP/db')
const Author = db.model('author')

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
