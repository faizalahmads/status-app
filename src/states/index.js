import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuth/reducer';
import isPreloadReducer from './isPreload/reducer';
import statusDetailReducer from './statusDetail/reducer';
import statussReducer from './status/reducer';
import usersReducer from './users/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
 
const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: statussReducer,
    statusDetail: statusDetailReducer,
    loadingBar: loadingBarReducer
  },
});

export default store