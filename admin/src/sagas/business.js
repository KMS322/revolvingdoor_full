import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  BUSINESS_LOAD_MY_INFO_REQUEST,
  BUSINESS_LOAD_MY_INFO_SUCCESS,
  BUSINESS_LOAD_MY_INFO_FAILURE,
  BUSINESS_LOG_IN_REQUEST,
  BUSINESS_LOG_IN_SUCCESS,
  BUSINESS_LOG_IN_FAILURE,
  BUSINESS_LOG_OUT_REQUEST,
  BUSINESS_LOG_OUT_SUCCESS,
  BUSINESS_LOG_OUT_FAILURE,
  BUSINESS_SIGN_UP_REQUEST,
  BUSINESS_SIGN_UP_SUCCESS,
  BUSINESS_SIGN_UP_FAILURE,
} from "../reducers/business";

function loadUserAPI(data) {
  return axios.get("/business");
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    console.log("result : ", result);
    yield put({
      type: BUSINESS_LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: BUSINESS_LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post("/business/login", data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: BUSINESS_LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: BUSINESS_LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/business/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: BUSINESS_LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: BUSINESS_LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post("/business/signup", data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: BUSINESS_SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: BUSINESS_SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(BUSINESS_LOAD_MY_INFO_REQUEST, loadUser);
}

function* watchLogIn() {
  yield takeLatest(BUSINESS_LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(BUSINESS_LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(BUSINESS_SIGN_UP_REQUEST, signUp);
}

export default function* BusinessSaga() {
  yield all([
    fork(watchLoadUser),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
