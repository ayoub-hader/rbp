import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import omdbSaga, { loadMovies } from '../saga';
import { moviesLoaded, moviesLoadingError } from '../actions';
import { LOAD_MOVIES } from '../constants';

const apiKey = process.env.REACT_OMDB_API_KEY;
const search = 'jumanji';

describe('saga', () => {
  describe('OMDBPage > loadMovies success', () => {
    it('should yield an api call', () => {
      const generator = loadMovies({ search });
      const next = generator.next();
      expect(next.value).toEqual(
        call(request, `http://omdbapi.com/?s=jumanji&apikey=${apiKey}`),
      );
    });

    it('should dispatch a success action after api response', () => {
      const generator = loadMovies({ search });
      generator.next();
      const movies = [{ Title: 'Jumanji : some version' }];
      const next = generator.next({ Search: movies });
      expect(next.value).toEqual(put(moviesLoaded(movies)));
    });
  });

  describe('OMDBPage > loadMovies error', () => {
    it('should throw an error and yield a load movies error action', () => {
      const generator = loadMovies({ search });
      generator.next();
      const throws = generator.throw('TIMEOUT');
      expect(throws.value).toEqual(put(moviesLoadingError('TIMEOUT')));
    });
  });

  describe('OMDBPage > omdbSaga', () => {
    it('should watch for LOAD_MOVIES actions', () => {
      const watcher = omdbSaga({ search });
      expect(watcher.next().value).toEqual(takeLatest(LOAD_MOVIES, loadMovies));
    });
  });
});
