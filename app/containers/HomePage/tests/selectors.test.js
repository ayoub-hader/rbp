import user from 'containers/HomePage/tests/mocks';
import { initialState } from 'containers/HomePage/reducer';
import {
  selectHomePageDomain,
  makeSelectUser,
  makeSelectUserSuccess,
  makeSelectUserError,
} from 'containers/HomePage/selectors';

const homePageState = {
  user,
  success: false,
  error: null,
};

const state = {
  homePage: homePageState,
};

describe('HomePage selector', () => {
  describe('selectHomePageDomain', () => {
    it('should return initial state', () => {
      expect(selectHomePageDomain({})).toBe(initialState);
    });

    it('should return state', () => {
      expect(selectHomePageDomain(state)).toBe(homePageState);
    });
  });

  describe('makeSelectUser', () => {
    it('should select user', () => {
      expect(makeSelectUser(state)).toBe(homePageState?.user);
    });
  });

  describe('makeSelectSuccess', () => {
    it('should select success', () => {
      expect(makeSelectUserSuccess(state)).toBe(homePageState?.success);
    });
  });

  describe('makeSelectError', () => {
    it('should select error', () => {
      expect(makeSelectUserError(state)).toBe(homePageState?.error);
    });
  });
});
