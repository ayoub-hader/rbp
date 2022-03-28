import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePageDomain = (state) => state.homePage || initialState;

const makeSelectUser = createSelector(
  selectHomePageDomain,
  (substate) => substate.user,
);

const makeSelectUserSuccess = createSelector(
  selectHomePageDomain,
  (substate) => substate.success,
);

const makeSelectUserError = createSelector(
  selectHomePageDomain,
  (substate) => substate.error,
);

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, (substate) => substate);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectUser,
  makeSelectUserSuccess,
  makeSelectUserError,
};
