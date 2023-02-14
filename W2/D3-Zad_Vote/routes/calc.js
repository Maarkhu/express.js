const express = require('express');
const calcRouter = express.Router();


calcRouter
    .post('/check', (req, res) => {
        console.log(req.body);
        const {numberA, numberB} = req.body;
        // if (numberA % numberB === 0) {
        //     res.json({divider: true})
        // } else {
        //     res.json({divider: false})
        // }
        const divider = numberA % numberB === 0;
        res.json({divider})
    })

module.exports = {
    calcRouter,
}