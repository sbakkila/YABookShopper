var express = require('express')
var app = express()

const db = require('APP/db')
const Order = db.model('order')
const OrderItem = db.model('orderItem')
const Book = db.model('books')

app.get('/', (req, res, next) => {
  if (req.user) {
    console.log("passport user nonsense", req.session.passport.user)
    Order.findAll({
      where: {
        user_id: req.session.passport.user
      },
      include: [{model: OrderItem, include: [{model: Book}]}]
    })
    .then(orders => res.status(201).json(orders))
    .catch(next)
  } else {
    console.log("That functionality is not running yet... please log in.")
    res.json({you_need_to: "log in"})
  }
})

module.exports = app
