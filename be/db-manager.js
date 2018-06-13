const mysql = require('mysql');
const qr = require('qr-image');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const tables = require('./constants/table-names');
const queries = require('./constants/queries');
const constants = require('./constants/general-constants');
const utils = require('./utils/date-utils');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cinema',
  insecureAuth: true,
});

const getFilms = () => {
  for (let i = 100; i < 150; i++) {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3e085579fcffd4433e96a3e0ac6dacb5&page=${i + 1}`)
      .then(res => res.json())
      .then((movies) => {
        const moviesArray = movies.results;
        moviesArray.forEach((movie) => {
          const m = {
            movie_name: movie.original_title,
            movie_description: movie.overview,
            movie_rating: movie.vote_average,
            movie_adult: movie.adult,
            movie_release_date: movie.release_date,
          };

          dbManager.createMovie(m);
        });
      });
  }
};

exports.fillUserHistory = () => {
  const userHistory = {
    id_ticket: 0,
    id_user: 0,
  };

  for (let i = 0; i < 200; i++) {
    userHistory.id_ticket = i + 10;
    userHistory.id_user = i + 1;

    connection.query(queries.INSERT(tables.USER_HISTORY), userHistory, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

exports.fillGenreMovie = () => {
  const genreMovie = {
    id_genre: 0,
    id_movie: 0,
  };

  for (let i = 101; i < 2478; i++) {
    genreMovie.id_movie = i;
    genreMovie.id_genre = Math.round(Math.random() * 12) + 1;

    console.log(genreMovie);
    connection.query(queries.INSERT(tables.GENRE_MOVIE), genreMovie, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const createTickets = (seanceId, hallId, movieId) => {
  connection.query(queries.SELECT_BY_ID(tables.MOVIE), [movieId], (__, movieField) => {
    const movieName = movieField[0].movie_name;

    connection.query(queries.SELECT_BY_ID(tables.HALL), [hallId], (__, halls) => {
      const ticket = {
        id_seance: seanceId,
        is_free: true,
      };

      let seatsInRow = halls[0].hall_seats_in_row;
      const rowCount = halls[0].hall_row_count;

      fs.mkdir(path.join('tickets', `${movieId}`), (err) => {
        if (err) {
          throw err;
        }

        for (let i = 0; i < rowCount; i++) {
          for (let j = 0; j < seatsInRow; j++) {
            console.log(`TICKET: MOVIE: ${movieName}, row: ${i}, seat: ${j}`);
            const ticketRow = i + 1;
            const ticketPlaceNumber = j + 1;
            const pathToQR = path.join('tickets', `${movieId}`, `${ticketRow}_${ticketPlaceNumber}.svg`);
            const qrSvg = qr.image(`seance: ${seanceId}, row:${ticketRow}, seat:${ticketPlaceNumber}`, { type: 'svg' });
            qrSvg.pipe(fs.createWriteStream(pathToQR));

            ticket.ticket_id_row = ticketRow;
            ticket.ticket_place_number = ticketPlaceNumber;
            ticket.qr_code = pathToQR;

            // save ticket to db
            connection.query(queries.INSERT(tables.TICKET), ticket, (error) => {
              if (error) {
                console.log(error);
                throw error;
              }
            });
          }

          if (i === rowCount - 2 && seatsInRow !== halls[0].hall_last_row_seats_count) {
            seatsInRow = halls[0].hall_last_row_seats_count;
          }
        }
      });
    });
  });
};

const createSeance = ({ id_movie, id_hall, seance_time, seance_date, seance_price }) => {
  console.log('CREATE SEANCE');
  const seance = {
    id_movie,
    id_hall,
    seance_time,
    seance_date,
    seance_price,
  };

  connection.query(queries.INSERT(tables.SEANCE), seance, (error, seance) => {
    if (error) {
      console.log(error);
      throw error;
    }
  });
};

exports.createMovie = ({ movie_name, movie_description, movie_rating, movie_adult, movie_release_date }) => {
  const movie_rental_start = utils.getFormattedDate(movie_release_date, constants.DATE_TYPE.START);
  const movie_rental_end = utils.getFormattedDate(movie_rental_start, constants.DATE_TYPE.END);
  const movie = {
    movie_name,
    movie_description,
    movie_rating,
    movie_adult,
    movie_rental_start,
    movie_rental_end,
    movie_release_date,
    movie_poster: '',
  };

  connection.query(queries.INSERT(tables.MOVIE), movie, (error, insertedRow) => {
    if (error) {
      console.log(error);
      throw error;
    }

    console.log(insertedRow);
  });
};

exports.createUser = ({ user_email, user_password, user_role = 'user' }) => {
  const user = {
    user_email,
    user_password,
    user_role,
  };

  connection.query(queries.INSERT(tables.USER), user, (error, data) => {
    if (error) {
      console.log(error);
      throw error;
    }
  });
};

exports.fillUsersInTickets = () => {
  for (let i = 10; i < 6070; i++) {
    const userId = Math.round(Math.random() * 2500);
    connection.query('UPDATE ticket SET id_user = ? WHERE id_ticket = ?', [userId, i], (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

exports.sellTickets = () => {
  const sql = 'select ticket.id_ticket from ticket INNER JOIN seance ON ticket.id_seance = seance.id_seance WHERE seance.seance_date < "2018-06-06"';

  connection.query(sql, (err, results) => {
    if (err) {
      throw err;
    }

    results.forEach((item) => {
      connection.query('UPDATE ticket SET ticket.is_free = ? WHERE ticket.id_ticket = ?', [false, item.id_ticket], (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
};
