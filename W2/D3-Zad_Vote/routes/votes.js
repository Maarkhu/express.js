const express = require('express');
const voteRouter = express.Router();
const {IpRestricter} = require('../Utils/ip-restricter');

const ipRestrict = new IpRestricter();

// let voteYes = 0;
// let voteNo = 0;
const votes = {
    yes: 0,
    no: 0,
}
voteRouter
    .get('/check', async (req, res) => {
        const info = Object.entries(votes).map(arr => `Votes on ${arr[0]}: ${arr[1]}`).join(`<br>`);
        res.send(info);
        //res.send(`Vote for yes: ${votes.yes} Vote for no: ${votes.no} <p>Maybe: ${votes.maybe}</p>`);
    })
    .get('/:voteName', async (req, res) => {
        if (!ipRestrict.check(req.ip)) {
            return res.status(403).send('Sorki oddałeś już głos');
        }
        const {voteName} = req.params;
        if (typeof votes[voteName] === "undefined") {
            votes[voteName] = 0;
        };
        votes[voteName]++;
        res.send(`Thanks for your vote!`);
        res.end();
    })

module.exports = {
    voteRouter,
}