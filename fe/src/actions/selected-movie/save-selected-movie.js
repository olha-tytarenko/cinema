import { SAVE_SELECTED_MOVIE } from './types';

export const saveSelectedMovie = movie => ({
  type: SAVE_SELECTED_MOVIE,
  payload: movie,
});
