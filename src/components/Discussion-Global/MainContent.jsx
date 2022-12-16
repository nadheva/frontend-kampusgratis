import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from '../../helpers/useEffectOnce';
import moment from 'moment/moment';

import { getAllDiscussion, likeDiscussion } from '../../features/discussion-global/discussionGlobalSlice';

const MainContent = () => {
  const dispatch = useDispatch();
  const [discussions, setDiscussions] = useState([]);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { data } = useSelector(
    (state) => state.discussionGlobal
  );

  const { user } = useSelector(
    (state) => state.profile
  );

  useEffectOnce(() => {
    dispatch(getAllDiscussion());
  });

  useEffect(() => {
    if (Object.values(data).length !== 0) {
      setDiscussions(data.discussions.data);

      if (data?.discussion) setDiscussions(prevState => {
        let dataPrev = [...prevState];
        let index = dataPrev.findIndex(discussion => discussion.id === data.discussion.id);

        dataPrev[index] = {
          ...dataPrev[index],
          student_like: data.discussion.student_like
        }

        return dataPrev;
      });
    }
  }, [data]);

  const doLikeDiscussion = async (discussionId) => {
    dispatch(likeDiscussion(discussionId));
  }

  return <>
    <div className="container my-5">
      {discussions.length > 0 ? <>
        {discussions.map(discussion => <>
          <div className="card shadow h-100 mt-1 mb-4">
            <div className="card-body">
              <div className="vstack gap-3">
                <div>
                  <div className="d-sm-flex justify-content-sm-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar mb-2 mb-md-0 border-2">
                        <img loading="lazy" src={discussion.User.display_picture_link ? discussion.User.display_picture_link : "/assets/images/avatar/empty-display-picture.png"} className="avatar-img rounded-circle shadow" alt={discussion.User.full_name} />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0"><a href="#">{discussion.User.full_name}</a></h6>
                        <small>dikirim pada {moment(discussion?.created_at).format('LL')}</small>
                      </div>
                    </div>
                  </div>
                  <Link to={`/diskusi-global/diskusi/${discussion.id}`}>
                    <h5>{discussion.title}</h5>
                  </Link>
                  <p className='mb-2 text-dark'>{discussion.content}</p>
                  <div className="d-flex mt-3 justify-content-between">
                    <button className='btn btn-sm w-50 py-2 border' onClick={() => doLikeDiscussion(discussion.id)}>
                      <i className={`bi ${!discussion.isLiked ? "bi-hand-thumbs-up-fill text-dark" : "bi-hand-thumbs-up"} text-center`}></i>&nbsp;
                      {discussion.teacher_like.length + discussion.student_like.length} Penyuka
                    </button>
                    <Link className={`btn btn-sm w-50 py-2 border ms-2`} to={`diskusi/${discussion.id}`}>
                      <i className={`fa fa-solid fa-comment text-center text-dark`}></i>&nbsp;
                      Komentar
                    </Link>
                  </div>
                  {/* <ul className="nav nav-divider pb-2 small">
                  bi bi-hand-thumbs-up-fill text-primary
                  <li className="nav-item"><Link className="text-primary-hover" to="#"><i className="bi bi-hand-thumbs-up me-2"></i>({discussion.teacher_like.length + discussion.student_like.length}) Suka</Link></li>
                  <li className="nav-item"><Link className="text-primary-hover" to="#"><i className="bi bi-chat-left me-2"></i>Komentar</Link></li>
                </ul> */}
                </div>
              </div>
            </div>
          </div>
        </>)}
      </> : <>
        ...
      </>}
    </div>
  </>
}

export default MainContent;