import { SAVE_SEANCE } from './types';

export const saveSeance = seance => ({
  type: SAVE_SEANCE,
  payload: seance,
});
