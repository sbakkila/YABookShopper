'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('orderItem', {
  priceAtPurchase: {
    type: INTEGER,
    allowNull: false
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
    allowNull: false
  }
}
)

module.exports.associations = (OrderItem, {Order, Book}) => {
  OrderItem.belongsTo(Order)
  OrderItem.belongsTo(Book)
}
