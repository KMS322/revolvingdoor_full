import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_RESUME_REQUEST,
  LOAD_RESUME_SUCCESS,
  LOAD_RESUME_FAILURE,
} from "../reducers/adminIndividual";

function loadResumeAPI(data) {
  return axios.post("/admin/individual/resume", data);
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
      error: err.response.data,
    });
  }
}

function* watchLoadResume() {
  yield takeLatest(LOAD_RESUME_REQUEST, loadResume);
}

export default function* adminIndividualSaga() {
  yield all([fork(watchLoadResume)]);
}
