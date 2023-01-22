const express = require('express');

const app = express();


app.get('/:num1/:num2', (req, res) => {

    res.send(`${Number(req.params.num1) + parseInt(req.params.num2)}`);

    res.end();
})
app.listen(3000, 'localhost');