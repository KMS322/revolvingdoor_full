import produce from "../util/produce";

export const initialState = {
  loadUserLoading: false, // 유저 정보
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const BUSINESS_LOAD_MY_INFO_REQUEST = "BUSINESS_LOAD_MY_INFO_REQUEST";
export const BUSINESS_LOAD_MY_INFO_SUCCESS = "BUSINESS_LOAD_MY_INFO_SUCCESS";
export const BUSINESS_LOAD_MY_INFO_FAILURE = "BUSINESS_LOAD_MY_INFO_FAUILURE";

export const BUSINESS_LOG_IN_REQUEST = "BUSINESS_LOG_IN_REQUEST";
export const BUSINESS_LOG_IN_SUCCESS = "BUSINESS_LOG_IN_SUCCESS";
export const BUSINESS_LOG_IN_FAILURE = "BUSINESS_LOG_IN_FAUILURE";

export const BUSINESS_LOG_OUT_REQUEST = "BUSINESS_LOG_OUT_REQUEST";
export const BUSINESS_LOG_OUT_SUCCESS = "BUSINESS_LOG_OUT_SUCCESS";
export const BUSINESS_LOG_OUT_FAILURE = "BUSINESS_LOG_OUT_FAUILURE";

export const BUSINESS_SIGN_UP_REQUEST = "BUSINESS_SIGN_UP_REQUEST";
export const BUSINESS_SIGN_UP_SUCCESS = "BUSINESS_SIGN_UP_SUCCESS";
export const BUSINESS_SIGN_UP_FAILURE = "BUSINESS_SIGN_UP_FAUILURE";

export const BUSINESS_ADD_RESUME_TO_ME = "BUSINESS_ADD_RESUME_TO_ME";
export const BUSINESS_ADD_CAREER_TO_ME = "BUSINESS_ADD_CAREER_TO_ME";
export const BUSINESS_REMOVE_RESUME_OF_ME = "BUSINESS_REMOVE_RESUME_OF_ME";

export const loginRequestActionBusiness = (data) => {
  return {
    type: BUSINESS_LOG_IN_REQUEST,
    data,
  };
};
export const signupRequestActionBusiness = (data) => {
  return {
    type: BUSINESS_SIGN_UP_REQUEST,
    data,
  };
};
export const logoutRequestActionBusiness = () => {
  return {
    type: BUSINESS_LOG_OUT_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case BUSINESS_LOAD_MY_INFO_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;
      case BUSINESS_LOAD_MY_INFO_SUCCESS:
        draft.loadUserLoading = false;
        draft.me = action.data;
        draft.loadUserDone = true;
        break;
      case BUSINESS_LOAD_MY_INFO_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      case BUSINESS_LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case BUSINESS_LOG_IN_SUCCESS:
        console.log("reducer login success");
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;
      case BUSINESS_LOG_IN_FAILURE:
        console.log("reducer login fail");
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case BUSINESS_LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case BUSINESS_LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case BUSINESS_LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case BUSINESS_SIGN_UP_REQUEST:
        console.log("reduce request");
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case BUSINESS_SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case BUSINESS_SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case BUSINESS_ADD_RESUME_TO_ME:
        draft.me.resumes.unshift({ id: action.data });
        break;
      case BUSINESS_ADD_CAREER_TO_ME:
        draft.me.careers.unshift({ id: action.data });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };
      case BUSINESS_REMOVE_RESUME_OF_ME:
        draft.me.resumes = draft.me.Posts.filter((v) => v.id !== action.data);
        break;

      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };
      default:
        return state;
    }
  });
};

export default reducer;
