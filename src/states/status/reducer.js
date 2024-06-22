import { ActionType } from './action';
 
export default function statussReducer(threads = {}, action = {}) {
  switch (action.type) {
    case ActionType.CREATE_THREAD:
      return action.payload.isSuccess;
    case ActionType.ADD_STATUS:
      return {...threads, threads: [action.payload.status, ...threads.threads]};
    case ActionType.RECEIVE_STATUSS:
      return action.payload;
    case ActionType.CREATE_STATUS:
      return [action.payload.threads, ...threads];
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotes.includes(action.payload.userId)?thread.downVotes.filter((id) => id !== action.payload.userId)
              : thread.downVotes.concat([action.payload.userId]),
            upVoteBy: thread.upVotes.includes(action.payload.userId)?thread.upVotes.filter((id) => id !== action.payload.userId)
              : thread.upVotes.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotes.includes(action.payload.userId)
              ? thread.downVotes.filter((id) => id !== action.payload.userId)
              : thread.downVotes.concat([action.payload.userId]),
            upVoteBy: thread.upVotes.includes(action.payload.userId)
              ? thread.upVotes.filter((id) => id !== action.payload.userId)
              : thread.upVotes.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}