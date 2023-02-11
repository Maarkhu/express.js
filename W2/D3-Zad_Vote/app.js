const express = require('express');
const {voteRouter} = require("./routes/votes.js");
const {static} = require("express");


const app = express();

app.use(express.json());
app.use(static('public'));
app.use('/vote', voteRouter)


app.listen(3000, 'localhost');