import { RSAA } from 'redux-api-middleware';

import { GET_TICKETS_URL } from '../../constants/urls';
import { saveTicketsToStore } from './save-tickets-to-store';

export const getTickets = seanceId => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: GET_TICKETS_URL(seanceId),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        'GET_TICKETS',
        {
          type: 'SUCCESS',
          payload: (_, __, res) => {
            res.json().then((data) => {
              console.log(data);
              dispatch(saveTicketsToStore(data));
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
