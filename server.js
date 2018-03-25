const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();

const connect = require('./lib/databaseConnect');
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/plantigotchi';
connect(dbUri);

const PORT = process.env.PORT || 3000;

// "http://10.0.12.192:3000/"

const SensorReading = require('./lib/sensorReadings');

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/', bodyParser, (req, res) => {
  res.send('plantigotchi received get request');
});

app.post('/', bodyParser, (req, res) => {
  // res.send('plantigotchi received post request', req.body);
  console.log('plantigotchi received post request', req.body);

  const moistureReading = new SensorReading(req.body);
  console.log('moistureReading', moistureReading);

  moistureReading.save()
    .then(saved => res.send(saved))
    // .then(saved => res.send(200))
    // .catch(next);

});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});