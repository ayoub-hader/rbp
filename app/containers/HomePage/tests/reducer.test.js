import homePageReducer, { initialState } from 'containers/HomePage/reducer';
import user from 'containers/HomePage/tests/mocks';
import {
  setUserAction,
  setUserErrorAction,
  setUserSuccessAction,
} from 'containers/HomePage/actions';

describe('HomePage Reducer', () => {
  let state;
  const error = 'TIMEOUT';
  beforeEach(() => {
    state = {};
  });

  it('should return initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setUser action correctly', () => {
    const expectedState = {
      user,
      loading: true,
    };
    expect(homePageReducer(state, setUserAction(user))).toEqual(expectedState);
  });

  it('should handle setUserSuccess action correctly', () => {
    const expectedState = {
      user,
      success: true,
      loading: false,
    };
    expect(homePageReducer(state, setUserSuccessAction())).toEqual(
      expectedState,
    );
  });

  it('should handle setUserError action correctly', () => {
    const expectedState = {
      error,
      success: false,
    };
    expect(homePageReducer(state, setUserErrorAction(error))).toEqual(
      expectedState,
    );
  });
});
