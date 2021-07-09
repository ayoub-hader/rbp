import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blockMenu state domain
 */

const selectBlockMenuDomain = state => state.blockMenu || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlockMenu
 */

const makeSelectBlockMenu = () =>
  createSelector(selectBlockMenuDomain, substate => substate);

export default makeSelectBlockMenu;
export { selectBlockMenuDomain };
