'use strict'

const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL, TEXT, FLOAT, INTEGER} = require('sequelize')

module.exports = db => db.define('books', {
  title: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: TEXT
  },
  price: {
    type: FLOAT,
    validate: {
      notEmpty: true
    }
  },
  // authorId and publisherId will be created with associations
  // inventory reflects # available when added to database; "decrement" instance method updates with purchase
  inventory: {
    type: INTEGER,
    allowNull: false
  },
  photo: {
    type: STRING
  }
}, {
  instanceMethods: {
    // findByAuthor: function(){},
    isAvailable: function() {
      return this.inventory > 0
    },
    decrementInventory: function() {
      if (this.inventory) { this.inventory-- }
      else { return "this book is not available" }
    }
  },
  classMethods: {
    findByTitle: function(title) {
      return this.findOne({
        where: {
          title
        }
      })
    }
  }
})

module.exports.associations = (Book, {Publisher, Review, Cart, Genre, Author}) => {
  Book.hasOne(Publisher)
  // all this is in progress


  User.hasOne(OAuth)
  User.belongsToMany(Thing, {as: 'favorites', through: Favorite})
}
