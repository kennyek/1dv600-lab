'use strict'

const expect = require("chai").expect
const GetBookResource = require('../app/resources/GetBookResource')

describe('Get Book Resource', () => {
  describe('View Book', () => {
    let book = null
    let error = null

    GetBookResource('2', function (data) {
      try {
        book = JSON.parse(data)
      } catch (caughtError) {
        error = caughtError.message
      }
    })

    it('the response should contain a JSON object', () => {
      expect(error).to.be.null
    })

    it('the JSON object should contain an object', () => {
      expect(book).to.be.an('object')
    })

    it('the object should represent a book', () => {
      const bookProperties = [
        'title', 'author', 'genre', 'price', 'publish_date', 'description'
      ]
      
      // check if the item has all book properties
      bookProperties.forEach(bookProperty => {
        expect(book).to.haveOwnProperty(bookProperty)
      })
    })
  })
})
