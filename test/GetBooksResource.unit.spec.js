'use strict'

const expect = require("chai").expect
const GetBooksResource = require('../app/resources/GetBooksResource')

describe('Get Books Resource', () => {
  describe('List Books', () => {
    let bookList = null
    let error = null

    GetBooksResource(data => {
      try {
        bookList = JSON.parse(data)
      } catch (caughtError) {
        error = caughtError.message
      }
    })

    it('should return a JSON object', () => expect(error).to.be.null)

    it('containing a list', () => expect(bookList).to.be.an('array'))

    it('of book objects', () => {
      const book = bookList.shift()
      const bookProperties = [
        'title', 'author', 'genre', 'price', 'publish_date', 'description'
      ]
      
      bookProperties.forEach(bookProperty => {
        expect(book).to.haveOwnProperty(bookProperty)
      })
    })
  })
})
