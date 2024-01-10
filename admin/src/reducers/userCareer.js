import produce from "../util/produce";

export const initialState = {
  careers: [],
  addCareerLoading: false,
  addCareerDone: false,
  addCareerError: null,
  loadCareerLoading: false,
  loadCareerDone: false,
  loadCareerError: null,
  changeCareerLoading: false,
  changeCareerDone: false,
  changeCareerError: null,
};

export const ADD_CAREER_REQUEST = "ADD_CAREER_REQUEST";
export const ADD_CAREER_SUCCESS = "ADD_CAREER_SUCCESS";
export const ADD_CAREER_FAILURE = "ADD_CAREER_FAILURE";
export const LOAD_CAREER_REQUEST = "LOAD_CAREER_REQUEST";
export const LOAD_CAREER_SUCCESS = "LOAD_CAREER_SUCCESS";
export const LOAD_CAREER_FAILURE = "LOAD_CAREER_FAILURE";
export const CHANGE_CAREER_REQUEST = "CHANGE_CAREER_REQUEST";
export const CHANGE_CAREER_SUCCESS = "CHANGE_CAREER_SUCCESS";
export const CHANGE_CAREER_FAILURE = "CHANGE_CAREER_FAILURE";

export const uploadCareer = (data) => ({
  type: ADD_CAREER_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_CAREER_REQUEST:
        draft.addCareerLoading = true;
        draft.addCareerDone = false;
        draft.addCareerError = null;
        break;
      case ADD_CAREER_SUCCESS:
        draft.addCareerLoading = false;
        draft.addCareerDone = true;
        draft.careers.unshift(action.data);
        break;
      case ADD_CAREER_FAILURE:
        draft.addCareerLoading = false;
        draft.addCareerError = action.error;
        break;
      case LOAD_CAREER_REQUEST:
        draft.loadCareerLoading = true;
        draft.loadCareerDone = false;
        draft.loadCareerError = null;
        break;
      case LOAD_CAREER_SUCCESS:
        draft.loadCareerLoading = false;
        draft.loadCareerDone = true;
        draft.careers = draft.careers.concat(action.data);
        break;
      case LOAD_CAREER_FAILURE:
        draft.loadCareerLoading = false;
        draft.loadCareerError = action.error;
        break;
      case CHANGE_CAREER_REQUEST:
        draft.changeCareerLoading = true;
        draft.changeCareerDone = false;
        draft.changeCareerError = null;
        break;
      case CHANGE_CAREER_SUCCESS:
        draft.changeCareerLoading = false;
        draft.changeCareerDone = true;
        draft.careers = action.data;
        break;
      case CHANGE_CAREER_FAILURE:
        draft.changeCareerLoading = false;
        draft.changeCareerError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
