import { all, fork } from "redux-saga/effects";
import axios from "axios";
// import postSage from "./post";
import userSaga from "./user";
import resumeSaga from "./userResume";
import { API_URL } from "../constants";

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(resumeSaga)]);
}
