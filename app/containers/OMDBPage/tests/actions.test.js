import { loadMovies, moviesLoaded, moviesLoadingError } from '../actions';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from '../constants';

const search = 'jumanji';

describe('OMDBPage > actions', () => {
  describe('loadMovies Action', () => {
    it('should return kpiId with proper type', () => {
      const expected = {
        type: LOAD_MOVIES,
        search,
      };
      expect(loadMovies(search)).toEqual(expected);
    });
  });

  describe('loadMoviesSuccess Action', () => {
    it('should return kpiId with proper type', () => {
      const movies = [
        {
          Title: 'Jumanji welcome to the jungle',
          year: '2017',
          poster: 'N/A',
        },
      ];

      const expected = {
        type: LOAD_MOVIES_SUCCESS,
        movies,
      };
      expect(moviesLoaded(movies)).toEqual(expected);
    });
  });

  describe('loadMoviesError Action', () => {
    it('should return kpiId with provided error', () => {
      const error = 'TIMEOUT';
      const expected = {
        type: LOAD_MOVIES_ERROR,
        error,
      };
      expect(moviesLoadingError(error)).toEqual(expected);
    });
  });
});
