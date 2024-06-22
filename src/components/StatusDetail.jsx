/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import StatusItem from './StatusItem';
import { useDispatch } from 'react-redux';
import { asyncCreateComment } from '../states/statusDetail/action';

function StatusDetail( {
    id, text, createdAt, owner, title, body, comments
}) {

    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const handleCreatComment = () => {
        dispatch(asyncCreateComment({content, threadId: id}));
    };
    console.log(body)
    return (
        <section className="status-detail">
            <header>
                <div className="user-info">
                    <p className="username">{owner?.name}</p>
                    {owner?.avatar && <img src={owner?.avatar} alt="avatar"/>}
                    <p className="user-id">@{owner?.id}</p>
                    <p className="title">{title}</p>
                    <p className="body">{parse(body || '')}</p>
                    <textarea className="comment" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    <button onClick={handleCreatComment}>Submit</button>
                </div>
            </header>
                <p className="time">{`jumlah komentar ${comments.length}`}</p>
                {comments.map((comment) => (
                    <StatusItem
                        key={comment?.id}
                        text={comment?.content}
                        createdAt={comment?.createdAt}
                        owner={comment?.owner}
                    />
                ))}
            <article>
                <p className="text">{text}</p>
            </article>
            <p className="created-at">{postedAt(createdAt)}</p>
        </section>
    );
}

const userShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

StatusDetail.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.shape(userShape).isRequired,
    userAuth: PropTypes.shape(userShape).isRequired,
    likeStatus: PropTypes.func.isRequired,
}

export default StatusDetail
