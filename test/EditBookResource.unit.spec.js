'use strict'

const expect = require("chai").expect
const EditBookResource = require('../app/resources/EditBookResource')
const GetBookResource = require('../app/resources/GetBookResource')
const bookID = 5

describe('Edit Book Resource', () => {
  describe('Edit Book', () => {
    let newData = JSON.stringify({
      title: 'Book of Infinite Knowledge',
      author: 'Smarty Smartsson',
      genre: 'knowledge',
      price: '3.90',
      publish_date: '2018-01-22',
      description: 'Read this book and never have to read again.'
    })

    it('the book should have the new data stored', () => {
      EditBookResource(bookID, newData, () => {
        GetBookResource(bookID, function (fetchedBook) {
          const newDataAsJs = JSON.parse(newData)
  
          for (let property in newDataAsJs) {
            expect(fetchedBook[property]).to.eql(newDataAsJs[property])
          }
        })
      })
    })
  })
})
