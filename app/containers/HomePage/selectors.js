import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePageDomain = (state) => state.homePage || initialState;
const makeSelectFormm = createSelector(
  selectHomePageDomain,
  (substate) => substate.formm,
);

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, (substate) => substate);

export default makeSelectHomePage;
export { selectHomePageDomain, makeSelectFormm };
