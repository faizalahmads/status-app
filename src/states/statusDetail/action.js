import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_STATUS_DETAIL: 'RECEIVE_STATUS_DETAIL',
  UP_VOTE_STATUS_DETAIL: 'UP_VOTE_STATUS_DETAIL',
  DOWN_VOTE_STATUS_DETAIL: 'DOWN_VOTE_STATUS_DETAIL',
  TOGGLE_LIKE_STATUS_DETAIL: 'TOGGLE_LIKE_STATUS_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  CLEAR_STATUS_DETAIL: 'CLEAR_STATUS_DETAIL',
};

function receiveStatusDetailActionCreator(statusDetail) {
  return {
    type: ActionType.RECEIVE_STATUS_DETAIL,
    payload: {
      statusDetail,
    },
  };
}

function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function clearStatusDetailActionCreator() {
  return {
    type: ActionType.CLEAR_STATUS_DETAIL,
  };
}

function asyncReceiveStatusDetail(threadId) {
  console.log('Thread ID:', threadId);
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearStatusDetailActionCreator());
    try {
      const statusDetail = await api.getStatusDetail(threadId);
      dispatch(receiveStatusDetailActionCreator(statusDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncCreateComment({ content, threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ content, threadId });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveStatusDetailActionCreator,
  clearStatusDetailActionCreator,
  createCommentActionCreator,
  asyncReceiveStatusDetail,
  asyncCreateComment,
};