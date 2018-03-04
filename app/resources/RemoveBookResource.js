'use strict'

const LibraryDAO = require('../dao/LibraryDAO')

module.exports = function deleteBook (id, callback) {
  LibraryDAO.readXMLFile(function (books) {
    const newBooks = []

    for (let book of books) {
      if (book.id == id) continue
      newBooks.push(book)
    }

    LibraryDAO.writeXMLFile(newBooks)
    callback(JSON.stringify(newBooks, null, '\t'))
  })
}
