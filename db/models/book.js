'use strict'

const {STRING, TEXT, FLOAT, INTEGER} = require('sequelize')

module.exports = db => db.define('books', {
  // ijm/jm - todo perhaps also add allowNull property false
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
    //IJM/JM - todo perhaps use integer?
    type: FLOAT,
    validate: {
      notEmpty: true
    }
  },
  // authorId and publisherId will be created with associations
  // inventory reflects # available when added to database; "decrement" instance method updates with purchase
  // not sure if we should keep track of inventory here
  inventory: {
    // validate must be positive
    type: INTEGER,
    allowNull: false
  },
  photo: {
    // use amazon for hosting statis assets (if you want), isUrl?
    type: STRING
  },
  isbn: {
    // validate uniqueness
    type: STRING,
    allowNull: false
  }
}, {
  // IJM/JM - integrate with Review to get avg rating here?
  instanceMethods: {
    // findByAuthor: function(){},
    isAvailable: function() {
      return this.inventory > 0
    },
    decrementInventory: function() {
      // IJM/JM - must save back into database?
      // might want to return promise - if cannot decrement, reject a promise
      if (this.inventory) {
        this.inventory--
      } else { return 'this book is not available' }
    }
  },
  classMethods: {
    findByTitle: function(title) {
      return this.findOne({
        where: {
          title
        }
      })
    },
    findByISBN: function(isbn) {
      return this.findOne({
        where: {
          isbn
        }
      })
    }
  }
})

module.exports.associations = (Book, {Publisher, Review, OrderItem, Genre, Author}) => {
  Book.hasOne(Publisher)
  Book.hasMany(OrderItem)
  Book.hasMany(Review)
  // Book.belongsToMany(Cart, {through: 'BooksCarts'})
  Book.belongsToMany(Genre, {through: 'BooksGenres'})
  Book.belongsToMany(Author, {through: 'AuthorsBooks'})
}

// Discuss genre model and associations later
