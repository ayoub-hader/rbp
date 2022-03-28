import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setUserErrorAction, setUserSuccessAction } from './actions';
import { SET_USER } from './constants';

export function* saveUser({ user }) {
  try {
    //const { data } = yield call(request.post, "endpoint");
    console.log('im in saga');
    yield put(setUserSuccessAction());
  } catch (error) {
    yield put(setUserErrorAction(error));
  }
}

export default function* homePageSaga() {
  yield takeLatest(SET_USER, saveUser);
}
