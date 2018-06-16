import { RSAA } from 'redux-api-middleware';

import { GET_SEANCE_URL } from '../../constants/urls';
import { saveSeance } from './save-seance';

export const getSeance = id => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: GET_SEANCE_URL(id),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        'GET_SEANCES',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {

              dispatch(saveSeance(data));
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
