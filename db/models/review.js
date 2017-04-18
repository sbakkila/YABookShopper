'use strict'

const {TEXT, ENUM} = require('sequelize')

module.exports = db => db.define('review', {
  text: {
    type: TEXT
  },
  rating: {
    type: ENUM,
    values: [1, 2, 3, 4, 5],
    allowNull: false
  }
})

module.exports.associations = (Review, {User, Book}) => {
  Review.belongsTo(User)
  Review.belongsTo(Book)
}
