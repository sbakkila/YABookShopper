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
      }
    }
  }
)

module.exports.associations = (order, {User}) => {
  order.belongsTo(User)
}
