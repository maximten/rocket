import { put, fork, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as api from '../api/comments';
import Types from '../constants/types';

function* getItems(action) {
  const { postId, offset, limit } = action;
  try {
    const items = yield call(api.fetch, postId, offset, limit);
    yield put({ type: Types.GET_COMMENTS.SUCCESS, items, postId });
  } catch (error) {
    yield put({ type: Types.GET_COMMENTS.FAILURE, error });
  }
}

function* addComment(action) {
  const { postId, name, content } = action;
  try {
    yield call(api.add, postId, name, content);
    yield put({ type: Types.ADD_COMMENT.SUCCESS });
  } catch (error) {
    yield put({ type: Types.ADD_COMMENT.FAILURE });
  }
}

function* watchDetails() {
  yield takeLatest(Types.GET_COMMENTS.REQUEST, getItems);
  yield takeLatest(Types.ADD_COMMENT.REQUEST, addComment);
}

export default function* detailsSaga() {
  yield fork(watchDetails);
}
