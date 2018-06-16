import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { MovieItem } from './movie-item';
import { MOVIE_DETAILS } from '../../../constants/routes';
import { saveSelectedMovieId, getMovie, getSeances } from '../../../actions/selected-movie/index';

const mapDispatchToProps = {
  navigateToMovieDetails: () => push(MOVIE_DETAILS),
  saveSelectedMovieId,
  getMovie,
  getSeances,
};

export const MovieItemContainer = withRouter(connect(null, mapDispatchToProps)(MovieItem));
