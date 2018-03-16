'use strict'

const GetBooksResource = require('../resources/GetBooksResource')

module.exports = function (id, callback) {
  GetBooksResource(booksAsJson => {
    const books = JSON.parse(booksAsJson)
    const book = books.find(book => book.id == id)

    callback(JSON.stringify(book, null, '\t'))
  })
}
