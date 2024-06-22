import { ActionType } from './action.js';
 
function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload;
    default:
      return users;
  }
}
 
export default usersReducer;