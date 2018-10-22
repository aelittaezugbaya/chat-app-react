import actions from "./actions";

const initialState = {
  currentDialog: null,
  user: null
};

function chatApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case actions.ADD_USER:
      return Object.assign({}, state, {
        user: action.payload
      });
      break;
    case actions.CHOOSE_DIALOG:
      return Object.assign({}, state, {
        currentDialog: action.payload
      });
      break;
    case actions.REMOVE_USER:
      return Object.assign({}, state, {
        user: null
      });
      break;

    default:
  }
  return state;
}

export default chatApp;
