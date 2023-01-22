const express = require('express');

const app = express();
let name;

app.get('/name/set/:name', (req, res) => {
    name = req.params.name;
    console.log(name);
    res.send(name);
    res.end();
})
app.get('/name/show/', (req, res) => {
    res.send(name);
    res.end();
})
app.get('/name/check', (req, res) => {

    if (name !== undefined) {
        res.send(`Your name is written`);
    } else {
        res.send(`There is no name written`);
    }
        res.end();
})
app.listen(3000, 'localhost');