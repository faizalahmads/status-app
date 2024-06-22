import React from 'react'
import PropTypes from 'prop-types'
import StatusItem, { statusItemShape } from './StatusItem'

function StatussList({ statuss, upVote, downVote, toggleLikeStatus,  }) {
    console.log(statuss)
    return (
        <div className="status-list">
            {
                statuss?.map((status) => (
                    <StatusItem
                        key={status.id}
                        {...status}
                        owner={status.user}
                        upVote={upVote}
                        downVote={downVote}
                        toggleLikeStatus={toggleLikeStatus}

                    />
                ))
            }
        </div>
    );
}

StatussList.propTypes = {
    statuss: PropTypes.arrayOf(PropTypes.shape(statusItemShape)).isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    toggleLikeStatus: PropTypes.func.isRequired,
};

export default StatussList
