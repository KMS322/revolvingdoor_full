import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_ALLUSER_REQUEST,
  LOAD_ALLUSER_SUCCESS,
  LOAD_ALLUSER_FAILURE,
  LOAD_INDIVIDUAL_REQUEST,
  LOAD_INDIVIDUAL_SUCCESS,
  LOAD_INDIVIDUAL_FAILURE,
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

function loadIndividualAPI() {
  return axios.post("/admin/user/individual");
}

function* loadIndividual() {
  try {
    const result = yield call(loadIndividualAPI);
    yield put({
      type: LOAD_INDIVIDUAL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_INDIVIDUAL_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_ALLUSER_REQUEST, loadAllUser);
}

function* watchLoadIndividual() {
  yield takeLatest(LOAD_INDIVIDUAL_REQUEST, loadIndividual);
}
export default function* adminUserSaga() {
  yield all([fork(watchLoadUser), fork(watchLoadIndividual)]);
}
