const express = require('express');

const app = express();

app.get('/', (req) => {
  console.log(req.query);
});

app.listen(3000, 'localhost');