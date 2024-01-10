import produce from "../util/produce";

export const initialState = {
  recruitments: [],
  addRecruitmentLoading: false,
  addRecruitmentDone: false,
  addRecruitmentError: null,
  loadRecruitmentLoading: false,
  loadRecruitmentDone: false,
  loadRecruitmentError: null,
  changeRecruitmentLoading: false,
  changeRecruitmentDone: false,
  changeRecruitmentError: null,
};

export const ADD_RECRUITMENT_REQUEST = "ADD_RECRUITMENT_REQUEST";
export const ADD_RECRUITMENT_SUCCESS = "ADD_RECRUITMENT_SUCCESS";
export const ADD_RECRUITMENT_FAILURE = "ADD_RECRUITMENT_FAILURE";
export const REMOVE_RECRUITMENT_REQUEST = "REMOVE_RECRUITMENT_REQUEST";
export const REMOVE_RECRUITMENT_SUCCESS = "REMOVE_RECRUITMENT_SUCCESS";
export const REMOVE_RECRUITMENT_FAILURE = "REMOVE_RECRUITMENT_FAILURE";
export const LOAD_RECRUITMENT_REQUEST = "LOAD_RECRUITMENT_REQUEST";
export const LOAD_RECRUITMENT_SUCCESS = "LOAD_RECRUITMENT_SUCCESS";
export const LOAD_RECRUITMENT_FAILURE = "LOAD_RECRUITMENT_FAILURE";
export const CHANGE_RECRUITMENT_REQUEST = "CHANGE_RECRUITMENT_REQUEST";
export const CHANGE_RECRUITMENT_SUCCESS = "CHANGE_RECRUITMENT_SUCCESS";
export const CHANGE_RECRUITMENT_FAILURE = "CHANGE_RECRUITMENT_FAILURE";
export const uploadRecruitment = (data) => ({
  type: ADD_RECRUITMENT_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_RECRUITMENT_REQUEST:
        draft.addRecruitmentLoading = true;
        draft.addRecruitmentDone = false;
        draft.addRecruitmentError = null;
        break;
      case ADD_RECRUITMENT_SUCCESS:
        draft.addRecruitmentLoading = false;
        draft.addRecruitmentDone = true;
        draft.recruitments.unshift(action.data);
        break;
      case ADD_RECRUITMENT_FAILURE:
        draft.addRecruitmentLoading = false;
        draft.addRecruitmentError = action.error;
        break;
      case LOAD_RECRUITMENT_REQUEST:
        draft.loadRecruitmentLoading = true;
        draft.loadRecruitmentDone = false;
        draft.loadRecruitmentError = null;
        break;
      case LOAD_RECRUITMENT_SUCCESS:
        draft.loadRecruitmentLoading = false;
        draft.loadRecruitmentDone = true;
        draft.recruitments = draft.recruitments.concat(action.data);
        break;
      case LOAD_RECRUITMENT_FAILURE:
        draft.loadRecruitmentLoading = false;
        draft.loadRecruitmentError = action.error;
        break;
      case CHANGE_RECRUITMENT_REQUEST:
        draft.changeRecruitmentLoading = true;
        draft.changeRecruitmentDone = false;
        draft.changeRecruitmentError = null;
        break;
      case CHANGE_RECRUITMENT_SUCCESS:
        draft.changeRecruitmentLoading = false;
        draft.changeRecruitmentDone = true;
        draft.recruitments = action.data;
        break;
      case CHANGE_RECRUITMENT_FAILURE:
        draft.changeRecruitmentLoading = false;
        draft.changeRecruitmentError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
