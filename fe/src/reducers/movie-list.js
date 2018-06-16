import * as types from '../actions/movie-list/types';

const defaultState = { movieList: [] };

export const movieListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SAVE_MOVIE_LIST:
      return {
        movieList: [...state.movieList, ...action.payload]
      };
    case types.CLEAR_MOVIE_LIST:
      return defaultState;
    default:
      return state;
  }
};
