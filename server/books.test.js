const request = require('supertest')
  , {expect} = require('chai')
  , db = require('APP/db')
  , app = require('./start')
const Book = db.model('books')

/* global describe it before afterEach */

describe('/api/books', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  let firstBook;
  let secondBook;
  beforeEach('Seed users', () => {
    const books = [
      {
        title: 'Harry Potter',
        priceInCents: 2000,
        inventory: 1,
        isbn: 12345
      },
      {
        title: 'Cooking by Christopher',
        priceInCents: 10000,
        inventory: 10,
        isbn: 12346
      }
    ]
    return Book.bulkCreate(books, {returning: true})
      .then(createdBooks => {
        firstBook = createdBooks[0]
        secondBook = createdBooks[1]
      })
  })

  describe('GET /:id', () =>
    describe('Book', () =>
      it('retrieve a book with an id', () =>
        request(app)
          .get(`/api/books/${firstBook.id}`)
          .expect(200)
          .then(book => {
            console.log(book)
          })
      )
    ))

  describe('POST', () =>
    it('creates a book', () =>
        request(app)
          .post('/api/books')
          .send({
            title: 'Harry Potter',
            priceInCents: 2000,
            inventory: 1,
            isbn: 12345
          })
          .expect(201)))

  it('redirects to the user it just made', () =>
        request(app)
          .post('/api/books')
          .send({
            email: 'eve@interloper.com',
            password: '23456',
          })
          .redirects(1)
          .then(res => expect(res.body).to.contain({
            email: 'eve@interloper.com'
          })))
})
