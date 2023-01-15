const express = require('express');
const {URLSearchParams} = require('url');
const app = express();
const allowedIps = ['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1']
app.get('/', (req) => {
  console.log(req.hostname);
  console.log(req.ip);
  allowedIps.includes(req.ip) ? console.log('Great') : console.log(`I don't know you`);
  console.log(req.ips); //kiedy pula ip
const {originalUrl, url, path} = req;
  console.log({originalUrl, url, path});
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.secure);
  // console.log(encodeURIComponent('Co to jest miłość?'));
  // const qs = new URLSearchParams();
  // qs.set('name', 'Marek');
  /* const qs = new URLSearchParams({
    name: 'Marek & Zegarek',
  });
  console.log(qs.toString());
  console.log(`http://localhost:3000/?${qs.toString()}` // http://localhost:3000/?${qs + ''}`
  ) */
  // Poniższa funkcja zamienie znaki + na %20 w generowanym URLu żebu express prawidłowo czytał adres i nie wstawiał + w wartościach/nazwach gdzie były spacje
  function genQeryString (param) {
    const qs = new URLSearchParams(param);
    return `${qs}`.replace(/\+/g, '%20');
  }

  console.log(`http://localhost:3000/?${genQeryString({name: 'Marek & Zegarek'})}`)
});
app.get('/book', () => {
  console.log('Show book list');
});
app.post('/book', () => {
  console.log('Dodaj nową pozycję do listy');
});

app.listen(3000, '127.0.0.1');