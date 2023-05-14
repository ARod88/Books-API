
// dependencies

const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// config
require("dotenv").config();
const PORT = process.env.PORT;
console.log("My port is:", PORT);

const app = express();

app.use(methodOverride('_method'));

// mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,}, () => {
    console.log('connected to mongoDB:', process.env.MONGO_URI)
});



mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongoDB: ", process.env.MONGO_URI);
});


// home page

app.get('/', (req, res) => {

    res.send('<h1>Hello world<h1>');

});

// app listener

app.listen(process.env.PORT, () => {
    console.log(`Server is running onn port ${process.env.PORT}`);
    

})
