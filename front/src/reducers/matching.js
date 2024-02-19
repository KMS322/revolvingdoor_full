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
  setConcurrenceLoading: false,
  setConcurrenceDone: false,
  setConcurrenceError: null,
  changeStepLoading: false,
  changeStepDone: false,
  changeStepError: null,
  loadConcurrenceLoading: false,
  loadConcurrenceDone: false,
  loadConcurrenceError: null,
  clickPayLoading: false,
  clickPayDone: false,
  clickPayError: null,
  checkPayLoading: false,
  checkPayDone: false,
  checkPayError: null,
  concurrences: null,
  businessPay: null,
};

export const SHOW_LIST_REQUEST = "SHOW_LIST_REQUEST";
export const SHOW_LIST_SUCCESS = "SHOW_LIST_SUCCESS";
export const SHOW_LIST_FAILURE = "SHOW_LIST_FAILURE";

export const CONNECTED_COMPANIES_REQUEST = "CONNECTED_COMPANIES_REQUEST";
export const CONNECTED_COMPANIES_SUCCESS = "CONNECTED_COMPANIES_SUCCESS";
export const CONNECTED_COMPANIES_FAILURE = "CONNECTED_COMPANIES_FAILURE";

export const SET_CONCURRENCE_REQUEST = "SET_CONCURRENCE_REQUEST";
export const SET_CONCURRENCE_SUCCESS = "SET_CONCURRENCE_SUCCESS";
export const SET_CONCURRENCE_FAILURE = "SET_CONCURRENCE_FAILURE";

export const CHANGE_STEP_REQUEST = "CHANGE_STEP_REQUEST";
export const CHANGE_STEP_SUCCESS = "CHANGE_STEP_SUCCESS";
export const CHANGE_STEP_FAILURE = "CHANGE_STEP_FAILURE";

export const LOAD_CONCURRENCE_REQUEST = "LOAD_CONCURRENCE_REQUEST";
export const LOAD_CONCURRENCE_SUCCESS = "LOAD_CONCURRENCE_SUCCESS";
export const LOAD_CONCURRENCE_FAILURE = "LOAD_CONCURRENCE_FAILURE";

export const CLICK_PAY_REQUEST = "CLICK_PAY_REQUEST";
export const CLICK_PAY_SUCCESS = "CLICK_PAY_SUCCESS";
export const CLICK_PAY_FAILURE = "CLICK_PAY_FAILURE";

export const CHECK_PAY_REQUEST = "CHECK_PAY_REQUEST";
export const CHECK_PAY_SUCCESS = "CHECK_PAY_SUCCESS";
export const CHECK_PAY_FAILURE = "CHECK_PAY_FAILURE";

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
      case SET_CONCURRENCE_REQUEST:
        draft.setConcurrenceLoading = true;
        draft.setConcurrenceError = null;
        draft.setConcurrenceDone = false;
        break;
      case SET_CONCURRENCE_SUCCESS:
        draft.setConcurrenceLoading = false;
        draft.setConcurrenceDone = true;
        break;
      case SET_CONCURRENCE_FAILURE:
        draft.setConcurrenceLoading = false;
        draft.setConcurrenceError = action.error;
        break;
      case CHANGE_STEP_REQUEST:
        draft.changeStepLoading = true;
        draft.changeStepError = null;
        draft.changeStepDone = false;
        break;
      case CHANGE_STEP_SUCCESS:
        draft.changeStepLoading = false;
        draft.changeStepDone = true;
        break;
      case CHANGE_STEP_FAILURE:
        draft.changeStepLoading = false;
        draft.changeStepError = action.error;
        break;
      case LOAD_CONCURRENCE_REQUEST:
        draft.loadConcurrenceLoading = true;
        draft.loadConcurrenceDone = false;
        draft.loadConcurrenceError = null;
        break;
      case LOAD_CONCURRENCE_SUCCESS:
        draft.loadConcurrenceLoading = false;
        draft.loadConcurrenceDone = true;
        draft.concurrences = action.data;
        break;
      case LOAD_CONCURRENCE_FAILURE:
        draft.loadConcurrenceLoading = false;
        draft.loadConcurrenceError = action.error;
        break;
      case CLICK_PAY_REQUEST:
        draft.clickPayLoading = true;
        draft.clickPayError = null;
        draft.clickPayDone = false;
        break;
      case CLICK_PAY_SUCCESS:
        draft.clickPayLoading = false;
        draft.clickPayDone = true;
        break;
      case CLICK_PAY_FAILURE:
        draft.clickPayLoading = false;
        draft.clickPayError = action.error;
        break;
      case CHECK_PAY_REQUEST:
        draft.checkPayLoading = true;
        draft.checkPayError = null;
        draft.checkPayDone = false;
        break;
      case CHECK_PAY_SUCCESS:
        draft.checkPayLoading = false;
        draft.businessPay = action.data;
        draft.checkPayDone = true;
        break;
      case CHECK_PAY_FAILURE:
        draft.checkPayLoading = false;
        draft.checkPayError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
