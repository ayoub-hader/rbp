import produce from 'immer';
import {
  CLEAN_UP,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_SUCCESS,
} from './constants';

export const initialState = {
  user: {},
  loading: false,
  success: false,
  error: null,
};

const homePageReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_USER:
      draft.user = action.user;
      draft.success = false;
      draft.loading = true;
      draft.error = null;
      break;
    case SET_USER_SUCCESS:
      draft.success = true;
      draft.loading = false;
      draft.error = null;
      break;
    case SET_USER_ERROR:
      draft.success = false;
      draft.loading = false;
      draft.error = action.error;
      break;
    case CLEAN_UP:
      draft.user = {};
      draft.loading = false;
      draft.success = false;
      draft.error = null;
  }
}, initialState);

export default homePageReducer;
