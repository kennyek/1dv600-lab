'use strict'

const request = require('supertest')
const app = require('../app')
const bookId = 7

describe('Get Book Resource', function () {
  describe('GET /api/books/{book_id}', function () {
    it('should respond with an object', function (done) {
      request(app)
        .get(`/api/books/${bookId}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .expect(respondsWithObject)
        .end(done)

      // check if the response body contains an object
      function respondsWithObject (response) {
        const book = response.body

        if (book !== null && typeof book === 'object') return
        throw Error('the response is not an object')
      }
    })

    it('the response should represent a book', function (done) {
      request(app)
        .get(`/api/books/${bookId}`)
        .expect(itemIsABook)
        .end(done)

      function itemIsABook (response) {
        const book = response.body
        const bookProperties = [
          'title', 'author', 'genre', 'price', 'publish_date', 'description'
        ]

        // throw error if the item does not have all book properties
        bookProperties.forEach(bookProperty => {
          if (book.hasOwnProperty(bookProperty)) return
          throw Error('the response is not a book')
        })
      }
    })
  })
})
