import { combineReducers } from "redux";
import user from "./user";
import userResume from "./userResume";
import userCareer from "./userCareer";
import business from "./business";
import businessApplication from "./businessApplication";
import businessRecruitment from "./businessRecruitment";
import userInfo from "./userInfo";

const rootReducer = combineReducers({
  user,
  userResume,
  userCareer,
  business,
  businessApplication,
  businessRecruitment,
  userInfo,
});

export default rootReducer;
