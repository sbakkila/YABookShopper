'use strict'

const {STRING, ENUM, DATE} = require('sequelize')

module.exports = db => db.define('order', {
  status: {
    type: ENUM('pending', 'shipping', 'delivered'),
    defaultValue: 'pending'
  },
  dateOrdered: {
    type: DATE,
    validate: {
      notNull: true,
      isDate: true
    }
  },
  dateReceived: DATE
},
  {
    instanceMethods: {
      deliverOrder: function() {
        this.status = 'delivered'
        this.dateReceived = new Date()
      },
      findTotalPrice: function() {
        let totalPrice = 0
        this.getOrderItems({
          where: {
            orderId: this.id
          }
        })
        .then(orders => {
          orders.forEach(order => { totalPrice += order.priceAtPurchase * order.quantity })
        })
        return totalPrice
      }
    }
  }
)

module.exports.associations = (order, {User, orderItem}) => {
  order.belongsTo(User)
  order.hasMany(orderItem)
}
