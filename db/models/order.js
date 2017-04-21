'use strict'

const {STRING, ENUM, DATE} = require('sequelize')

module.exports = db => db.define('order', {
  status: {
    type: ENUM('cart', 'pending', 'shipping', 'delivered'),
    defaultValue: 'cart'
  },
  dateOrdered: {
    type: DATE
  },
  dateReceived: DATE
},
  {
    instanceMethods: {
      deliverOrder: function() {
        this.status = 'delivered'
        this.dateReceived = new Date()
        return this.save()
      },
      findTotalPrice: function() {
        let totalPrice = 0
        return this.getOrderItems({
          where: {
            orderId: this.id
          }
        })
        .then(orderItems => {
          orderItems.forEach(orderItem => { totalPrice += orderItem.priceAtPurchase * orderItem.quantity })
          return totalPrice
        })
      }
    }
  }
)

module.exports.associations = (Order, {User, OrderItem}) => {
  Order.belongsTo(User)
  Order.hasMany(OrderItem)
}
