const express = require('express');
const {readFile} = require('fs').promises;
const app = express();

app.get ('/', async (req, res) => {
  console.log('<h1>Hello from backend</h1>')
  const html = await readFile('./zad.html', 'utf8');
  const stat = req.header('User-Agent');
  console.log(stat);
  await res.send(`<h1>User agent to:<br> ${stat}.<br> Ale pięknie.</h1>`);
  await res.end();
});
app.listen(3000, 'localhost');