const express = require('express');
const calcRouter = express.Router();


calcRouter
    .post('/check', (req, res) => {
        console.log(req.body);

        res.json({ok: true});// @TODO
    })

module.exports = {
    calcRouter,
}