const express = require('express');
const route = express.Router();

// Getting all
router.get('/', (req, res) => {
    res.send('Hello World')
});

// // Getting one
// router.get('/:id', (req, res) = > {
//     res.send('Hello World')
// });

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


