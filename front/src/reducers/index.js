import { combineReducers } from "redux";
import user from "./user";
import userResume from "./userResume";
import userAdd from "./userAdd";
import post from "./post";
import userCareer from "./userCareer";
import business from "./business";
import businessApplication from "./businessApplication";
import businessRecruitment from "./businessRecruitment";

const rootReducer = combineReducers({
  user,
  userResume,
  userAdd,
  userCareer,
  post,
  business,
  businessApplication,
  businessRecruitment,
});

export default rootReducer;
