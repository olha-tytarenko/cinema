const moment = require('moment');

exports.formatMovie = ({
  id_movie,
  movie_description,
  movie_adult,
  movie_name,
  movie_rating,
  movie_release_date,
  movie_rental_start,
  movie_rental_end,
}) => ({
  id: id_movie,
  description: movie_description,
  isForAdult: movie_adult,
  name: movie_name,
  rating: movie_rating,
  releaseDate: moment(movie_release_date).format('Do MMM YYYY'),
  rentalStart: moment(movie_rental_start).format('Do MMM YYYY'),
  rentalEnd: moment(movie_rental_end).format('Do MMM YYYY'),
});

exports.formatSeance = ({
  id_seance,
  seance_time,
  seance_date,
  seance_price,
  hall_name,
}) => ({
  id: id_seance,
  time: seance_time,
  price: seance_price,
  date: moment(seance_date).format('Do MMM YYYY'),
  hall: hall_name,
});

exports.formatTicket = ({
  id_ticket,
  is_free,
  ticket_place_number,
  ticket_id_row,
}) => ({
  row: ticket_id_row,
  place: ticket_place_number,
  isFree: is_free,
  id: id_ticket,
});
