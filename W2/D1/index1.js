const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

let voteYes = 0;
let voteNo = 0;

app.get('/vote/yes', (req, res) => {
   voteYes = Number(voteYes) + 1;
    res.send(`Thanks for your vote!`)
    res.end();
});

app.get('/vote/no', (req, res) => {
   voteNo = Number(voteNo) + 1;
    res.send(`Thanks for your vote!`);
    res.end();
});

app.get('/vote/check', (req, res) => {
    res.send(`Vote for yes: ${voteYes} Vote for no: ${voteNo}`);
    res.end();
});

app.listen(3000, 'localhost');