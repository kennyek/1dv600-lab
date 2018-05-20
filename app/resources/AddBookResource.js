'use strict'

const LibraryDAO = require('../dao/LibraryDAO')
const GetBooksResource = require('./GetBooksResource')

module.exports = function (data, callback) {
  GetBooksResource(booksAsJson => {
    let highestID = 0
    const books = JSON.parse(booksAsJson)

    books.forEach(book => {
      if (Number(book.id) > highestID) highestID = Number(book.id)
    })

    data.id = highestID + 1
    books.push(data)
    console.log(books)

    LibraryDAO.writeXMLFile(books)
    callback()
  })
}
