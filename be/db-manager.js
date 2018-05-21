const mysql = require('mysql');
const qr = require('qr-image');
const fs = require('fs');
const path = require('path');
const tables = require('./constants/table-names');
const queries = require('./constants/queries');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cinema',
  insecureAuth: true,
});

const createTickets = (seanceId, hallId, filmId) => {
  connection.query(queries.SELECT_BY_ID(tables.MOVIE), [filmId], (__, movieField) => {
    const movieName = movieField[0].movie_name;

    connection.query(queries.SELECT_BY_ID(tables.HALL), [hallId], (__, halls) => {
      const ticket = {
        id_seance: seanceId,
        is_free: true,
      };

      let seatsInRow = halls[0].hall_seats_in_row;
      const rowCount = halls[0].hall_row_count;

      for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < seatsInRow; j++) {
          const ticketRow = i + 1;
          const ticketPlaceNumber = j + 1;
          const pathToQR = path.join(`${movieName}`, `${ticketRow}_${ticketPlaceNumber}.svg`);
          const qrSvg = qr.image(`seance: ${seanceId}, row:${ticketRow}, seat:${ticketPlaceNumber}`, { type: 'svg' });

          fs.mkdir(`${movieName}`, () => {
            qrSvg.pipe(fs.createWriteStream(pathToQR));
          });
          ticket.ticket_row = ticketRow;
          ticket.ticket_place_number = ticketPlaceNumber;
          ticket.qr_code = pathToQR;

          // save ticket to db
        }

        if (i === rowCount - 2 && seatsInRow !== halls[0].hall_last_row_seats_count) {
          seatsInRow = halls[0].hall_last_row_seats_count;
        }
      }
    });
  });
};

exports.createSeance = ({ movieId, hallId, time, date, price }) => {
  const seance = {
    id_movie: movieId,
    id_hall: hallId,
    seance_time: time,
    seance_date: date,
    seance_price: price,
  };

  connection.query(queries.INSERT(tables.SEANCE), seance, (error, seance) => {
    if (error) {
      console.log(error);
      throw error;
    }

    createTickets(seance.insertId, hallId, movieId);
  });
};
