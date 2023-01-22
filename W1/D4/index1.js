const express = require('express');
const {readFile, writeFile} = require('fs').promises;


const app = express();


app.get('/name/set/:name', async (req, res) => {
    const name = req.params.name;
    await writeFile('./text.txt', name, "utf8");
    console.log(name);
    res.send(name);
    res.end();
})
app.get('/name/show/', async (req, res) => {
    const name = await readFile('text.txt', "utf-8");
    res.send(name);
    res.end();
})
app.get('/name/check', async (req, res) => {

    try { await readFile('text.txt');
    res.send(`Your name is written.`);
    } catch (e) {
        res.send(`There is no name!`);
    }
        res.end();
})
app.listen(3000, 'localhost');