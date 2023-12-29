import axios from "axios";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_CAREER_REQUEST,
  ADD_CAREER_SUCCESS,
  ADD_CAREER_FAILURE,
  LOAD_CAREER_REQUEST,
  LOAD_CAREER_SUCCESS,
  LOAD_CAREER_FAILURE,
  CHANGE_CAREER_REQUEST,
  CHANGE_CAREER_SUCCESS,
  CHANGE_CAREER_FAILURE,
} from "../reducers/userCareer";
import { ADD_CAREER_TO_ME } from "../reducers/user";

function loadCareerAPI() {
  return axios.get("/careers");
}

function* loadCareer() {
  try {
    const result = yield call(loadCareerAPI);
    yield put({
      type: LOAD_CAREER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_CAREER_FAILURE,
      data: err.response.data,
    });
  }
}

function addCareerAPI(data) {
  return axios.post("/career", data);
}

function* addCareer(action) {
  try {
    const result = yield call(addCareerAPI, action.data);
    console.log("addCareer : ", result);
    yield put({
      type: ADD_CAREER_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_CAREER_TO_ME,
      data: result.data.UserId,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_CAREER_FAILURE,
      data: err.response.data,
    });
  }
}

function changeCareerAPI(data) {
  return axios.post("/career/change", data);
}

function* changeCareer(action) {
  try {
    const result = yield call(changeCareerAPI, action.data);
    yield put({
      type: CHANGE_CAREER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_CAREER_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadCareer() {
  yield takeLatest(LOAD_CAREER_REQUEST, loadCareer);
}

function* watchAddCareer() {
  yield takeLatest(ADD_CAREER_REQUEST, addCareer);
}

function* watchChangeCareer() {
  yield takeLatest(CHANGE_CAREER_REQUEST, changeCareer);
}
export default function* careerSaga() {
  yield all([
    fork(watchLoadCareer),
    fork(watchAddCareer),
    fork(watchChangeCareer),
  ]);
}
