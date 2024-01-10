import produce from "../util/produce";

export const initialState = {
  loadIndividualInfoLoading: false,
  loadIndividualInfoDone: false,
  loadIndividualInfoError: null,
  loadBusinessInfoLoading: false,
  loadBusinessInfoDone: false,
  loadBusinessInfoError: null,
  changeIndividualInfoLoading: false,
  changeIndividualInfoDone: false,
  changeIndividualInfoError: null,
  changeBusinessInfoLoading: false,
  changeBusinessInfoDone: false,
  changeBusinessInfoError: null,
  individualInfo: null,
  businessInfo: null,
};

export const LOAD_INDIVIDUAL_INFO_REQUEST = "LOAD_INDIVIDUAL_INFO_REQUEST";
export const LOAD_INDIVIDUAL_INFO_SUCCESS = "LOAD_INDIVIDUAL_INFO_SUCCESS";
export const LOAD_INDIVIDUAL_INFO_FAILURE = "LOAD_INDIVIDUAL_INFO_FAUILURE";

export const LOAD_BUSINESS_INFO_REQUEST = "LOAD_BUSINESS_INFO_REQUEST";
export const LOAD_BUSINESS_INFO_SUCCESS = "LOAD_BUSINESS_INFO_SUCCESS";
export const LOAD_BUSINESS_INFO_FAILURE = "LOAD_BUSINESS_INFO_FAUILURE";

export const CHANGE_INDIVIDUAL_INFO_REQUEST = "CHANGE_INDIVIDUAL_INFO_REQUEST";
export const CHANGE_INDIVIDUAL_INFO_SUCCESS = "CHANGE_INDIVIDUAL_INFO_SUCCESS";
export const CHANGE_INDIVIDUAL_INFO_FAILURE = "CHANGE_INDIVIDUAL_INFO_FAUILURE";

export const CHANGE_BUSINESS_INFO_REQUEST = "CHANGE_BUSINESS_INFO_REQUEST";
export const CHANGE_BUSINESS_INFO_SUCCESS = "CHANGE_BUSINESS_INFO_SUCCESS";
export const CHANGE_BUSINESS_INFO_FAILURE = "CHANGE_BUSINESS_INFO_FAUILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_INDIVIDUAL_INFO_REQUEST:
        draft.loadIndividualInfoLoading = true;
        draft.loadIndividualInfoError = null;
        draft.loadIndividualInfoDone = false;
        break;
      case LOAD_INDIVIDUAL_INFO_SUCCESS:
        draft.loadIndividualInfoLoading = false;
        draft.individualInfo = action.data;
        draft.loadIndividualInfoDone = true;
        break;
      case LOAD_INDIVIDUAL_INFO_FAILURE:
        draft.loadIndividualInfoLoading = false;
        draft.loadIndividualInfoError = action.error;
        break;
      case LOAD_BUSINESS_INFO_REQUEST:
        draft.loadBusinessInfoLoading = true;
        draft.loadBusinessInfoError = null;
        draft.loadBusinessInfoDone = false;
        break;
      case LOAD_BUSINESS_INFO_SUCCESS:
        draft.loadBusinessInfoLoading = false;
        draft.businessInfo = action.data;
        draft.loadBusinessInfoDone = true;
        break;
      case LOAD_BUSINESS_INFO_FAILURE:
        draft.loadBusinessInfoLoading = false;
        draft.loadBusinessInfoError = action.error;
        break;
      case CHANGE_INDIVIDUAL_INFO_REQUEST:
        draft.changeIndividualInfoLoading = true;
        draft.changeIndividualInfoError = null;
        draft.changeIndividualInfoDone = false;
        break;
      case CHANGE_INDIVIDUAL_INFO_SUCCESS:
        draft.changeIndividualInfoLoading = false;
        draft.individualInfo = action.data;
        draft.changeIndividualInfoDone = true;
        break;
      case CHANGE_INDIVIDUAL_INFO_FAILURE:
        draft.changeIndividualInfoLoading = false;
        draft.changeIndividualInfoError = action.error;
        break;
      case CHANGE_BUSINESS_INFO_REQUEST:
        draft.changeBusinessInfoLoading = true;
        draft.changeBusinessInfoError = null;
        draft.changeBusinessInfoDone = false;
        break;
      case CHANGE_BUSINESS_INFO_SUCCESS:
        draft.changeBusinessInfoLoading = false;
        draft.businessInfo = action.data;
        draft.changeBusinessInfoDone = true;
        break;
      case CHANGE_BUSINESS_INFO_FAILURE:
        draft.changeBusinessInfoLoading = false;
        draft.changeBusinessInfoError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
