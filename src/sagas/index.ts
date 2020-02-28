import postSaga from "./post.saga";
import messageSaga from "./message.saga";
import { fork, all } from "redux-saga/effects";

function* rootSaga() {
  yield all([fork(postSaga), fork(messageSaga)]);
}

export default rootSaga;
