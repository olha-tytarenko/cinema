import { SAVE_MOVIE_LIST } from './types';

export const saveMovieList = movieList => ({
  type: SAVE_MOVIE_LIST,
  payload: movieList,
});
