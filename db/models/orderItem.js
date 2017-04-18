'use strict'

const {NUMBER} = require('sequelize')

module.exports = db => db.define('orderItem', {
  priceAtPurchase: {
    type: NUMBER,
    allowNull: false
  },
  quantity: {
    type: NUMBER,
    defaultValue: 1,
    allowNull: false
  }
}
)

module.exports.associations = (orderItem, {Order, Book}) => {
  orderItem.belongsTo(Order)
  orderItem.belongsTo(Book)
}
