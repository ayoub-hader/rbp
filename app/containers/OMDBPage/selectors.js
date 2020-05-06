import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOmdb = state => state.omdb || initialState;

const makeSelectMovies = createSelector(
  selectOmdb,
  omdbState => omdbState.movies,
);

const makeSelectLoading = createSelector(
  selectOmdb,
  omdbState => omdbState.loading,
);

const makeSelectError = createSelector(
  selectOmdb,
  omdbState => omdbState.error,
);

export { selectOmdb, makeSelectMovies, makeSelectLoading, makeSelectError };
