(function () {
  "use strict";

  var fs = require('fs');
  const bookPath = process.cwd() + '/books.xml'

  // Instructions how to use the xml2js
  // https://github.com/Leonidas-from-XIV/node-xml2js
  var xml2js = require('xml2js');

  // Use this file to write and read the xml file.
  var LibraryDAO = {

    // Get the entire file from the file system.
    readXMLFile: function(callback) {
      return new Promise((resolve, reject) => {
        fs.readFile(bookPath, (error, xmlData) => {
          if (error) reject(error)

          xml2js.parseString(xmlData, (error, jsData) => {
            if (error) reject(error)
            resolve(jsData.catalog.book)
          })
        })
      })
    },

    // Write the entire file from the file system.
    writeXMLFile: function(data) {
      const catalog = {
        catalog: {
          book: data
        }
      }

      const builder = new xml2js.Builder()
      const catalogXML = builder.buildObject(catalog)

      fs.writeFile(bookPath, catalogXML, error => {
        if (error) throw error
      })
    }
  };

  module.exports = LibraryDAO;
}());
