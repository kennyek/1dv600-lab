(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');
  const Book = require('../dao/Book')


  module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    const books = [
      new Book(
        'The Fellowship of the Ring',
        'Tolkien, J.R.R.',
        'Fantasy',
        8.99,
        '1954-07-29',
        'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.\n\nFirst part of "The Lord of the Rings"'
      ),
      new Book(
        'The Two Towers',
        'Tolkien, J.R.R.',
        'Fantasy',
        8.99,
        '1954-11-11',
        'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.\n\nSecond part of "The Lord of the Rings"'
      ),
      new Book(
        'The Return of the King',
        'Tolkien, J.R.R.',
        'Fantasy',
        8.99,
        '1955-10-20',
        'As the Shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn, revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard, and takes part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there encounter the Ents. Gandalf has miraculously returned and defeated the evil wizard, Saruman. Sam has left his master for dead after a battle with the giant spider, Shelob; but Frodo is still alive—now in the foul hands of the Orcs. And all the while the armies of the Dark Lord are massing as the One Ring draws ever nearer to the Cracks of Doom.\n\nThird part of "The Lord of the Rings"'
      )
    ];
    console.log(JSON.stringify(books))
  };

}());
