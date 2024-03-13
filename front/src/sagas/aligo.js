import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  SEND_SMS_REQUEST,
  SEND_SMS_SUCCESS,
  SEND_SMS_FAILURE,
} from "../reducers/aligo";

function sendSmsAPI(data) {
  return axios.post("/aligo/sendSms", data);
}

function* sendSms(action) {
  try {
    const result = yield call(sendSmsAPI, action.data);
    yield put({
      type: SEND_SMS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEND_SMS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSendSms() {
  yield takeLatest(SEND_SMS_REQUEST, sendSms);
}

export default function* aligoSaga() {
  yield all([fork(watchSendSms)]);
}
