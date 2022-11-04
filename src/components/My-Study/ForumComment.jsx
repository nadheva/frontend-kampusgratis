import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteComment, deleteReply, likeComment, likeReply, sendReply } from '../../features/my-study/myStudySlice';

const ForumComment = ({ comment, subjectId, sessionId }) => {
  const dispatch = useDispatch();

  const [myReply, setMyReply] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { user } = useSelector(
    (state) => state.profile
  );

  const showHideComment = () => {
    setShowCommentBox(showCommentBox ? false : true);
  }

  const addReply = (commentId) => {
    if (myReply.length === 0) return toast.warning("Balasan kamu masih kosong!");

    dispatch(sendReply({
      commentId,
      comment: myReply
    }));

    setMyReply("");
  }

  const doDeleteComment = commentId => {
    dispatch(deleteComment(commentId));
  }

  const doDeleteReply = replyId => {
    dispatch(deleteReply(replyId));
  }

  const doLikeComment = commentId => {
    dispatch(likeComment(commentId));
  }

  const doLikeReply = replyId => {
    dispatch(likeReply(replyId));
  }

  return <>
    <div className="border p-2 p-sm-4 rounded-3 mb-4">
      <ul className="list-unstyled mb-0">
        <li className="comment-item" data-id={comment.id}>
          <div className="d-flex">
            <div className="avatar avatar-sm flex-shrink-0">
              <img
                className="avatar-img rounded-circle"
                src={comment.User.display_picture_link}
                alt={comment.User.full_name}
              />
            </div>
            <div className="ms-2 w-100">
              <h6 className="mb-0">
                <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum/${comment.id}`}>
                  {comment.User.full_name}
                </Link>
              </h6>
              <small>
                {new Date(comment.created_at).toLocaleString('en-US')}
                {/* {comment.created_at.split("T")[0].split("-").reverse().join("/")} - {comment.created_at.split("T")[1].split(".")[0]} */}
              </small>
              <p className="my-2">
                {comment.content}
              </p>
            </div>
            {comment.User.display_picture_link === user.display_picture_link && <>
              <div className="dropdown">
                <span className="btn btn-xs btn-round mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                  X
                </span>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="submit" onClick={() => doDeleteComment(comment.id)}>Hapus Komentar</button></li>
                </ul>
              </div>
            </>}
          </div>
          <div className="d-flex mt-3 justify-content-between">
            <button className='btn btn-sm w-50 py-2 border' onClick={() => doLikeComment(comment.id)}>
              <i className="fa fa-regular fa-thumbs-up text-center text-dark"></i>&nbsp;
              {comment.student_like.length} Penyuka
            </button>
            <button className='btn btn-sm w-50 py-2 border ms-2' onClick={() => showHideComment()}>
              <i className="fa fa-regular fa-comments text-center text-dark"></i>
            </button>
          </div>
          <ul className="list-unstyled ms-4 mt-4">
            {comment.Replies && comment.Replies.map(reply => <>
              <li className="comment-item mt-3">
                <div className="d-flex">
                  <div className="avatar avatar-sm flex-shrink-0">
                    <img
                      className="avatar-img rounded-circle"
                      src={reply.User.display_picture_link}
                      alt={reply.User.full_name}
                    />
                  </div>
                  <div className="ms-2 w-100">
                    <h6 className="mb-0">
                      <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum/${comment.id}`}>
                        {reply.User.full_name}
                      </Link>
                    </h6>
                    <small>
                      {new Date(reply.created_at).toLocaleString('en-US')}
                      {/* {reply.created_at.split("T")[0].split("-").reverse().join("/")} - {reply.created_at.split("T")[1].split(".")[0]} */}
                    </small>
                    <p className="my-2">
                      {reply.content}
                    </p>
                  </div>
                  {reply.User.display_picture_link === user.display_picture_link && <>
                    <div className="dropdown">
                      <span className="btn btn-xs btn-round mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                        X
                      </span>
                      <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="submit" onClick={() => doDeleteReply(reply.id)}>Hapus Balasan</button></li>
                      </ul>
                    </div>
                  </>}
                </div>
                <div className="d-flex mt-3 justify-content-between">
                  <button className='btn btn-sm w-50 py-2 border' onClick={() => doLikeReply(reply.id)}>
                    <i className="fa fa-regular fa-thumbs-up text-center text-dark"></i>&nbsp;
                    {reply.student_like.length} Penyuka
                  </button>
                  <button className='btn btn-sm w-50 py-2 border ms-2' onClick={() => showHideComment()}>
                    <i className="fa fa-regular fa-comments text-center text-dark"></i>
                  </button>
                </div>
              </li>
            </>)}
            {showCommentBox && <>
              <div className="d-flex mb-4 mt-4" data-comment-id={comment.id}>
                <div className="avatar avatar-sm flex-shrink-0 me-2">
                  <a href="#">
                    <img className="avatar-img rounded-circle" src={user.display_picture_link != null ? `${user.display_picture_link}` : "/assets/images/avatar/empty-display-picture.png"} alt={user?.full_name} />
                  </a>
                </div>
                <form className="w-100 d-flex">
                  <textarea className="one form-control pe-4 bg-light" id="autoheighttextarea" rows="1" autoFocus
                    placeholder="Tambah balasan ..." onChange={(e) => setMyReply(e.target.value)} value={myReply}>
                  </textarea>
                  <button className="btn btn-primary ms-2 mb-0" type="button" onClick={() => addReply(comment.id)}>
                    Kirim
                  </button>
                </form>
              </div>
            </>}
          </ul>
        </li>
      </ul>
    </div >
  </>
}

export default ForumComment;