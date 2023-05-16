const mongoose = require('mongoose')

const { Schema } = mongoose;

const bookSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageUrl: { type: String}
})

// model and export

const Book = mongoose.model('Book', bookSchema)

module.exports = Book