import user from 'containers/HomePage/tests/mocks/user';
import { put } from 'redux-saga/effects';
import { setUserErrorAction, setUserSuccessAction } from '../actions';
import { saveUser } from '../saga';

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
