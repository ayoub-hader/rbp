/*
 *
 * OmdbPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_MOVIES,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadMovies(search) {
  return {
    type: LOAD_MOVIES,
    search,
  };
}
export function moviesLoaded(movies) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies,
  };
}
export function moviesLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}
