import produce from 'immer';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  movies: false,
};

/* eslint-disable default-case, no-param-reassign */
const moviesReducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      draft.loading = true;
      draft.error = false;
      draft.movies = false;
      break;
    case LOAD_MOVIES_SUCCESS:
      draft.loading = false;
      draft.error = false;
      draft.movies = action.movies;
      break;
    case LOAD_MOVIES_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default moviesReducer;
