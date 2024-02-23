import produce from "../util/produce";

export const initialState = {
  applications: [],
  allApplications: [],
  addApplicationLoading: false,
  addApplicationDone: false,
  addApplicationError: null,
  loadApplicationLoading: false,
  loadApplicationDone: false,
  loadApplicationError: null,
  removeApplicationLoading: false,
  removeApplicationDone: false,
  removeApplicationError: null,
  changeApplicationLoading: false,
  changeApplicationDone: false,
  changeApplicationError: null,
  loadAllApplicationsLoading: false,
  loadAllApplicationsDone: false,
  loadAllApplicationsError: null,
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

export const CHANGE_APPLICATION_REQUEST = "CHANGE_APPLICATION_REQUEST";
export const CHANGE_APPLICATION_SUCCESS = "CHANGE_APPLICATION_SUCCESS";
export const CHANGE_APPLICATION_FAILURE = "CHANGE_APPLICATION_FAILURE";

export const LOAD_ALL_APPLICATIONS_REQUEST = "LOAD_ALL_APPLICATIONS_REQUEST";
export const LOAD_ALL_APPLICATIONS_SUCCESS = "LOAD_ALL_APPLICATIONS_SUCCESS";
export const LOAD_ALL_APPLICATIONS_FAILURE = "LOAD_ALL_APPLICATIONS_FAILURE";

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
      case CHANGE_APPLICATION_REQUEST:
        draft.changeApplicationLoading = true;
        draft.changeApplicationDone = false;
        draft.changeApplicationError = null;
        break;
      case CHANGE_APPLICATION_SUCCESS:
        draft.changeApplicationLoading = false;
        draft.changeApplicationDone = true;
        draft.applications = action.data;
        break;
      case CHANGE_APPLICATION_FAILURE:
        draft.changeApplicationLoading = false;
        draft.changeApplicationError = action.error;
        break;
      case REMOVE_APPLICATION_REQUEST:
        draft.removeApplicationLoading = true;
        draft.removeApplicationDone = false;
        draft.removeApplicationError = null;
        break;
      case REMOVE_APPLICATION_SUCCESS:
        draft.removeApplicationLoading = false;
        draft.removeApplicationDone = true;
        draft.applications = draft.applications.filter(
          (v) => v.id !== action.data
        );
        break;
      case REMOVE_APPLICATION_FAILURE:
        draft.removeApplicationLoading = false;
        draft.removeApplicationError = action.error;
        break;
      case LOAD_ALL_APPLICATIONS_REQUEST:
        draft.loadAllApplicationsLoading = true;
        draft.loadAllApplicationsDone = false;
        draft.loadAllApplicationsError = null;
        break;
      case LOAD_ALL_APPLICATIONS_SUCCESS:
        draft.loadAllApplicationsLoading = false;
        draft.loadAllApplicationsDone = true;
        draft.allApplications = draft.allApplications.concat(action.data);
        break;
      case LOAD_ALL_APPLICATIONS_FAILURE:
        draft.loadAllApplicationsLoading = false;
        draft.loadAllApplicationsError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
