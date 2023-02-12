const express = require('express');
const {calcRouter} = require("./routes/calc.js");
const {static} = require("express");


const app = express();

app.use(express.json());
app.use(static('public'));
app.use('/calc', calcRouter)


app.listen(3000, 'localhost');