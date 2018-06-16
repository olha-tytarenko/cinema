import * as types from '../actions/selected-movie/types';

const initialState = {
  seance: {
    tickets: [],
  },
  selectedTickets: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_SELECTED_MOVIE_ID:
      return {
        ...state,
        selectedMovieId: action.payload,
      };
    case types.SAVE_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case types.SAVE_SEANCES:
      return {
        ...state,
        seanceList: action.payload,
      };
    case types.SAVE_SEANCE:
      return {
        ...state,
        seance: {
          ...action.payload,
          tickets: [...state.seance.tickets],
        },
      };
    case types.SAVE_TICKETS_TO_STORE:
      return {
        ...state,
        seance: {
          ...state.seance,
          tickets: action.payload,
        },
      };
    case types.SELECT_TICKET:
      return {
        ...state,
        selectedTickets: [
          ...state.selectedTickets,
          action.payload,
        ],
      };
    case types.DESELECT_TICKET:
      return {
        ...state,
        selectedTickets: state.selectedTickets.filter(id => id !== action.payload),
      };
    default:
      return state;
  }
};
