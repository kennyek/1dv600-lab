'use strict'

const expect = require("chai").expect
const GetBookResource = require('../app/resources/GetBookResource')

describe('Get Book Resource', () => {
  describe('View Books', () => {
    let book = null
    let error = null

    GetBookResource('2', function (data) {
      try {
        book = JSON.parse(data)
      } catch (caughtError) {
        error = caughtError.message
      }
    })

    it('should return a JSON object', () => expect(error).to.be.null)

    it('containing an object', () => expect(book).to.be.an('object'))

    it('representing a book', () => {
      const bookProperties = [
        'title', 'author', 'genre', 'price', 'publish_date', 'description'
      ]
      
      bookProperties.forEach(bookProperty => {
        expect(book).to.haveOwnProperty(bookProperty)
      })
    })
  })
})
