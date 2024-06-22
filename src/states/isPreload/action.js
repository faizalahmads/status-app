import api from '../../utils/api.js';
import { setUserAuthActionCreator } from '../userAuth/action.js';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};
 
function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const userAuth = await api.getOwnProfile();
      dispatch(setUserAuthActionCreator(userAuth));
    } catch (error) {
      dispatch(setUserAuthActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
}