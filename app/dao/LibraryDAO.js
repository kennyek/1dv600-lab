'use strict'

const fs = require('fs')
const xml2js = require('xml2js')
const bookPath = process.cwd() + '/books.xml'

module.exports = {
  // Get the entire file from the file system.
  readXMLFile: function (callback) {
    fs.readFile(bookPath, (error, xmlData) => {
      if (error) throw error

      xml2js.parseString(xmlData, (error, jsData) => {
        if (error) throw error

        callback(jsData.catalog.book)
      })
    })
  },
  // Write the entire file from the file system.
  writeXMLFile: function (data) {
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
}
