'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('publisher', {
  name: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
})
