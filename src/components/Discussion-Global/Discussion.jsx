import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteComment, deleteReply, likeComment, likeReply, sendReply } from '../../features/my-study/myStudySlice';

const Discussion = ({ comment }) => {
  const dispatch = useDispatch();

  const [myReply, setMyReply] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { data, message } = useSelector(
    (state) => state.discussionGlobal
  );

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
    let elements = document.querySelectorAll(`div[data-id="${commentId}"]`);
    elements.forEach((e) => { e.remove() });
  }

  const doDeleteReply = replyId => {
    dispatch(deleteReply(replyId));
    let elements = document.querySelectorAll(`li[data-id="${replyId}"]`);
    elements.forEach((e) => { e.remove() });
  }

  const doLikeComment = commentId => {
    dispatch(likeComment(commentId));
  }

  const doLikeReply = replyId => {
    dispatch(likeReply(replyId));
  }

  return <>
    <div className="border p-2 p-sm-4 rounded-3 mb-4" data-id={comment.id}>
      <ul className="list-unstyled mb-0">
        <li className="comment-item">
          <div className="d-flex">
            <div className="avatar avatar-sm flex-shrink-0">
              <img
                className="avatar-img rounded-circle"
                src={comment?.User?.display_picture_link == undefined ? user.display_picture_link :
                  comment?.User?.display_picture_link == null ? '/assets/images/avatar/empty-display-picture.png' : comment?.User?.display_picture_link}
                alt={comment?.User?.full_name != undefined ? comment?.User?.full_name : user?.full_name}
              />
            </div>
            <div className="ms-2 w-100">
              <h6 className="mb-0">
                {comment?.User?.full_name == undefined ? user.full_name : comment?.User?.full_name}
              </h6>
              <small>
                {new Date(comment.created_at).toLocaleString('id-ID')}
                {/* {comment.created_at.split("T")[0].split("-").reverse().join("/")} - {comment.created_at.split("T")[1].split(".")[0]} */}
              </small>
              <p className="my-2">
                {comment.content}
              </p>
            </div>
            {comment?.User?.full_name === undefined && <>
              <div className="dropdown">
                <span className="btn btn-xs btn-round mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                  X
                </span>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="submit" onClick={() => doDeleteComment(comment.id)}>Hapus Komentar</button></li>
                </ul>
              </div>
            </>}
            {comment?.User?.display_picture_link === user.display_picture_link && <>
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
              <i className={`fa fa-regular ${showCommentBox ? "fa-comment-slash" : "fa-comment"} text-center text-dark`}></i> {showCommentBox ? 'Tutup Balasan' : 'Tambah Balasan'}
            </button>
          </div>
          <ul className="list-unstyled ms-4 mt-4">
            {comment.Replies && comment.Replies.map(reply => <>
              <li className="comment-item mt-3" data-id={reply.id}>
                <div className="d-flex">
                  <div className="avatar avatar-sm flex-shrink-0">
                    <img
                      className="avatar-img rounded-circle"
                      src={reply?.User?.display_picture_link == undefined ? user.display_picture_link :
                        reply?.User?.display_picture_link == null ? '/assets/images/avatar/empty-display-picture.png' : reply?.User?.display_picture_link}
                      alt={reply?.User?.full_name != undefined ? reply?.User?.full_name : user?.full_name}
                    />
                  </div>
                  <div className="ms-2 w-100">
                    <h6 className="mb-0">
                      {reply.User.full_name}
                    </h6>
                    <small>
                      {new Date(reply.created_at).toLocaleString('id-ID')}
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
                    <i className={`fa fa-regular ${showCommentBox ? "fa-comment-slash" : "fa-comment"} text-center text-dark`}></i> {showCommentBox ? 'Tutup Balasan' : 'Tambah Balasan'}
                  </button>
                </div>
              </li>
            </>)}
            {showCommentBox && <>
              <div className="d-flex mb-4 mt-4" data-comment-id={comment.id}>
                <div className="avatar avatar-sm flex-shrink-0 me-2">
                  <a href=" ">
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

export default Discussion