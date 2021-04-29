import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the omdbPage state domain
 */

const selectOmdbPageDomain = state => state.omdbPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OmdbPage
 */

const makeSelectOmdbPage = () =>
  createSelector(selectOmdbPageDomain, substate => substate);

const makeSelectMovies = createSelector(
  selectOmdbPageDomain,
  substate => substate.movies,
);

const makeSelectLoading = createSelector(
  selectOmdbPageDomain,
  substate => substate.search,
);

const makeSelectError = createSelector(
  selectOmdbPageDomain,
  substate => substate.error,
);

export default makeSelectOmdbPage;
export {
  selectOmdbPageDomain,
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
};
