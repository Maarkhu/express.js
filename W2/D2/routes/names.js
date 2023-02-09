const express = require('express');
const nameRouter = express.Router();
const {readFile, writeFile} = require('fs').promises;
const file_path = `./data/text.txt`
nameRouter

    .get('/set/:name', async (req, res) => {
        const name = req.params.name;
        await writeFile(file_path, name, "utf8");
        console.log(name);
        res.send(name);
        res.end();
    })
    .get('/show/', async (req, res) => {
        const name = await readFile(file_path, "utf-8");
        res.send(name);
        res.end();
    })
    .get('/check', async (req, res) => {
        try {
            await readFile(file_path);
            res.send(`Your name is written.`);
        } catch (e) {
            res.send(`There is no name!`);
        }
        res.end();
    })

module.exports = {
    nameRouter,
}