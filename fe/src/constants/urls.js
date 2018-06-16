export const MOVIE_LIST_URL = 'http://localhost:5000/getMovieList';
export const GET_MOVIE_URL = id => `http://localhost:5000/getMovie/?id=${id}`;
export const GET_SEANCES_URL = id => `http://localhost:5000/getSeances/?id=${id}`;
export const GET_SEANCE_URL = id => `http://localhost:5000/getSeance/?id=${id}`;
export const GET_TICKETS_URL = seanceId => `http://localhost:5000/getTickets/?id=${seanceId}`;
