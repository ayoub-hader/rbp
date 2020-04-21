import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

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
