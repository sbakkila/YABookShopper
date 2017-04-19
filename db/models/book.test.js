'use strict'

const db = require('APP/db')
  , {Book} = db
  , {expect} = require('chai')

/* global describe it before afterEach */

describe('Book', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('Availability', () => {
    it('resolves true if the inventory is stocked', () =>
      Book.create({ title: 'Harry Potter', isbn: '95-8532-541-1', price: '20' })
        .then(book => book.isAvailable())
        .then(result => expect(result).to.be.true))

    it('resolves with an empty array if the inventory is empty', () =>

      Book.findOrCreate({
        where: { isbn: '95-8532-541-1' },
        defaults: { title: 'Harry Potter', price: '20' }
      })
        .spread((book, created) => {
          book.decrementInventory()
          return book
        })
        .then(book => {
          expect(book.inventory).to.equal(0)
        })
    )
    // it('resolves with only one book left in the inventory if one item is deleted', () => {
    //   let book1 = Book.create({title: 'Harry Potter', isbn: '95-8532-541-1', price: '20'})
    //   let book2 = Book.update({
    //     where: {
    //       isbn: '95-8532-541-1'
    //     }
    //   })
    //   .then(book => {
    //     book.
    //   })
    //   book1
    //     .then(book => {
    //       return book.destroy({force: true})
    //     })
    //     .then(listOfBooks => {
    //       console.log(listOfBooks, 'this is the deleted book')
    //       expect(listOfBooks).to.be.empty
    //     })
    // })
  })
})
