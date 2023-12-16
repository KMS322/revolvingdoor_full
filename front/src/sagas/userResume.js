import axios from "axios";
import shortId from "shortid";
import { all, fork, put, takeLatest, throttle, call } from "redux-saga/effects";

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
} from "../reducers/userResume";
import { ADD_RESUME_TO_ME, REMOVE_RESUME_OF_ME } from "../reducers/user";

function loadResumeAPI(data) {
  return axios.get("/resumes");
}

function* loadResume(action) {
  try {
    const result = yield call(loadResumeAPI, action.data);
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
    const id = shortId.generate();
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

function removeResumeAPI(data) {
  return axios.delete(`/resume/${data}`);
}

function* removeResume(action) {
  try {
    // const result = yield call(removeResumeAPI, action.data);
    yield put({
      type: REMOVE_RESUME_SUCCESS,
      data: action.data,
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
function* watchLoadRESUME() {
  yield takeLatest(LOAD_RESUME_REQUEST, loadResume);
}

function* watchAddRESUME() {
  yield takeLatest(ADD_RESUME_REQUEST, addResume);
}

function* watchRemoveRESUME() {
  yield takeLatest(REMOVE_RESUME_REQUEST, removeResume);
}

export default function* resumeSaga() {
  yield all([
    fork(watchAddRESUME),
    fork(watchRemoveRESUME),
    fork(watchLoadRESUME),
  ]);
}
