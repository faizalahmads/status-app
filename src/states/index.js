import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuth/reducer.js';
import isPreloadReducer from './isPreload/reducer.js';
import statusDetailReducer from './statusDetail/reducer.js';
import statussReducer from './status/reducer.js';
import usersReducer from './users/reducer.js';
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

export default store;