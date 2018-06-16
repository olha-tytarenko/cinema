import { DESELECT_TICKET } from './types';

export const deselectTicket = ticketId => ({
  type: DESELECT_TICKET,
  payload: ticketId,
});
