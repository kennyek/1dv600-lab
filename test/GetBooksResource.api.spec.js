'use strict'

const request = require('supertest')
const app = require('../app')

describe('Get Books Resource', function () {
  describe('GET /api/books', function () {
    it('should respond with an array', function (done) {
      request(app)
        .get('/api/books')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .expect(respondsWithArray)
        .end(done)

      function respondsWithArray (response) {
        if (Array.isArray(response.body)) return
        throw new Error('the response does not contain an array')
      }
    })

    it('the array should only contain books', function (done) {
      request(app)
        .get('/api/books')
        .expect(everyItemIsABook)
        .end(done)

      const bookProperties = [
        'title', 'author', 'genre', 'price', 'publish_date', 'description'
      ]

      function everyItemIsABook (response) {
        const bookList = response.body
        
        bookList.forEach(book => {
          bookProperties.forEach(bookProperty => {
            if (book.hasOwnProperty(bookProperty)) return
            throw Error('every item in the book list is not a book')
          })
        })
      }
    })
  })
})
