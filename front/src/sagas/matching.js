import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAILURE,
  CONNECTED_COMPANIES_REQUEST,
  CONNECTED_COMPANIES_SUCCESS,
  CONNECTED_COMPANIES_FAILURE,
  SET_CONCURRENCE_REQUEST,
  SET_CONCURRENCE_SUCCESS,
  SET_CONCURRENCE_FAILURE,
  CHANGE_STEP_REQUEST,
  CHANGE_STEP_SUCCESS,
  CHANGE_STEP_FAILURE,
  LOAD_CONCURRENCE_REQUEST,
  LOAD_CONCURRENCE_SUCCESS,
  LOAD_CONCURRENCE_FAILURE,
  CLICK_PAY_REQUEST,
  CLICK_PAY_SUCCESS,
  CLICK_PAY_FAILURE,
} from "../reducers/matching";

function showListAPI(data) {
  return axios.post("/matching", data);
}

function* showList(action) {
  try {
    const result = yield call(showListAPI, action.data);
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

function connectedCompaniesAPI() {
  return axios.post("/matching/connect");
}

function* connectedCompanies() {
  try {
    const result = yield call(connectedCompaniesAPI);
    yield put({
      type: CONNECTED_COMPANIES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CONNECTED_COMPANIES_FAILURE,
      error: err.response.data,
    });
  }
}

function setConcurrenceAPI(data) {
  return axios.post("/matching/concurrence", data);
}

function* setConcurrence(action) {
  try {
    yield call(setConcurrenceAPI, action.data);
    yield put({
      type: SET_CONCURRENCE_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SET_CONCURRENCE_FAILURE,
      error: err.response.data,
    });
  }
}

function changeStepAPI(data) {
  return axios.post("/matching/changeStep", data);
}

function* changeStep(action) {
  try {
    const result = yield call(changeStepAPI, action.data);
    yield put({
      type: CHANGE_STEP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_STEP_FAILURE,
      error: err.response.data,
    });
  }
}

function loadConcurrenceAPI(data) {
  return axios.post("/matching/loadConcurrence", data);
}

function* loadConcurrence(action) {
  try {
    const result = yield call(loadConcurrenceAPI, action.data);
    yield put({
      type: LOAD_CONCURRENCE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_CONCURRENCE_FAILURE,
      error: err.response.data,
    });
  }
}

function clickPayAPI(data) {
  return axios.post("/matching/clickPay", data);
}

function* clickPay(action) {
  try {
    const result = yield call(clickPayAPI, action.data);
    yield put({
      type: CLICK_PAY_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CLICK_PAY_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchShowList() {
  yield takeLatest(SHOW_LIST_REQUEST, showList);
}

function* watchConnectedCompanies() {
  yield takeLatest(CONNECTED_COMPANIES_REQUEST, connectedCompanies);
}

function* watchSetConcurrence() {
  yield takeLatest(SET_CONCURRENCE_REQUEST, setConcurrence);
}

function* watchChangeStep() {
  yield takeLatest(CHANGE_STEP_REQUEST, changeStep);
}

function* watchLoadConcurrence() {
  yield takeLatest(LOAD_CONCURRENCE_REQUEST, loadConcurrence);
}

function* watchClickPay() {
  yield takeLatest(CLICK_PAY_REQUEST, clickPay);
}
export default function* matchingSaga() {
  yield all([
    fork(watchShowList),
    fork(watchConnectedCompanies),
    fork(watchSetConcurrence),
    fork(watchChangeStep),
    fork(watchLoadConcurrence),
    fork(watchClickPay),
  ]);
}
