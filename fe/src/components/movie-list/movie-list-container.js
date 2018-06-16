import { connect } from 'react-redux';

import { MovieList } from './movie-list';
import { getMovieList, clearMovieList } from '../../actions/movie-list';

const mapStateToProps = state => ({
  movieList: state.movieList.movieList,
});

const mapDispatchToProps = {
  getMovieList,
  clearMovieList,
};

export const MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList);
