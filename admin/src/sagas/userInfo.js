import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_INDIVIDUAL_INFO_REQUEST,
  LOAD_INDIVIDUAL_INFO_SUCCESS,
  LOAD_INDIVIDUAL_INFO_FAILURE,
  LOAD_BUSINESS_INFO_REQUEST,
  LOAD_BUSINESS_INFO_SUCCESS,
  LOAD_BUSINESS_INFO_FAILURE,
  CHANGE_INDIVIDUAL_INFO_REQUEST,
  CHANGE_INDIVIDUAL_INFO_SUCCESS,
  CHANGE_INDIVIDUAL_INFO_FAILURE,
  CHANGE_BUSINESS_INFO_REQUEST,
  CHANGE_BUSINESS_INFO_SUCCESS,
  CHANGE_BUSINESS_INFO_FAILURE,
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

function changeIndividualInfoAPI(data) {
  return axios.post("/userInfo/changeIndividual", data);
}

function* changeIndividualInfo(action) {
  try {
    const result = yield call(changeIndividualInfoAPI, action.data);
    yield put({
      type: CHANGE_INDIVIDUAL_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_INDIVIDUAL_INFO_FAILURE,
      data: err.response.data,
    });
  }
}

function changeBusinessInfoAPI(data) {
  return axios.post("/userInfo/changeBusiness", data);
}

function* changeBusinessInfo(action) {
  try {
    const result = yield call(changeBusinessInfoAPI, action.data);
    yield put({
      type: CHANGE_BUSINESS_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_BUSINESS_INFO_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadIndividualInfo() {
  yield takeLatest(LOAD_INDIVIDUAL_INFO_REQUEST, loadIndividualInfo);
}

function* watchLoadBusinessInfo() {
  yield takeLatest(LOAD_BUSINESS_INFO_REQUEST, loadBusinessInfo);
}

function* watchChangeIndividualInfo() {
  yield takeLatest(CHANGE_INDIVIDUAL_INFO_REQUEST, changeIndividualInfo);
}

function* watchChangeBusinessInfo() {
  yield takeLatest(CHANGE_BUSINESS_INFO_REQUEST, changeBusinessInfo);
}

export default function* userInfoSaga() {
  yield all([
    fork(watchLoadIndividualInfo),
    fork(watchLoadBusinessInfo),
    fork(watchChangeIndividualInfo),
    fork(watchChangeBusinessInfo),
  ]);
}
