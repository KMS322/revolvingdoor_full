import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAILURE,
  CONNECTED_COMPANIES_REQUEST,
  CONNECTED_COMPANIES_SUCCESS,
  CONNECTED_COMPANIES_FAILURE,
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

function* watchShowList() {
  yield takeLatest(SHOW_LIST_REQUEST, showList);
}

function* watchConnectedCompanies() {
  yield takeLatest(CONNECTED_COMPANIES_REQUEST, connectedCompanies);
}

export default function* matchingSaga() {
  yield all([fork(watchShowList), fork(watchConnectedCompanies)]);
}
