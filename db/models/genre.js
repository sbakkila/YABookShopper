'use strict'

const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL, TEXT, ENUM} = require('sequelize')

module.exports = db => db.define('genre', {
  genreType: {
    type: ENUM,
    values: ['fantasy', 'mystery', 'historical', 'sci-fi', 'romance', 'horror', 'action', 'death', 'thriller'],
    isUnique: 
  },
}, {
  classMethods: {
    // findByGENRE: function(genre) {
    //   return this.findAll({
    //     where: {
    //       lastName
    //     }
    //   })
    // }
  }
})

module.exports.associations = (Genre, {Book}) => {
    Genre.belongToMany(Book, {through: BookGenre})
}

// we want each genre to be unique. when 1 genre is selected, it can't be selected again
//discuss validating 'unique' genres