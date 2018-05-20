'use strict'

const LibraryDAO = require('../dao/LibraryDAO')

module.exports = function (id, data, callback) {
  LibraryDAO.readXMLFile(function (books) {
    const editedBook = JSON.parse(data)

    for (let book of books) {
      if (book.id == id) {
        for (let prop in editedBook) book[prop] = editedBook[prop]
      }
    }

    LibraryDAO.writeXMLFile(books)
    callback()
  })
}
