const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
//app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
   res.cookie('ciastko pierwsze', 'ta dieta mnie nie dotyczy', {
    maxAge: 1000 * 60 * 60 * 24 * 365,
       httpOnly: true,
    })
    res.send('Ok!');
   res.end();
});

app.get('/book', (req, res) => {
    console.log(req.cookies);
    console.log(req.body);
    res.send('Ok!');
});

app.get('/logout', (req, res) => {
    res
        .clearCookie('ciastko pierwsze')
        .send('Logged out');
});

app.listen(3000, 'localhost');