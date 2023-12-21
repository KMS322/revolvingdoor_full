import produce from "../util/produce";

export const initialState = {
  resumes: [],
  addResumeLoading: false,
  addResumeDone: false,
  addResumeError: null,
  loadResumeLoading: false,
  loadResumeDone: false,
  loadResumeError: null,
};

export const ADD_RESUME_REQUEST = "ADD_RESUME_REQUEST";
export const ADD_RESUME_SUCCESS = "ADD_RESUME_SUCCESS";
export const ADD_RESUME_FAILURE = "ADD_RESUME_FAILURE";
export const REMOVE_RESUME_REQUEST = "REMOVE_RESUME_REQUEST";
export const REMOVE_RESUME_SUCCESS = "REMOVE_RESUME_SUCCESS";
export const REMOVE_RESUME_FAILURE = "REMOVE_RESUME_FAILURE";
export const LOAD_RESUME_REQUEST = "LOAD_RESUME_REQUEST";
export const LOAD_RESUME_SUCCESS = "LOAD_RESUME_SUCCESS";
export const LOAD_RESUME_FAILURE = "LOAD_RESUME_FAILURE";
export const uploadResume = (data) => ({
  type: ADD_RESUME_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_RESUME_REQUEST:
        draft.addResumeLoading = true;
        draft.addResumeDone = false;
        draft.addResumeError = null;
        break;
      case ADD_RESUME_SUCCESS:
        draft.addResumeLoading = false;
        draft.addResumeDone = true;
        draft.resumes.unshift(action.data);
        break;
      case ADD_RESUME_FAILURE:
        draft.addResumeLoading = false;
        draft.addResumeError = action.error;
        break;
      case LOAD_RESUME_REQUEST:
        draft.loadResumeLoading = true;
        draft.loadResumeDone = false;
        draft.loadResumeError = null;
        break;
      case LOAD_RESUME_SUCCESS:
        draft.loadResumeLoading = false;
        draft.loadResumeDone = true;
        console.log("reduces 안에서 resumes : ", state.resumes);
        draft.resumes = draft.resumes.concat(action.data);
        console.log("reduces 안에서 concat 후 resumes : ", state.resumes);
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
