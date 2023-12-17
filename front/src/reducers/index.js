import { combineReducers } from "redux";
import user from "./user";
import userResume from "./userResume";
import userAdd from "./userAdd";
import post from "./post";
import userCareer from "./userCareer";
// (이전상태, 액션) => 다음상태
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  // index: (state = {}, action) => {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // },
  user,
  userResume,
  userAdd,
  userCareer,
  post,
});

export default rootReducer;
