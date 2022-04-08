import user from 'containers/HomePage/tests/mocks/user';
import {
  setUserAction,
  setUserErrorAction,
  setUserSuccessAction,
} from 'containers/HomePage/actions';
import produce from 'immer';
import homePageReducer, { initialState } from '../reducer';

const reducerState = {
  user,
  error: 'TIMEOUT',
};

describe('HomePage Reducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('should return initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setUser action correctly', () => {
    const expectedState = produce(state, (draft) => {
      draft.user = reducerState?.user;
      draft.loading = true;
      draft.success = false;
      draft.error = null;
    });

    expect(homePageReducer(state, setUserAction(reducerState?.user))).toEqual(
      expectedState,
    );
  });

  it('should handle setUserSuccess action correctly', () => {
    const expectedState = produce(state, (draft) => {
      draft.success = true;
      draft.loading = false;
      draft.error = null;
    });

    expect(homePageReducer(state, setUserSuccessAction())).toEqual(
      expectedState,
    );
  });

  it('should handle setUserError action correctly', () => {
    const expectedState = produce(state, (draft) => {
      draft.success = false;
      draft.loading = false;
      draft.error = reducerState?.error;
    });

    expect(
      homePageReducer(state, setUserErrorAction(reducerState?.error)),
    ).toEqual(expectedState);
  });
});
