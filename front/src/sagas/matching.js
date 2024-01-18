import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAILURE,
} from "../reducers/matching";

function showListAPI(data) {
  return axios.post("/matching", data);
}

function* showList(action) {
  try {
    const result = yield call(showListAPI, action.data);
    console.log("result : ", result);
    yield put({
      type: SHOW_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SHOW_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchShowList() {
  yield takeLatest(SHOW_LIST_REQUEST, showList);
}

export default function* matchingSaga() {
  yield all([fork(watchShowList)]);
}
