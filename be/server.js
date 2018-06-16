const express = require('express');
const dbManager = require('./db-manager');

const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/getMovieList', (req, res) => {
  dbManager.getMovieList().then(movieList => res.send(JSON.stringify(movieList)));
});

app.get('/getMovie', (req, res) => {
  const movieId = req.query.id;

  dbManager.getMovieById(movieId).then(movie => {
    res.send(JSON.stringify(movie));
  });
});

app.get('/getSeances', (req, res) => {
  const movieId = req.query.id;

  dbManager.getSeancesByMovieId(movieId).then(seances => {
    res.send(JSON.stringify(seances));
  });
});

app.get('/getSeance', (req, res) => {
  const seanceId = req.query.id;

  dbManager.getSeancesById(seanceId).then(seance => res.send(JSON.stringify(seance)));
});

app.get('/getTickets', (req, res) => {
  const seanceId = req.query.id;
  dbManager.getTicketsBySeanceId(seanceId).then(tickets => res.send(JSON.stringify(tickets)));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
