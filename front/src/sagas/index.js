import { all, fork } from "redux-saga/effects";
import axios from "axios";
// import postSage from "./post";
import userSaga from "./user";
import resumeSaga from "./userResume";
import careerSaga from "./userCareer";
import businessSaga from "./business";
import applicationSaga from "./businessApplication";
import recruitmentSaga from "./businessRecruitment";
import userInfoSaga from "./userInfo";
import matchingSaga from "./matching";
import aligoSaga from "./aligo";
import { API_URL } from "../constants";

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(resumeSaga),
    fork(careerSaga),
    fork(businessSaga),
    fork(applicationSaga),
    fork(recruitmentSaga),
    fork(userInfoSaga),
    fork(matchingSaga),
    fork(aligoSaga),
  ]);
}
