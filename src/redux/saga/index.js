import { fork } from 'redux-saga/effects';
import posts from './posts';
import comments from './comments';

export default function* rootSaga() {
  yield fork(posts);
  yield fork(comments);
}
