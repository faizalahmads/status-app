import { ActionType } from './action.js';
 
function statusDetailReducer(statusDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_STATUS_DETAIL:
      return action.payload.statusDetail;
    case ActionType.UP_VOTE_STATUS_DETAIL:
      return {
        ...statusDetail,
        likes: statusDetail.likes.includes(action.payload.userId)
          ? statusDetail.likes.filter((id) => id !== action.payload.userId)
          : statusDetail.likes.concat(action.payload.userId),
      };
    case ActionType.CREATE_COMMENT:
      return {
        ...statusDetail,
        comments: [
          action.payload.comment,
          ...statusDetail.comments,
        ],
      };
    default:
      return statusDetail;
  }
}
 
export default statusDetailReducer;