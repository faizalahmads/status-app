import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function StatusItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  owner: user,
  userAuth,
  text,
}) {
  const navigate = useNavigate();
  const isUpVoted = upVotesBy?.includes(userAuth);
  const isDownVoted = downVotesBy?.includes(userAuth);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    if (isUpVoted) {
      neturalizeVote(id);
    } else {
      upVote(id);
    }
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    if (isDownVoted) {
      neturalizeVote(id);
    } else {
      downVote(id);
    }
  };

  const onStatusClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <div className="status-item" onClick={id ? onStatusClick : undefined}>
      <div className="status-header">
        <div>
          <span className="category" style={{  }}>{category}</span>
          <h2 className="title">{title || text}</h2>
        </div>
        <span className="posted-at">{postedAt(createdAt)}</span>
      </div>
      <div className="status-body" >
        {parse(body || '')}
      </div>
      <div className="status-footer">
        <div className="vote-buttons">
          <button
            className="vote-up"
            type="button"
            onClick={onUpVoteClick}
          >
            👍 {upVotesBy?.length}
          </button>
          <button
            className="vote-down"
            type="button"
            onClick={onDownVoteClick}
          >
            👎 {downVotesBy?.length}
          </button>
          <button type="button" onClick={(event) => { event.stopPropagation(); neturalizeVote(id); }}>➖</button>
        </div>
        <div>
          <span className="total-comments">💬 {totalComments}</span>
          <span>Dibuat oleh {user?.name}</span>
          {user?.avatar && <img src={user?.avatar} alt="avatar"/>}
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

const statusItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

StatusItem.propTypes = {
  ...statusItemShape,
  userAuth: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { statusItemShape, userShape };
export default StatusItem;