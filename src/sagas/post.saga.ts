import {
  takeEvery,
  call,
  put,
  all,
  takeLatest,
  select
} from "redux-saga/effects";
import { getPostsActions, createPostActions } from "../actions";
import postsApi from "../api";
import { IStore } from "../interfaces";

const timer = (ms: number) => () =>
  new Promise((res, rej) => {
    setTimeout(res, ms);
  });

function* getPostsSaga() {
  try {
    const { data } = yield call(postsApi.getPosts);

    yield put(getPostsActions.response(data));
  } catch (err) {
    console.log(err.message);
  }
}

function* createPostSaga() {
  try {
    const title = yield select((store: IStore) => store.message);

    yield call(timer(2000)); // imitate delay to test takeLatest
    yield call(postsApi.createPost, {
      title,
      author: "Johny Tester"
    });

    yield call(getPostsSaga);
  } catch (err) {
    console.log(err.message);
  }
}

export default function* postSaga() {
  yield all([
    takeEvery(getPostsActions.request.type, getPostsSaga),
    takeLatest(createPostActions.request.type, createPostSaga)
  ]);
}
