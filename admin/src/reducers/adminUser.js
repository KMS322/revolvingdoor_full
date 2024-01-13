import produce from "../util/produce";

export const initialState = {
  loadAllUserLoading: false,
  loadAllUserDone: false,
  loadAllUserError: null,
  loadIndividualLoading: false,
  loadIndividualDone: false,
  loadIndividualError: null,
  allUsers: null,
  userIndividuals: null,
};

export const LOAD_ALLUSER_REQUEST = "LOAD_ALLUSER_REQUEST";
export const LOAD_ALLUSER_SUCCESS = "LOAD_ALLUSER_SUCCESS";
export const LOAD_ALLUSER_FAILURE = "LOAD_ALLUSER_FAILURE";

export const LOAD_INDIVIDUAL_REQUEST = "LOAD_INDIVIDUAL_REQUEST";
export const LOAD_INDIVIDUAL_SUCCESS = "LOAD_INDIVIDUAL_SUCCESS";
export const LOAD_INDIVIDUAL_FAILURE = "LOAD_INDIVIDUAL_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ALLUSER_REQUEST:
        draft.loadAllUserLoading = true;
        draft.loadAllUserError = null;
        draft.loadAllUserDone = false;
        break;
      case LOAD_ALLUSER_SUCCESS:
        draft.loadAllUserLoading = false;
        draft.allUsers = action.data;
        draft.loadAllUserDone = true;
        break;
      case LOAD_ALLUSER_FAILURE:
        draft.loadAllUserLoading = false;
        draft.loadAllUserError = action.error;
        break;
      case LOAD_INDIVIDUAL_REQUEST:
        draft.loadIndividualLoading = true;
        draft.loadIndividualError = null;
        draft.loadIndividualDone = false;
        break;
      case LOAD_INDIVIDUAL_SUCCESS:
        draft.loadIndividualLoading = false;
        draft.userIndividuals = action.data;
        draft.loadIndividualDone = true;
        break;
      case LOAD_INDIVIDUAL_FAILURE:
        draft.loadIndividualLoading = false;
        draft.loadIndividualError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
