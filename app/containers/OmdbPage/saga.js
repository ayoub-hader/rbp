import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { moviesLoaded, moviesLoadingError } from './actions';
import { LOAD_MOVIES } from './constants';

const apiKey = process.env.REACT_OMDB_API_KEY;

export function* loadMovies({ search }) {
  const url = `http://omdbapi.com/?s=${search}&apikey=${apiKey}`;
  try {
    const data = yield call(request, url);
    yield put(moviesLoaded(data.Search));
  } catch (error) {
    yield put(moviesLoadingError(error));
  }
}
// Individual exports for testing
export default function* omdbPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_MOVIES, loadMovies);
}
