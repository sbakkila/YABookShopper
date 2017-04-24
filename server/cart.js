var express = require('express')
var router = express.Router()

const db = require('APP/db')
const Order = db.model('order')
const OrderItem = db.model('orderItem')
const Book = db.model('books')

router.get('/', (req, res, next) => {
  if (req.user) {
    Order.findOne({
      where: {
        user_id: req.session.passport.user,
        status: 'cart'
      },
      include: [{model: OrderItem, include: [{model: Book}]}]
    })
    .then(cart => res.status(201).json(cart))
    .catch(next)
  } else {
    console.log('That functionality is not running yet... please log in.')
    res.json({you_need_to: 'log in'})
  }
})

router.put('/', (req, res, next) => {
  if (req.user) {
    Order.findOne({
      where: {
        user_id: req.session.passport.user,
        status: 'cart'
      }
    })
    .then(cart => {
      return OrderItem.create(req.body)
      .then(thisOrder => cart.setOrderItem(thisOrder))
    })
    .then(cart => res.status(201).json(cart))
    .catch(next)
  } else {
    console.log("That functionality is not running yet... please log in.")
    res.json({you_need_to: "log in"})
  }
})

module.exports = router
