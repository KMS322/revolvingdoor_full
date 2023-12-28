import axios from "axios";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_RESUME_REQUEST,
  ADD_RESUME_SUCCESS,
  ADD_RESUME_FAILURE,
  REMOVE_RESUME_REQUEST,
  REMOVE_RESUME_SUCCESS,
  REMOVE_RESUME_FAILURE,
  LOAD_RESUME_REQUEST,
  LOAD_RESUME_SUCCESS,
  LOAD_RESUME_FAILURE,
  CHANGE_RESUME_REQUEST,
  CHANGE_RESUME_SUCCESS,
  CHANGE_RESUME_FAILURE,
} from "../reducers/userResume";
import { ADD_RESUME_TO_ME, REMOVE_RESUME_OF_ME } from "../reducers/user";

function loadResumeAPI() {
  return axios.get("/resumes");
}

function* loadResume() {
  try {
    const result = yield call(loadResumeAPI);
    yield put({
      type: LOAD_RESUME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_RESUME_FAILURE,
      data: err.response.data,
    });
  }
}

function addResumeAPI(data) {
  return axios.post("/resume", data);
}

function* addResume(action) {
  try {
    const result = yield call(addResumeAPI, action.data);
    console.log("addresume : ", result);
    yield put({
      type: ADD_RESUME_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_RESUME_TO_ME,
      data: result.data.UserId,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_RESUME_FAILURE,
      data: err.response.data,
    });
  }
}

function changeResumeAPI(data) {
  return axios.post("/resume/change", data);
}

function* changeResume(action) {
  try {
    const result = yield call(changeResumeAPI, action.data);
    yield put({
      type: CHANGE_RESUME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_RESUME_FAILURE,
      data: err.response.data,
    });
  }
}

function removeResumeAPI(data) {
  return axios.delete("/resume/remove", { data: { id: data.id } });
}

function* removeResume(action) {
  try {
    const result = yield call(removeResumeAPI, action.data);
    yield put({
      type: REMOVE_RESUME_SUCCESS,
      data: result.data,
    });
    yield put({
      type: REMOVE_RESUME_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_RESUME_FAILURE,
      data: err.response.data,
    });
  }
}
function* watchLoadResume() {
  yield takeLatest(LOAD_RESUME_REQUEST, loadResume);
}

function* watchAddResume() {
  yield takeLatest(ADD_RESUME_REQUEST, addResume);
}

function* watchRemoveResume() {
  yield takeLatest(REMOVE_RESUME_REQUEST, removeResume);
}

function* watchChangeResume() {
  yield takeLatest(CHANGE_RESUME_REQUEST, changeResume);
}
export default function* resumeSaga() {
  yield all([
    fork(watchLoadResume),
    fork(watchAddResume),
    fork(watchRemoveResume),
    fork(watchChangeResume),
  ]);
}
