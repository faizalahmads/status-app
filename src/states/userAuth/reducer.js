import { ActionType } from './action.js';

function userAuthReducer(userAuth = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_USER_AUTH:
      return action.payload.userAuth;
    case ActionType.UNSET_USER_AUTH:
      return null;
    default:
      return userAuth;
  }
}

export default userAuthReducer;