import produce from "../util/produce";

export const initialState = {
  loadIndividualInfoLoading: false,
  loadIndividualInfoDone: false,
  loadIndividualInfoError: null,
  loadBusinessInfoLoading: false,
  loadBusinessInfoDone: false,
  loadBusinessInfoError: null,
  individualInfo: null,
  businessInfo: null,
};

export const LOAD_INDIVIDUAL_INFO_REQUEST = "LOAD_INDIVIDUAL_INFO_REQUEST";
export const LOAD_INDIVIDUAL_INFO_SUCCESS = "LOAD_INDIVIDUAL_INFO_SUCCESS";
export const LOAD_INDIVIDUAL_INFO_FAILURE = "LOAD_INDIVIDUAL_INFO_FAUILURE";

export const LOAD_BUSINESS_INFO_REQUEST = "LOAD_BUSINESS_INFO_REQUEST";
export const LOAD_BUSINESS_INFO_SUCCESS = "LOAD_BUSINESS_INFO_SUCCESS";
export const LOAD_BUSINESS_INFO_FAILURE = "LOAD_BUSINESS_INFO_FAUILURE";

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
      default:
        return state;
    }
  });
};

export default reducer;
