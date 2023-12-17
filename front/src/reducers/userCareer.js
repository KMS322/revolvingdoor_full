import produce from "../util/produce";

export const initialState = {
  careers: [],
  addCareerLoading: false,
  addCareerDone: false,
  addCareerError: null,
  loadCareerLoading: false,
  loadCareerDone: false,
  loadCareerError: null,
};

export const ADD_CAREER_REQUEST = "ADD_CAREER_REQUEST";
export const ADD_CAREER_SUCCESS = "ADD_CAREER_SUCCESS";
export const ADD_CAREER_FAILURE = "ADD_CAREER_FAILURE";
export const LOAD_CAREER_REQUEST = "LOAD_CAREER_REQUEST";
export const LOAD_CAREER_SUCCESS = "LOAD_CAREER_SUCCESS";
export const LOAD_CAREER_FAILURE = "LOAD_CAREER_FAILURE";

export const uploadCareer = (data) => ({
  type: ADD_CAREER_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_CAREER_REQUEST:
        draft.addCarerLoading = true;
        draft.addCarerDone = false;
        draft.addCarerError = null;
        break;
      case ADD_CAREER_SUCCESS:
        console.log("AA");
        draft.addCarerLoading = false;
        draft.addCarerDone = true;
        draft.careers.unshift(action.data);
        break;
      case ADD_CAREER_FAILURE:
        draft.addCarerLoading = false;
        draft.addCarerError = action.error;
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
      default:
        return state;
    }
  });
};

export default reducer;
