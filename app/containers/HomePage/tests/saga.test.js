import { saveUser } from 'containers/HomePage/saga';
import user from 'containers/HomePage/tests/mocks/user';
import {
  setUserErrorAction,
  setUserSuccessAction,
} from 'containers/HomePage/actions';
import { put } from 'redux-saga/effects';

describe('HomePage Saga', () => {
  let generator;
  const error = 'TIMEOUT';

  describe('saveUser', () => {
    beforeEach(() => {
      generator = saveUser({ user });
    });

    it('should dispatch a success action', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(setUserSuccessAction()));
    });

    it('should throw an error action', () => {
      generator.next();
      const throws = generator.throw(error);
      expect(throws.value).toEqual(put(setUserErrorAction(error)));
    });
  });
});
