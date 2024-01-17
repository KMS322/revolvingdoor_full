import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_APPLICATION_REQUEST,
  LOAD_APPLICATION_SUCCESS,
  LOAD_APPLICATION_FAILURE,
  LOAD_RECRUITMENT_REQUEST,
  LOAD_RECRUITMENT_SUCCESS,
  LOAD_RECRUITMENT_FAILURE,
} from "../reducers/adminBusiness";

function loadApplicationAPI(data) {
  return axios.post("/admin/business/application", data);
}

function* loadApplication(action) {
  try {
    const result = yield call(loadApplicationAPI, action.data);
    yield put({
      type: LOAD_APPLICATION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_APPLICATION_FAILURE,
      error: err.response.data,
    });
  }
}

function loadRecruitmentAPI(data) {
  return axios.post("/admin/business/recruitment", data);
}

function* loadRecruitment(action) {
  try {
    const result = yield call(loadRecruitmentAPI, action.data);
    yield put({
      type: LOAD_RECRUITMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_RECRUITMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadApplication() {
  yield takeLatest(LOAD_APPLICATION_REQUEST, loadApplication);
}

function* watchLoadRecruitment() {
  yield takeLatest(LOAD_RECRUITMENT_REQUEST, loadRecruitment);
}
export default function* adminBusinessSaga() {
  yield all([fork(watchLoadApplication), fork(watchLoadRecruitment)]);
}
