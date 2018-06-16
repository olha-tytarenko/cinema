import { SAVE_SELECTED_MOVIE_ID } from './types';

export const saveSelectedMovieId = id => ({
  type: SAVE_SELECTED_MOVIE_ID,
  payload: id,
});
