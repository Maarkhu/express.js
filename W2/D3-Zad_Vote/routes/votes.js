const express = require('express');
const voteRouter = express.Router();

let voteYes = 0;
let voteNo = 0;

voteRouter

    .get('/yes', async (req, res) => {
        voteYes = Number(voteYes) + 1;
        res.send(`Thanks for your vote!`);
        res.end();
    })
    .get('/no', async (req, res) => {
        voteNo = Number(voteNo) + 1;
        res.send(`Thanks for your vote!`);
        res.end();
    })
    .get('/check', async (req, res) => {
        res.send(`Vote for yes: ${voteYes} Vote for no: ${voteNo}`);
        res.end();
    })

module.exports = {
    voteRouter,
}