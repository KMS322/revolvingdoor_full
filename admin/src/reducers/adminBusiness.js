import produce from "../util/produce";

export const initialState = {
  loadApplicationLoading: false,
  loadApplicationDone: false,
  loadApplicationError: null,
  loadRecruitmentLoading: false,
  loadRecruitmentDone: false,
  loadRecruitmentError: null,
  application: null,
  recruitment: null,
};

export const LOAD_APPLICATION_REQUEST = "LOAD_APPLICATION_REQUEST";
export const LOAD_APPLICATION_SUCCESS = "LOAD_APPLICATION_SUCCESS";
export const LOAD_APPLICATION_FAILURE = "LOAD_APPLICATION_FAILURE";

export const LOAD_RECRUITMENT_REQUEST = "LOAD_RECRUITMENT_REQUEST";
export const LOAD_RECRUITMENT_SUCCESS = "LOAD_RECRUITMENT_SUCCESS";
export const LOAD_RECRUITMENT_FAILURE = "LOAD_RECRUITMENT_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_APPLICATION_REQUEST:
        draft.loadApplicationLoading = true;
        draft.loadApplicationError = null;
        draft.loadApplicationDone = false;
        break;
      case LOAD_APPLICATION_SUCCESS:
        draft.loadApplicationLoading = false;
        draft.application = action.data;
        draft.loadApplicationDone = true;
        break;
      case LOAD_APPLICATION_FAILURE:
        draft.loadResumeLoading = false;
        draft.loadResumeError = action.error;
        break;
      case LOAD_RECRUITMENT_REQUEST:
        draft.loadRecruitmentLoading = true;
        draft.loadRecruitmentError = null;
        draft.loadRecruitmentDone = false;
        break;
      case LOAD_RECRUITMENT_SUCCESS:
        draft.loadRecruitmentLoading = false;
        draft.recruitment = action.data;
        draft.loadRecruitmentDone = true;
        break;
      case LOAD_RECRUITMENT_FAILURE:
        draft.loadRecruitmentLoading = false;
        draft.loadRecruitmentError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
