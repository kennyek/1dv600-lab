(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');
  const Book = require('../dao/Book')

  var RemoveBookResource = require('./RemoveBookResource');

  module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    LibraryDAO.readXMLFile()
      .then(jsData => {
        callback(JSON.stringify(jsData, null, '\t'))
      })
  };

}());
