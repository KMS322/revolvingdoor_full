import { combineReducers } from "redux";
import user from "./user";
import userResume from "./userResume";
import userAdd from "./userAdd";
import userCareer from "./userCareer";
import business from "./business";
import businessApplication from "./businessApplication";
import businessRecruitment from "./businessRecruitment";

const rootReducer = combineReducers({
  user,
  userResume,
  userAdd,
  userCareer,
  business,
  businessApplication,
  businessRecruitment,
});

export default rootReducer;
