'use strict'

const app = require('../app')
const LibraryDAO = require('../app/dao/LibraryDAO')
const request = require('supertest')(app)
const expect = require("chai").expect
const bookId = 3

describe('Remove Book Resource', function () {
  describe('DELETE /api/books/{book_id}', function () {
    let originalBooks = null
    let newBooks = null

    before(() => {
      LibraryDAO.readXMLFile(books => {
        originalBooks = books
      })
    })
  
    after(() => {
      LibraryDAO.writeXMLFile(originalBooks)
    })
  
    it('the book list is one item shorter', done => {
      request.delete(`/api/books/${bookId}`)
        .expect(200)
        .then(() => {
          // Compare size of original and new books file
          LibraryDAO.readXMLFile(books => {
            newBooks = books

            expect(books.length).to.equal(originalBooks.length - 1)
            done()
          })
        })
    })

    it('the deleted book is no longer in the book list', done => {
      newBooks.forEach(book => {
        expect(Number(book.id)).not.to.equal(bookId)
      })
      done()
    })
  })
})
