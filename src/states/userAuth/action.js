import api from '../../utils/api';

const ActionType = {
  SET_USER_AUTH: 'SET_USER_AUTH',
  UNSET_USER_AUTH: 'UNSET_USER_AUTH',
};
 
function setUserAuthActionCreator(userAuth) {
  return {
    type: ActionType.SET_USER_AUTH,
    payload: {
      userAuth,
    },
  };
}
 
function unsetUserAuthActionCreator() {
  return {
    type: ActionType.UNSET_USER_AUTH,
    payload: {
      userAuth: null,
    },
  };
}

function asyncSetUserAuth({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const userAuth = await api.getOwnProfile();
 
      dispatch(setUserAuthActionCreator(userAuth));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetUserAuth() {
  return (dispatch) => {
    dispatch(unsetUserAuthActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setUserAuthActionCreator,
  unsetUserAuthActionCreator,
  asyncSetUserAuth,
  asyncUnsetUserAuth,
}