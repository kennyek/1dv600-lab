(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function deleteBook (id, callback) {
        LibraryDAO.readXMLFile()
            .then(books => {
                const newBooks = []
                for (let book of books) {
                    if (book['$'].id === id) continue
                    newBooks.push(book)
                }

                LibraryDAO.writeXMLFile(newBooks)
            })
    };

}());
