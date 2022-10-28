import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';
import { resetAll, getSubject, getDiscussions } from '../../features/my-study/myStudySlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const ForumBase = () => {
  const dispatch = useDispatch();

  const [currentSubject, setCurrentSubject] = useState({});
  const [currentDiscussions, setCurrentDiscussions] = useState([]);
  const [isPageLoad, setIsPageLoad] = useState(false);

  const { subjectId, sessionId, moduleId } = useParams();

  const { isLoading, data, message } = useSelector(
    (state) => state.myStudy
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getDiscussions(sessionId))
    ]);

    setIsPageLoad(true);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.discussions) setCurrentDiscussions(data.discussions);
  }, [data, isPageLoad]);

  return <>
    <Header />
    <main>
      {isLoading || !isPageLoad || !currentSubject ? <>
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
                      <li className='breadcrumb-item active' aria-current='page'>Forum</li>
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
                      <li className='breadcrumb-item active' aria-current='page'>Forum</li>
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
                    <h4 className="mb-4">Daftar Diskusi</h4>
                    {currentDiscussions.length === 0 ? <>
                      <div className="alert alert-info mt-4">
                        Belum ada diskusi yang telah dibuat. Silahkan buka lagi dilain waktu.
                      </div>
                    </> : <>
                      <div className="card-body p-0 pt-3">
                        <div className="vstack gap-3 mb-2"></div>
                        {currentDiscussions.map(discussion => <>
                          <div className="card shadow h-100 mb-4">
                            <div className="card-body p-3">
                              <div className="d-sm-flex justify-content-sm-between mb-3">
                                <div className="d-flex align-items-center">
                                  <div className="avatar avatar-sm flex-shrink-0">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={discussion.User.display_picture_link}
                                      alt={discussion.User.full_name}
                                    />
                                  </div>
                                  <div className="ms-2">
                                    <h6 className="mb-0">
                                      <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum/${discussion.id}`}>
                                        {discussion.User.full_name}
                                      </Link>
                                    </h6>
                                    <small>
                                      {currentSubject.name} - {discussion.created_at.split("T")[0].split("-").reverse().join("/")} - {discussion.created_at.split("T")[1].split(".")[0]}
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/forum/${discussion.id}`}>
                                <h5>{discussion.title}</h5>
                              </Link>
                              <p className="mb-2">
                                {discussion.content}
                              </p>
                            </div>
                          </div>
                        </>)}
                      </div>
                    </>}
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

export default ForumBase;