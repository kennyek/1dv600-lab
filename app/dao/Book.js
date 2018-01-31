"use strict";

class Book {
  constructor (title, author, genre, price, publishDate, description) {
    if (!title) {
      throw new Error('You must provide a title.')
    }
    if (!author) {
      throw new Error('You must provide an author.')
    }
    if (!genre) {
      throw new Error('You must provide a genre.')
    }
    if (!price) {
      throw new Error('You must provide a price.')
    }
    if (!publishDate) {
      throw new Error('You must provide a publish date.')
    }
    if (!description) {
      description = 'No description available.'
    }
    
    this.title = title
    this.author = author
    this.genre = genre
    this.price = price
    this.publishDate = publishDate
    this.description = description
  }

}

module.exports = Book
