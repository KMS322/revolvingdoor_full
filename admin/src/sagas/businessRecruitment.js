import axios from "axios";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_RECRUITMENT_REQUEST,
  ADD_RECRUITMENT_SUCCESS,
  ADD_RECRUITMENT_FAILURE,
  LOAD_RECRUITMENT_REQUEST,
  LOAD_RECRUITMENT_SUCCESS,
  LOAD_RECRUITMENT_FAILURE,
  CHANGE_RECRUITMENT_REQUEST,
  CHANGE_RECRUITMENT_SUCCESS,
  CHANGE_RECRUITMENT_FAILURE,
} from "../reducers/businessRecruitment";
import { ADD_RECRUITMENT_TO_ME } from "../reducers/user";

function loadRecruitmentAPI() {
  return axios.get("/recruitments");
}

function* loadRecruitment() {
  try {
    const result = yield call(loadRecruitmentAPI);
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

function changeRecruitmentAPI(data) {
  return axios.post("/recruitment/change", data);
}

function* changeRecruitment(action) {
  try {
    const result = yield call(changeRecruitmentAPI, action.data);
    yield put({
      type: CHANGE_RECRUITMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_RECRUITMENT_FAILURE,
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

function* watchChangeRecruitment() {
  yield takeLatest(CHANGE_RECRUITMENT_REQUEST, changeRecruitment);
}
export default function* recruitmentSaga() {
  yield all([
    fork(watchLoadRecruitment),
    fork(watchAddRecruitment),
    fork(watchChangeRecruitment),
  ]);
}
