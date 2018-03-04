'use strict'

const expect = require("chai").expect
const RemoveBookResource = require('../app/resources/RemoveBookResource')
const LibraryDAO = require('../app/dao/LibraryDAO')
const bookId = 3

describe('Remove Book Resource', () => {
  describe('Remove Book', () => {
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

    it('the books file should be one item shorter', done => {
      RemoveBookResource(`${bookId}`, data => {
        LibraryDAO.readXMLFile(books => {
          newBooks = books
          expect(books.length).to.equal(originalBooks.length - 1)
          done()
        })
      })
    })

    it('the book removed should not be in the books file', done => {
      newBooks.forEach(book => {
        expect(Number(book.id)).not.to.equal(bookId)
      })
      done()
    })
  })
})
