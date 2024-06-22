/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api.js';
import { receiveUsersActionCreator } from '../users/action.js';
import { receiveStatussActionCreator } from '../status/action.js';
 
function asyncPopulateUsersAndStatuss() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllStatus();
      console.log(threads);
 
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveStatussActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}
 
export { asyncPopulateUsersAndStatuss };