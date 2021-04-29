/*
 *
 * OmdbPage reducer
 *
 */

import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

export const initialState = {
  search: false,
  movies: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const omdbPageReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    case LOAD_MOVIES:
      draft.search = true;
      draft.movies = false;
      draft.error = false;
      break;
    case LOAD_MOVIES_SUCCESS:
      draft.search = false;
      draft.movies = action.movies;
      draft.error = false;
      break;
    case LOAD_MOVIES_ERROR:
      draft.search = false;
      draft.movies = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default omdbPageReducer;
