import { put, fork, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as api from '../api/comments';
import Types from '../constants/types';

function* getItems(action) {
  const { postId, offset, limit } = action;
  try {
    const items = yield call(api.fetch, postId, offset, limit);
    yield put({ type: Types.GET_COMMENTS.SUCCESS, items: { postId: items } });
  } catch (error) {
    yield put({ type: Types.GET_COMMENTS.FAILURE, error });
  }
}

function* watchDetails() {
  yield takeLatest(Types.GET_COMMENTS.REQUEST, getItems);
}

export default function* detailsSaga() {
  yield fork(watchDetails);
}
