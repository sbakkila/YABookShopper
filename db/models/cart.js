'use strict'

const {NUMBER} = require('sequelize')

module.exports = db => db.define('cart')

module.exports.associations = (Cart, {User, Book}) => {
  Cart.belongsTo(User)
  Cart.belongsToMany(Book {through: "BooksCarts"})
}
