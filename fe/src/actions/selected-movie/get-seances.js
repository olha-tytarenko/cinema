import { RSAA } from 'redux-api-middleware';

import { GET_SEANCES_URL } from '../../constants/urls';
import { saveSeances } from './save-seances';

export const getSeances = id => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: GET_SEANCES_URL(id),
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
              dispatch(saveSeances(data));
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
