import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_ALLUSER_REQUEST,
  LOAD_ALLUSER_SUCCESS,
  LOAD_ALLUSER_FAILURE,
} from "../reducers/adminUser";

function loadAllUserAPI() {
  return axios.post("/admin/user/allUser");
}

function* loadAllUser() {
  try {
    const result = yield call(loadAllUserAPI);
    yield put({
      type: LOAD_ALLUSER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ALLUSER_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_ALLUSER_REQUEST, loadAllUser);
}

export default function* adminUserSaga() {
  yield all([fork(watchLoadUser)]);
}
