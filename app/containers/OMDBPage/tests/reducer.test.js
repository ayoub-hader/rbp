import produce from 'immer';
import omdbReducer, { initialState } from '../reducer';
import { loadMovies, moviesLoaded, moviesLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('OMDBPage > reducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(omdbReducer(undefined, {})).toEqual(state);
  });

  it('should handle load kpi action correctly', () => {
    const expectedState = produce(state, draft => {
      draft.loading = true;
    });
    expect(omdbReducer(state, loadMovies('jumanji'))).toEqual(expectedState);
  });

  it('should handle load kpi success action correctly', () => {
    const movies = [
      {
        Title: 'Jumanji welcome to the jungle',
        year: '2017',
        poster: 'N/A',
      },
    ];
    const expectedState = produce(state, draft => {
      draft.movies = movies;
    });
    expect(omdbReducer(state, moviesLoaded(movies))).toEqual(expectedState);
  });

  it('should handle load kpi error action', () => {
    const error = 'TIMEOUT';
    const expectedState = produce(state, draft => {
      draft.error = error;
    });
    expect(omdbReducer(state, moviesLoadingError(error))).toEqual(
      expectedState,
    );
  });
});
