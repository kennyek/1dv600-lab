'use strict'

const app = require('../app')
const LibraryDAO = require('../app/dao/LibraryDAO')
const GetBookResource = require('../app/resources/GetBookResource')
const request = require('supertest')(app)
const expect = require("chai").expect
const bookID = 9

describe('Edit Book Resource', function () {
  describe('POST /api/books/{book_id}', function () {
    let originalBooks = null

    before(() => {
      LibraryDAO.readXMLFile(books => {
        originalBooks = books
      })
    })
  
    after(() => {
      LibraryDAO.writeXMLFile(originalBooks)
    })

    let newData = {
      title: 'Book of Infinite Knowledge',
      author: 'Smarty Smartsson',
      genre: 'knowledge',
      price: '3.90',
      publish_date: '2018-01-22',
      description: 'Read this book and never have to read again.'
    }
  
    it('the book should have the new data stored', done => {
      request.post(`/api/books/${bookID}`)
        .send(JSON.stringify(newData))
        .expect(200)
        .then(() => {
          GetBookResource(bookID, function (data) {
            const fetchedBook = JSON.parse(data)
    
            for (let property in newData) {
              expect(fetchedBook[property].pop()).to.equal(newData[property])
            }

            LibraryDAO.writeXMLFile(originalBooks)
            done()
          })
        })
    })
  })
})
