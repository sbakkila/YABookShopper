'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/books', require('./books'))
  .use('/author', require('./author'))
  .use('/order', require('./order'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

api.use(require('./error.middleware'))
