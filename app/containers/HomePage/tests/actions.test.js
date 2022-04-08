import user from 'containers/HomePage/tests/mocks/user';
import {
  setUserAction,
  setUserSuccessAction,
  setUserErrorAction,
  setCleanUpAction,
} from '../actions';
import {
  SET_USER,
  SET_USER_SUCCESS,
  SET_USER_ERROR,
  CLEAN_UP,
} from '../constants';

describe('HomePage Actions', () => {
  describe('Set User Action', () => {
    it('has a type of SET_USER', () => {
      const payload = user;
      const expected = {
        type: SET_USER,
        user,
      };
      expect(setUserAction(payload)).toEqual(expected);
    });
  });
  describe('Set User Success Action', () => {
    it('has a type of SET_USER_SUCCESS', () => {
      const expected = {
        type: SET_USER_SUCCESS,
      };
      expect(setUserSuccessAction()).toEqual(expected);
    });
  });
  describe('Set User Error Action', () => {
    it('has a type of SET_USER_ERROR', () => {
      const expected = {
        type: SET_USER_ERROR,
      };
      expect(setUserErrorAction()).toEqual(expected);
    });
  });

  describe('Set User Clean Up Action', () => {
    it('has a type of CLEAN_UP', () => {
      const expected = {
        type: CLEAN_UP,
      };
      expect(setCleanUpAction()).toEqual(expected);
    });
  });
});
