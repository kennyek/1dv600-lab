'use strict'

const LibraryDAO = require('../dao/LibraryDAO')

module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
  LibraryDAO.readXMLFile(function (books) {
    callback(JSON.stringify(books, null, '\t'))
  })
}
