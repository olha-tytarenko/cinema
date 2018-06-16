import { SAVE_TICKETS_TO_STORE } from './types';

export const saveTicketsToStore = tickets => ({
  type: SAVE_TICKETS_TO_STORE,
  payload: tickets,
});
