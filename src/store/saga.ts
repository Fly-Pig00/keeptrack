import { all, fork } from "redux-saga/effects";


import { watchIncrementAsync } from "./counter/counterSaga";

export default function* rootSaga() {
  yield all([fork(watchIncrementAsync)]);
}