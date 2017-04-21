'use strict'

const {TEXT, INTEGER} = require('sequelize')

module.exports = db => db.define('review', {
  text: {
    type: TEXT
  },
  rating: {
    type: INTEGER,
    validate: {
      min: 1,
      max: 5
    },
    allowNull: false
  }
})

module.exports.associations = (Review, {User, Book}) => {
  Review.belongsTo(User)
  Review.belongsTo(Book)
}
