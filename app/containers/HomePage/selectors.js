import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePageDomain = state => state.homePage || initialState;
const makeSelectForm = createSelector(
  selectHomePageDomain,
  substate => substate.form,
);

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate);

export default makeSelectHomePage;
export { selectHomePageDomain, makeSelectForm };
