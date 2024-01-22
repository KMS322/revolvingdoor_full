import produce from "../util/produce";

export const initialState = {
  matchingLists: null,
  showListLoading: false,
  showListDone: false,
  showListError: null,
  connectedCompanies: [],
  connectedCompaniesLoading: false,
  connectedCompaniesDone: false,
  connectedCompaniesError: null,
};

export const SHOW_LIST_REQUEST = "SHOW_LIST_REQUEST";
export const SHOW_LIST_SUCCESS = "SHOW_LIST_SUCCESS";
export const SHOW_LIST_FAILURE = "SHOW_LIST_FAILURE";

export const CONNECTED_COMPANIES_REQUEST = "CONNECTED_COMPANIES_REQUEST";
export const CONNECTED_COMPANIES_SUCCESS = "CONNECTED_COMPANIES_SUCCESS";
export const CONNECTED_COMPANIES_FAILURE = "CONNECTED_COMPANIES_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SHOW_LIST_REQUEST:
        draft.showListLoading = true;
        draft.showListError = null;
        draft.showListDone = false;
        break;
      case SHOW_LIST_SUCCESS:
        draft.showListLoading = false;
        draft.matchingLists = action.data;
        draft.showListDone = true;
        break;
      case SHOW_LIST_FAILURE:
        draft.showListLoading = false;
        draft.showListError = action.error;
        break;
      case CONNECTED_COMPANIES_REQUEST:
        draft.connectedCompaniesLoading = true;
        draft.connectedCompaniesDone = false;
        draft.connectedCompaniesError = null;
        break;
      case CONNECTED_COMPANIES_SUCCESS:
        draft.connectedCompaniesLoading = false;
        draft.connectedCompaniesDone = true;
        draft.connectedCompanies = draft.connectedCompanies.concat(action.data);
        break;
      case CONNECTED_COMPANIES_FAILURE:
        draft.connectedCompaniesLoading = false;
        draft.connectedCompaniesError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
