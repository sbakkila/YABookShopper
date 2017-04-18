'use strict'

const {STRING, TEXT} = require('sequelize')

module.exports = db => db.define('author', {
  firstName: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
  bio: {
    type: TEXT
  }
}, {
  classMethods: {
    findByLastName: function(lastName) {
      return this.findAll({
        where: {
          lastName
        }
      })
    }
  }
})

module.exports.associations = (Author, {Book}) => {
  Author.belongsToMany(Book, { through: "AuthorsBooks" })
}
