const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/', bodyParser, (req, res) => {
  res.send({ received: true });
});

app.post('/', bodyParser, (req, res) => {
  res.send({ received: true });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});