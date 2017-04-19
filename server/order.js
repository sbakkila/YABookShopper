var express = require('express')
var app = express()

const db = require('APP/db')
const Order = db.model('order')

app.get('/', (req, res, next) => {
  // ?
  if (req.user) {

  } else {
    //user local storage
    console.dir("hi ", req.session)

    res.json(req.session)
  }
})

module.exports = app
