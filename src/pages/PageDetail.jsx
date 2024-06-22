import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StatusDetail from '../components/StatusDetail';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveStatusDetail } from '../states/statusDetail/action';

function PageDetail() {
    const { threadId } = useParams();
    const dispatch = useDispatch();
    const {statusDetail, userAuth } = useSelector((state) => state);
    console.log(statusDetail);

    useEffect(() => {
        dispatch(asyncReceiveStatusDetail(threadId));
    }, [threadId, dispatch]);

    if (!statusDetail) {
        return <div>Loading...</div>;
    }

    return (
        <section className="page-detail">
            <StatusDetail {...statusDetail} userAuth={userAuth.id} />
        </section>
    );
}

export default PageDetail;