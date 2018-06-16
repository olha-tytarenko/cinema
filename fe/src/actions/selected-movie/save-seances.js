import { SAVE_SEANCES } from './types';

export const saveSeances = seances => ({
  type: SAVE_SEANCES,
  payload: seances,
});
