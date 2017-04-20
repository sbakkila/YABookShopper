'use strict'

const {STRING, ENUM, DATE} = require('sequelize')

module.exports = db => db.define('order', {
  status: {
    type: ENUM('cart', 'pending', 'shipping', 'delivered'),
    // todo JM/IJM status defualts to cart?
    defaultValue: 'pending'
  },
  dateOrdered: {
    // JM/IJM todo if you do any date manipulation use moment.js
    // consider changing notNull
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
        // IJM/JM - after you've changed the instance, save it back to db?
      },
      findTotalPrice: function() {
        let totalPrice = 0
        this.getOrderItems({
          where: {
            orderId: this.id
          }
        })
        // IJM/JM - todo should be iterating over orderItems
        .then(orders => {
          // IJM/JM - todo return a new promise that resolves to total price
          orders.forEach(order => { totalPrice += order.priceAtPurchase * order.quantity })
        })
        return totalPrice // JM/IJM todo outside of the promise... will be zero
      }
    }
  }
)

// todo IJM/JM be careful with orders for unauthenticated users - localStorage. Problem solved!
module.exports.associations = (Order, {User, OrderItem}) => {
  Order.belongsTo(User)
  Order.hasMany(OrderItem)
}
