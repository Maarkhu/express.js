const express = require('express');
const rateLimit = require('express-rate-limit');
const {nameRouter} = require("./routes/names");

const limiter = rateLimit(
    {
        windowMs: 60 * 1000,
        max: 10,
    }
);



const app = express();

app.use(express.json());
app.use('/name', nameRouter)
app.use(limiter);

app.listen(3000, 'localhost');