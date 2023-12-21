import axios from "axios";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_RECRUITMENT_REQUEST,
  ADD_RECRUITMENT_SUCCESS,
  ADD_RECRUITMENT_FAILURE,
  REMOVE_RECRUITMENT_REQUEST,
  REMOVE_RECRUITMENT_SUCCESS,
  REMOVE_RECRUITMENT_FAILURE,
  LOAD_RECRUITMENT_REQUEST,
  LOAD_RECRUITMENT_SUCCESS,
  LOAD_RECRUITMENT_FAILURE,
} from "../reducers/businessRecruitment";
import {
  ADD_RECRUITMENT_TO_ME,
  REMOVE_RECRUITMENT_OF_ME,
} from "../reducers/user";

function loadRecruitmentAPI(data) {
  return axios.get("/recruitments");
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
      data: err.response.data,
    });
  }
}

function addRecruitmentAPI(data) {
  return axios.post("/recruitment", data);
}

function* addRecruitment(action) {
  try {
    const result = yield call(addRecruitmentAPI, action.data);
    console.log("addRecruitment : ", result);
    yield put({
      type: ADD_RECRUITMENT_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_RECRUITMENT_TO_ME,
      data: result.data.BusinessId,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_RECRUITMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function removeRecruitmentAPI(data) {
  return axios.delete(`/recruitment/${data}`);
}

function* removeRecruitment(action) {
  try {
    // const result = yield call(removeApplicationAPI, action.data);
    yield put({
      type: REMOVE_RECRUITMENT_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_RECRUITMENT_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_RECRUITMENT_FAILURE,
      data: err.response.data,
    });
  }
}
function* watchLoadRecruitment() {
  yield takeLatest(LOAD_RECRUITMENT_REQUEST, loadRecruitment);
}

function* watchAddRecruitment() {
  yield takeLatest(ADD_RECRUITMENT_REQUEST, addRecruitment);
}

function* watchRemoveRecruitment() {
  yield takeLatest(REMOVE_RECRUITMENT_REQUEST, removeRecruitment);
}

export default function* recruitmentSaga() {
  yield all([
    fork(watchLoadRecruitment),
    fork(watchAddRecruitment),
    fork(watchRemoveRecruitment),
  ]);
}
