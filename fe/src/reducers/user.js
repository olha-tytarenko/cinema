import { SAVE_USER } from '../actions/user/types';

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
