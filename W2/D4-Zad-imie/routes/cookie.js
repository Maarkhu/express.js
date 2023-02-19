const express = require('express');
const cookieRouter = express.Router();


cookieRouter
    .post('/set', (req, res) => {
        const {name} = req.body;

        res.cookie('name', name, {
            maxAge: 1000 * 60 * 60 * 24 * 30
        })
            .send('Name saved')
    })
    .get ('/show', (req, res) => {
        const {name} = req.cookies;
        res.send(name ?? 'There is no name.');
    })
    .get ('/check', (req, res) => {
        const {name} = req.cookies;
        res.send(name === undefined?'There is no name.':'Your name is saved.');
    });

module.exports = {
    cookieRouter,
}