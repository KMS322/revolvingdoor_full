import produce from "../util/produce";

export const initialState = {
  applications: [],
  addApplicationLoading: false,
  addApplicationDone: false,
  addApplicationError: null,
  loadApplicationLoading: false,
  loadApplicationDone: false,
  loadApplicationError: null,
};

export const ADD_APPLICATION_REQUEST = "ADD_APPLICATION_REQUEST";
export const ADD_APPLICATION_SUCCESS = "ADD_APPLICATION_SUCCESS";
export const ADD_APPLICATION_FAILURE = "ADD_APPLICATION_FAILURE";
export const REMOVE_APPLICATION_REQUEST = "REMOVE_APPLICATION_REQUEST";
export const REMOVE_APPLICATION_SUCCESS = "REMOVE_APPLICATION_SUCCESS";
export const REMOVE_APPLICATION_FAILURE = "REMOVE_APPLICATION_FAILURE";
export const LOAD_APPLICATION_REQUEST = "LOAD_APPLICATION_REQUEST";
export const LOAD_APPLICATION_SUCCESS = "LOAD_APPLICATION_SUCCESS";
export const LOAD_APPLICATION_FAILURE = "LOAD_APPLICATION_FAILURE";
export const uploadApplication = (data) => ({
  type: ADD_APPLICATION_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_APPLICATION_REQUEST:
        draft.addApplicationLoading = true;
        draft.addApplicationDone = false;
        draft.addApplicationError = null;
        break;
      case ADD_APPLICATION_SUCCESS:
        draft.addApplicationLoading = false;
        draft.addApplicationDone = true;
        draft.applications.unshift(action.data);
        break;
      case ADD_APPLICATION_FAILURE:
        draft.addApplicationLoading = false;
        draft.addApplicationError = action.error;
        break;
      case LOAD_APPLICATION_REQUEST:
        draft.loadApplicationLoading = true;
        draft.loadApplicationDone = false;
        draft.loadApplicationError = null;
        break;
      case LOAD_APPLICATION_SUCCESS:
        draft.loadApplicationLoading = false;
        draft.loadApplicationDone = true;
        draft.applications = draft.applications.concat(action.data);
        break;
      case LOAD_APPLICATION_FAILURE:
        draft.loadApplicationLoading = false;
        draft.loadApplicationError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
