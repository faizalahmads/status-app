import React, { useEffect, useState } from 'react';
import StatusInput from '../components/StatusInput';
import StatusList from '../components/StatusList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndStatuss } from '../states/shared/action';
import { asyncAddStatus, asyncUpVoteThread, asyncDownVoteThread, asyncToogleLikeStatus } from '../states/status/action';

function PageHome () {
    const [filter, setFilter] = useState('');
    const {
        threads: statuss = {},
        users = [],
        userAuth,
    } = useSelector((state) => state);
    console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateUsersAndStatuss());
    }, [dispatch, statuss?.isSuccess]);

    const onUpVoteThread = ({ id }) => {
        dispatch(asyncUpVoteThread({ id }));
    }

    const onDownVoteThread = (id) => {
        dispatch(asyncDownVoteThread(id));
    };

    const onToogleLikeStatus = (id) => {
        dispatch(asyncToogleLikeStatus(id));
    };

    const onAddStatus = ({ title, category, body }) => {
        dispatch(asyncAddStatus({ title, category, body }));
    }

    const filteredStatusList = statuss?.threads?.filter((status) => status.title.toLowerCase().includes(filter.toLowerCase()))
        .map((status) => ({
            ...status,
            user: users?.users?.find((user) => user.id === status.ownerId),
            userAuth: userAuth.id,
        }));

    return (
        <section className="page-home">
            <input
                type="text"
                placeholder="Filter status by title"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <StatusInput addStatus={onAddStatus} />
            <StatusList statuss={
                filter?filteredStatusList.filter((status) => status.title.toLowerCase().includes(filter.toLowerCase()))
                :filteredStatusList
                }
                upVote={onUpVoteThread}
                downVote={onDownVoteThread}
                toggleLikeStatus={onToogleLikeStatus} />
        </section>
    )
}

export default PageHome;
