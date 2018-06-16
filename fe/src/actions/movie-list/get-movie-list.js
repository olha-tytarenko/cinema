import { RSAA } from 'redux-api-middleware';

import { MOVIE_LIST_URL } from '../../constants/urls';
import { saveMovieList } from './save-movie-list';

export const getMovieList = () => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: MOVIE_LIST_URL,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        'GET_MOVIE_LIST',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {

              dispatch(saveMovieList(data));
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
