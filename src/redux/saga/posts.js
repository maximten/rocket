import { put, fork, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as api from '../api/posts';
import Types from '../constants/types';

function* getItems(action) {
  const { offset, limit } = action;
  try {
    const items = yield call(api.fetch, offset, limit);
    yield put({ type: Types.GET_POSTS.SUCCESS, items });
  } catch (error) {
    yield put({ type: Types.GET_POSTS.FAILURE, error });
  }
}

function* watchDetails() {
  yield takeLatest(Types.GET_POSTS.REQUEST, getItems);
}

export default function* detailsSaga() {
  yield fork(watchDetails);
}
