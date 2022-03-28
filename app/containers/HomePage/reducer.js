import produce from 'immer';
import { SET_USER, SET_USER_ERROR, SET_USER_SUCCESS } from './constants';

export const initialState = {
  user: {},
  success: false,
  error: null,
};

const homePageReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_USER:
      draft.user = action.user;
      draft.success = false;
      draft.error = null;
      break;
    case SET_USER_SUCCESS:
      draft.success = true;
      draft.error = false;
      break;
    case SET_USER_ERROR:
      draft.success = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default homePageReducer;
