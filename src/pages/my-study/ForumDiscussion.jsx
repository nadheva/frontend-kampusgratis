import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { resetAll, getSubject, getSingleDiscussion, sendComment, reset, likeDiscussion } from '../../features/my-study/myStudySlice';
import useEffectOnce from '../../helpers/useEffectOnce';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import { toast } from 'react-toastify';
import ForumComment from '../../components/My-Study/ForumComment';

const ForumDiscussion = () => {
  const dispatch = useDispatch();

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [currentSubject, setCurrentSubject] = useState({});
  const [currentDiscussion, setCurrentDiscussion] = useState({});
  const { subjectId, sessionId, moduleId, discussionId } = useParams();

  const [myComment, setMyComment] = useState("");

  const { isLoading, data, message, isSuccess } = useSelector(
    (state) => state.myStudy
  );

  const { user } = useSelector(
    (state) => state.profile
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getSingleDiscussion(discussionId))
    ]);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  const addComment = async () => {
    if (myComment.length === 0) toast.warning("Balasan masih kosong!");

    dispatch(sendComment({ discussionId, comment: myComment }));
    setMyComment("");
  }

  const doLikeDiscussion = async (discussionId) => {
    dispatch(likeDiscussion(discussionId));
  }

  useEffect(() => {
    if (message === "SENT_COMMENT" || message === "SENT_REPLY") {
      dispatch(getSingleDiscussion(discussionId));
      toast.info('Pesan berhasil dikirim!');
      dispatch(reset());
    }

    if (message === "DELETE_COMMENT" || message === "DELETE_REPLY") {
      dispatch(getSingleDiscussion(discussionId));
      toast.info("Pesan berhasil dihapus!");
      dispatch(reset());
    }

    if (message === "LIKE_REPLY" || message === "LIKE_COMMENT" || message === "LIKE_DISCUSSION") {
      dispatch(getSingleDiscussion(discussionId));
      dispatch(reset());
    }

    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.discussion) setCurrentDiscussion(data.discussion);
  }, [data]);

  return <>
    <Header />
    <main>
      {isLoading || Object.keys(currentDiscussion).length === 0 ? <>
        <section className='bg-blue align-items-center d-flex' style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='text-white'>
                  ...
                </h1>
                <div className='d-flex justify-content-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum`}>Forum</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Diskusi</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-light py-0 py-sm-5'>
          <div className='container text-center' style={{ marginTop: '188px', marginBottom: '188px' }}>
            <div className='row'>
              <div className='col-12'>
                <div className='spinner-border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </> : <>
        <section className="bg-blue align-items-center d-flex" style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">{currentSubject.name}</h1>
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum`}>Forum</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Diskusi</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pb-0 py-lg-5'>
          <div className="container">
            <div className="row">
              <div className="card shadow">
                <div className="card-body py-4">
                  <div className="col-12">
                    <div className="d-sm-flex justify-content-sm-between mb-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src={currentDiscussion.User.display_picture_link}
                            alt={currentDiscussion.User.full_name}
                          />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0">
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum/${currentDiscussion.id}`}>
                              {currentDiscussion.User.full_name}
                            </Link>
                          </h6>
                          <small>
                            {new Date(currentDiscussion.created_at).toLocaleString('en-US')}
                            {/* {currentSubject.name} - {currentDiscussion.created_at.split("T")[0].split("-").reverse().join("/")} - {currentDiscussion.created_at.split("T")[1].split(".")[0]} */}
                          </small>
                        </div>
                      </div>
                    </div>
                    <h5>{currentDiscussion.title}</h5>
                    <p className="mb-2">
                      {currentDiscussion.content}
                    </p>
                    <div className="d-flex mt-3 justify-content-between">
                      <button className='btn btn-sm w-50 py-2 border' onClick={() => doLikeDiscussion(discussionId)}>
                        <i className="fa fa-regular fa-thumbs-up text-center text-dark"></i>&nbsp;
                        {currentDiscussion.student_like.length} Penyuka
                      </button>
                      <button className={`btn btn-sm w-50 py-2 border ms-2`} onClick={() => setShowCommentBox(showCommentBox ? false : true)}>
                        <i class={`fa fa-solid ${showCommentBox ? "fa-comment-slash" : "fa-comment"} text-center text-dark`}></i>&nbsp;
                        {showCommentBox ? "Tutup Komentar" : "Tambah Komentar"}
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12 mt-2">
                    <h5 className="mb-4">Diskusi</h5>
                    {showCommentBox && <>
                      <div className="d-flex mb-4">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                          <a href=" ">
                            <img className="avatar-img rounded-circle" src={user?.display_picture_link != null ? `${user?.display_picture_link}` : "/assets/images/avatar/empty-display-picture.png"} alt={user?.full_name} />
                          </a>
                        </div>
                        <form className="w-100 d-flex">
                          <textarea className="one form-control pe-4 bg-light" id="autoheighttextarea" rows="1"
                            placeholder="Tambah komentar ..." onChange={(e) => setMyComment(e.target.value)} value={myComment} autoFocus>
                          </textarea>
                          <button className="btn btn-primary ms-2 mb-0" type="button" onClick={() => addComment()}>
                            Kirim
                          </button>
                        </form>
                      </div>
                    </>}
                    {currentDiscussion.Comments.length === 0 && <>
                      <div className="alert alert-info">
                        Belum ada balasan atau komentar pada diskusi ini.
                      </div>
                    </>}
                    {currentDiscussion.Comments.map(comment => <>
                      <ForumComment comment={comment} subjectId={subjectId} sessionId={sessionId} />
                    </>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>}
    </main>

    <Footer />
  </>
}

export default ForumDiscussion;