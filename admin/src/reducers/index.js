import { combineReducers } from "redux";
import adminUser from "./adminUser";
import adminIndividual from "./adminIndividual";

const rootReducer = combineReducers({
  adminUser,
  adminIndividual,
});

export default rootReducer;
