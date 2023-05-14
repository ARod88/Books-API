const express = require('express')

const app = express();

// home page

app.get('/', (req, res) => {

    res.send('<h1>Hello world<h1>');

});

// app listener

app.listen(4000, () => {
    console.log('server started on port 4000');
});

