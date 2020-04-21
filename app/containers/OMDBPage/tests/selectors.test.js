import {
  selectOmdb,
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';
import { initialState } from '../reducer';

const omdbState = () => ({
  movies: [
    {
      Title: 'Jumanji welcome to the jungle',
      year: '2017',
      poster: 'N/A',
    },
  ],
  loading: false,
  error: false,
});

describe('OMDBPage > selectors', () => {
  it('should return initial state for empty provided state', () => {
    expect(selectOmdb({})).toBe(initialState);
  });

  it('should return omdb state when provided', () => {
    const omdb = omdbState();
    expect(selectOmdb({ omdb })).toBe(omdb);
  });

  it('should return movies data', () => {
    const omdb = omdbState();
    expect(makeSelectMovies.resultFunc(omdb)).toEqual(omdb.movies);
  });

  it('should return loading state', () => {
    const omdb = omdbState();
    omdb.loading = true;

    expect(makeSelectLoading.resultFunc(omdb)).toEqual(true);
  });

  it('should return error state', () => {
    const omdb = omdbState();

    expect(makeSelectError.resultFunc(omdb)).toEqual(false);
  });
});
