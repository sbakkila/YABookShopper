'use strict'

const {STRING, ENUM} = require('sequelize')

module.exports = db => db.define('order', {
  status: ENUM('pending', 'shipping', 'delivered'),
})

module.exports.associations = (order, {User}) => {
  order.belongsTo(User)
}
