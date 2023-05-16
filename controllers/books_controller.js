const express = require('express');
const books = express.Router();
const Book = require('../models/book.js')


books.get('/', (req, res) => {
    Book.find().then((books) => {
        res.json(books)
    })
});


books.get('/:id', (req, res) = > {
    const id = req.params.find
    Book.findById(id).then((createBook) = > {
        res.json(createBook)
    })
});

// // Creating one

// router.post('/', (req, res) = > {
//     res.send('Hello World')
// });

// // Updating one

// router.put('/:id', (req, res) => {
//     res.send('Hello World')
// })
// // Deleting one

// router.delete('/:id', (req, res) => {

// })


module.exports = router


