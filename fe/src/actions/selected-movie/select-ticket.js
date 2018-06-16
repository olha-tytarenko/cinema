import { SELECT_TICKET } from './types';

export const selectTicket = ticket => ({
  type: SELECT_TICKET,
  payload: ticket,
});
