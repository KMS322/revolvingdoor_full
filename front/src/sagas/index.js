import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSage from "./post";
import userSaga from "./user";
import { API_URL } from "../constants";

axios.defaults.baseURL = API_URL;

export default function* rootSaga() {
  yield all([fork(postSage), fork(userSaga)]);
}
