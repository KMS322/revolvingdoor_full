import axios from "axios";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_APPLICATION_REQUEST,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_FAILURE,
  REMOVE_APPLICATION_REQUEST,
  REMOVE_APPLICATION_SUCCESS,
  REMOVE_APPLICATION_FAILURE,
  LOAD_APPLICATION_REQUEST,
  LOAD_APPLICATION_SUCCESS,
  LOAD_APPLICATION_FAILURE,
  CHANGE_APPLICATION_REQUEST,
  CHANGE_APPLICATION_SUCCESS,
  CHANGE_APPLICATION_FAILURE,
  LOAD_ALL_APPLICATIONS_REQUEST,
  LOAD_ALL_APPLICATIONS_SUCCESS,
  LOAD_ALL_APPLICATIONS_FAILURE,
} from "../reducers/businessApplication";
import {
  ADD_APPLICATION_TO_ME,
  REMOVE_APPLICATION_OF_ME,
} from "../reducers/user";

function loadApplicationAPI(data) {
  return axios.get("/applications");
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
      data: err.response.data,
    });
  }
}

function addApplicationAPI(data) {
  return axios.post("/application", data);
}

function* addApplication(action) {
  try {
    const result = yield call(addApplicationAPI, action.data);
    yield put({
      type: ADD_APPLICATION_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_APPLICATION_TO_ME,
      data: result.data.BusinessId,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_APPLICATION_FAILURE,
      data: err.response.data,
    });
  }
}

function changeApplicationAPI(data) {
  return axios.post("/application/change", data);
}

function* changeApplication(action) {
  try {
    const result = yield call(changeApplicationAPI, action.data);
    yield put({
      type: CHANGE_APPLICATION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_APPLICATION_FAILURE,
      data: err.response.data,
    });
  }
}

function removeApplicationAPI(data) {
  return axios.delete("/application/remove", { data: { id: data.id } });
}

function* removeApplication(action) {
  try {
    const result = yield call(removeApplicationAPI, action.data);
    yield put({
      type: REMOVE_APPLICATION_SUCCESS,
      data: result.data,
    });
    yield put({
      type: REMOVE_APPLICATION_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_APPLICATION_FAILURE,
      data: err.response.data,
    });
  }
}

function loadAllApplicationsAPI() {
  return axios.post("/applications/all");
}

function* loadAllApplications() {
  try {
    const result = yield call(loadAllApplicationsAPI);
    yield put({
      type: LOAD_ALL_APPLICATIONS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ALL_APPLICATIONS_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadApplication() {
  yield takeLatest(LOAD_APPLICATION_REQUEST, loadApplication);
}

function* watchAddApplication() {
  yield takeLatest(ADD_APPLICATION_REQUEST, addApplication);
}

function* watchRemoveApplication() {
  yield takeLatest(REMOVE_APPLICATION_REQUEST, removeApplication);
}

function* watchChangeApplication() {
  yield takeLatest(CHANGE_APPLICATION_REQUEST, changeApplication);
}

function* watchLoadAllApplications() {
  yield takeLatest(LOAD_ALL_APPLICATIONS_REQUEST, loadAllApplications);
}

export default function* applicationSaga() {
  yield all([
    fork(watchLoadApplication),
    fork(watchAddApplication),
    fork(watchRemoveApplication),
    fork(watchChangeApplication),
    fork(watchLoadAllApplications),
  ]);
}
