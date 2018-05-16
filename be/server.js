const express = require('express');
const dbManager = require('./db-manager');

const app = express();
const port = 5000;

app.get('/', (request, response) => {
  const date = new Date();
  const seance = {
    movieId: 1,
    hallId: 1,
    time: `${date.getHours()}:${date.getMinutes()}:00`,
    date: `${date.getFullYear()}:${date.getMonth() + 1}:${date.getDate()}`,
    price: 100,
  };

  dbManager.createSeance(seance);
  response.send('Hello from Express!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
