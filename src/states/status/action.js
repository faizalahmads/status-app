import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_STATUSS: 'RECEIVE_STATUSS',
  ADD_STATUS: 'ADD_STATUS',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  TOGGLE_LIKE_STATUS: 'TOGGLE_LIKE_STATUS',
  CREATE_THREAD: 'CREATE_THREAD',
};
 
function receiveStatussActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_STATUSS,
    payload: {
      threads,
    },
  };
}

function createThreadActionCreator() {
  return {
    type: ActionType.CREATE_THREAD,
  };
}
 
function addStatusActionCreator(status) {
  return {
    type: ActionType.ADD_STATUS,
    payload: {
      status,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
 
function toggleLikeStatusActionCreator({ statusId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_STATUS,
    payload: {
      statusId,
      userId,
    },
  };
}

function asyncAddStatus({ title, category, body }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const status = await api.createStatus({ title, category, body });
      dispatch(addStatusActionCreator(status));
      dispatch(createThreadActionCreator);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}


function asyncUpVoteThread({ threadId, userId }) {
  return async (dispatch) => {
    dispatch(upVoteThreadActionCreator({ threadId, userId }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadActionCreator({ threadId, userId }));
    }
  };
}

function asyncDownVoteThread({ threadId, userId }) {
  return async (dispatch) => {
    dispatch(downVoteThreadActionCreator({ threadId, userId }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteThreadActionCreator({ threadId, userId }));
    }
  };
}
 
function asyncToogleLikeStatus(statusId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeStatusActionCreator({ statusId, userId: authUser.id }));

    try {
      await api.toggleLikeStatus(statusId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeStatusActionCreator({ statusId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveStatussActionCreator,
  addStatusActionCreator,
  toggleLikeStatusActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncAddStatus,
  asyncToogleLikeStatus,
  createThreadActionCreator,
};