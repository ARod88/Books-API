require("dotenv").config();

// dependencies

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,}, () => {
    console.log('connected to mongoDB:', process.env.MONGO_URI)
});
const db = mongoose.connection
// middleware

app.use(express.json())


const booksController = require("./controllers/books");
app.use('/books', booksController);



app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


// app listener

app.listen(process.env.PORT, () => {
    console.log(`Server is running onn port ${process.env.PORT}`);
    

})
