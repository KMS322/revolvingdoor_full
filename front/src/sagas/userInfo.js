import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_INDIVIDUAL_INFO_REQUEST,
  LOAD_INDIVIDUAL_INFO_SUCCESS,
  LOAD_INDIVIDUAL_INFO_FAILURE,
  LOAD_BUSINESS_INFO_REQUEST,
  LOAD_BUSINESS_INFO_SUCCESS,
  LOAD_BUSINESS_INFO_FAILURE,
} from "../reducers/userInfo";

function loadIndividualInfoAPI() {
  return axios.get("/userInfo/individual");
}

function* loadIndividualInfo() {
  try {
    const result = yield call(loadIndividualInfoAPI);
    yield put({
      type: LOAD_INDIVIDUAL_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_INDIVIDUAL_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function loadBusinessInfoAPI() {
  return axios.get("/userInfo/business");
}

function* loadBusinessInfo() {
  try {
    const result = yield call(loadBusinessInfoAPI);
    yield put({
      type: LOAD_BUSINESS_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_BUSINESS_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadIndividualInfo() {
  yield takeLatest(LOAD_INDIVIDUAL_INFO_REQUEST, loadIndividualInfo);
}

function* watchLoadBusinessInfo() {
  yield takeLatest(LOAD_BUSINESS_INFO_REQUEST, loadBusinessInfo);
}

export default function* userInfoSaga() {
  yield all([fork(watchLoadIndividualInfo), fork(watchLoadBusinessInfo)]);
}
