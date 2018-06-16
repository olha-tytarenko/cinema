import { RSAA } from 'redux-api-middleware';

import { GET_MOVIE_URL } from '../../constants/urls';
import { saveSelectedMovie } from './save-selected-movie';

export const getMovie = id => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: GET_MOVIE_URL(id),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        'GET_MOVIE',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {
              dispatch(saveSelectedMovie(data));
            });
          },
        },
        {
          type: 'FAILURE',
          payload: () => {
            // simulate logging errors
            console.log('error');
          },
        },
      ],
    },
  };

  dispatch(action);
};
