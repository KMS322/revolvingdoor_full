import produce from "../util/produce";

export const initialState = {
  sendSmsLoading: false,
  sendSmsDone: false,
  sendSmsError: null,
};

export const SEND_SMS_REQUEST = "SEND_SMS_REQUEST";
export const SEND_SMS_SUCCESS = "SEND_SMS_SUCCESS";
export const SEND_SMS_FAILURE = "SEND_SMS_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEND_SMS_REQUEST:
        draft.sendSmsLoading = true;
        draft.sendSmsError = null;
        draft.sendSmsDone = false;
        break;
      case SEND_SMS_SUCCESS:
        draft.sendSmsLoading = false;
        draft.sendSmsDone = true;
        break;
      case SEND_SMS_FAILURE:
        draft.sendSmsLoading = false;
        draft.sendSmsError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
