const storeMock = state => ({
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  getState: jest.fn(() => state),
  replaceReducer: jest.fn(),
  runSaga: jest.fn(),
  createReducer: jest.fn(),
  injectedReducers: jest.fn(),
  injectedSagas: jest.fn(),
});

export default storeMock;
