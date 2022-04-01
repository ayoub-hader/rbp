import homePageReducer, {initialState} from 'containers/HomePage/reducer';
import user from 'containers/HomePage/tests/mocks/user';
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
      success: false,
      error: null
    };

    expect(homePageReducer(state, setUserAction(user))).toEqual(expectedState);
  });

  it('should handle setUserSuccess action correctly', () => {
    const expectedState = {
      success: true,
      loading: false,
      error: null
    };
    expect(homePageReducer(state, setUserSuccessAction())).toEqual(
      expectedState,
    );
  });

  it('should handle setUserError action correctly', () => {
    const expectedState = {
      loading: false,
      error,
      success: false,
    };
    expect(homePageReducer(state, setUserErrorAction(error))).toEqual(
      expectedState,
    );
  });
});
