const express = require('express');

const app = express();

app.get('/newid', (req, res) => {
  res.send('Jedyna opcja')
});

app.get('/:id/:opcjonalnietytul?', (req, res) => {
  // res.json({
  //   id: req.params.id,
  //   title: req.params.opcjonalnietytul
  // });
  // res.send({
  // id: 26,
  // content: 'grzybki'
  // });
  // res.location('www.o2.pl');
  res.redirect('https://www.wp.pl');
  res.end();
})
app.listen(3000, 'localhost');