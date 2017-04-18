'use strict'

const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL} = require('sequelize')

module.exports = db => db.define('publisher', {
  name: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
}, {
  classMethods: {
  }
})
