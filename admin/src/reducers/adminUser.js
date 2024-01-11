import produce from "../util/produce";

export const initialState = {
  loadAllUserLoading: false,
  loadAllUserDone: false,
  loadAllUserError: null,
  allUsers: null,
};

export const LOAD_ALLUSER_REQUEST = "LOAD_ALLUSER_REQUEST";
export const LOAD_ALLUSER_SUCCESS = "LOAD_ALLUSER_SUCCESS";
export const LOAD_ALLUSER_FAILURE = "LOAD_ALLUSER_FAILURE";

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
    }
  });
};

export default reducer;
