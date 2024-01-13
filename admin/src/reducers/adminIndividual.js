import produce from "../util/produce";

export const initialState = {
  loadResumeLoading: false,
  loadResumeDone: false,
  loadResumeError: null,
  resume: null,
};

export const LOAD_RESUME_REQUEST = "LOAD_RESUME_REQUEST";
export const LOAD_RESUME_SUCCESS = "LOAD_RESUME_SUCCESS";
export const LOAD_RESUME_FAILURE = "LOAD_RESUME_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RESUME_REQUEST:
        draft.loadResumeLoading = true;
        draft.loadResumeError = null;
        draft.loadResumeDone = false;
        break;
      case LOAD_RESUME_SUCCESS:
        draft.loadResumeLoading = false;
        draft.resume = action.data;
        draft.loadResumeDone = true;
        break;
      case LOAD_RESUME_FAILURE:
        draft.loadResumeLoading = false;
        draft.loadResumeError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
