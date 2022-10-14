import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import useEffectOnce from '../../helpers/useEffectOnce';
import { resetAll, getSubject, getVideo, getSingleModule, getModuleBySession } from '../../features/my-study/myStudySlice';
import { Link, useParams } from 'react-router-dom';

const VideoDetail = () => {
  const dispatch = useDispatch();

  const { subjectId, sessionId, videoId, moduleId } = useParams();
  const [currentSubject, setCurrentSubject] = useState({});
  const [currentVideo, setCurrentVideo] = useState({});
  const [currentModule, setCurrentModule] = useState({});

  const { isLoading, data } = useSelector(
    (state) => state.myStudy
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getSingleModule(moduleId)),
      dispatch(getVideo(videoId)),
    ]);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.module) setCurrentModule(data.module);
    if (data?.video) setCurrentVideo(data.video);
  }, [data, currentSubject, currentModule, currentVideo]);

  return <>
    <Header />
    <main>
      {isLoading || Object.keys(currentVideo).length === 0 || Object.keys(currentModule).length === 0 ? <>
        <section className='bg-blue align-items-center d-flex' style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
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
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul`}>Modul</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}`}>Detail</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Vidio dan Dokumen</li>
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
        <section className="bg-blue align-items-center d-flex" style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">{currentSubject.name}</h1>
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul`}>Modul</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}`}>Detail</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Vidio dan Dokumen</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-3 pt-xl-5">
          <div className="container" data-sticky-container>
            <div className="row g-4">
              <div className="col-xl-8 col-lg-8 col-12">
                <div className="row g-4">
                  {
                    isLoading ? (
                      <div className='row'>
                        <div className="col-sm-12 col-xl-12">
                          <SkeletonTheme>
                            <Skeleton height={300} />
                          </SkeletonTheme>
                        </div>
                        <div className="col-sm-12 col-xl-12">
                          <SkeletonTheme>
                            <Skeleton height={100} />
                          </SkeletonTheme>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="col-12 position-relative">
                          <iframe src={`https://www.youtube.com/embed/${currentVideo.url.split("?v=")[1]}`}
                            title={currentVideo.content}
                            width="100%"
                            height="443px"
                            display="block"
                            position="relative" />
                        </div>
                        <div className="col-lg-12">
                          <div className="bg-body shadow rounded-2 p-4">
                            <h5 className="mb-3 ">{currentVideo.title}</h5>
                            <p className="mb-0">{currentVideo.description}</p>
                          </div>
                        </div>
                      </>
                    )
                  }
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <div data-sticky data-margin-top="80" data-sticky-for="768">
                  <div className="card card-body shadow  p-4">
                    <div className="row g-5">
                      <div className="col-12">
                        <h5 className="mb-4">Vidio Lainnya</h5>
                        {currentModule.videos.map(video => <>
                          <div className="d-sm-flex justify-content-sm-between align-items-center">
                            {video.id !== videoId ? <>
                              <div className="d-flex">
                                <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-danger-soft btn-round mb-0">
                                  <i className="fas fa-play" />
                                </Link>
                                <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                                  <h6 className="mb-0">{video.title}</h6>
                                </Link>
                              </div>
                              <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-sm btn-success mb-0" >
                                Buka
                              </Link>
                            </> : <>
                              <div className="d-flex">
                                <span to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-danger-soft btn-round mb-0" style={{ 'cursor': 'not-allowed' }}>
                                  <i className="fas fa-play" />
                                </span>
                                <span to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center" style={{ 'cursor': 'not-allowed' }}>
                                  <h6 className="mb-0">{video.title}</h6>
                                </span>
                              </div>
                              <span className='badge bg-secondary' style={{ 'cursor': 'not-allowed' }}>Sedang dibuka</span>
                            </>}
                          </div>
                          <hr />
                        </>)}
                      </div>
                      <div className="col-12">
                        <h5 className="mb-4">Dokumen Lainnya</h5>
                        {currentModule.documents.map(document => <>
                          <div className="d-sm-flex justify-content-sm-between align-items-center">
                            <div className="d-flex">
                              <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="btn btn-light text-dark btn-round mb-0">
                                <i className="fas fa-solid fa-file"></i>
                              </Link>
                              <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center" >
                                <h6 className="mb-0">{document.content}</h6>
                              </Link>
                            </div>
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="btn btn-sm btn-success mb-0">
                              Buka
                            </Link>
                          </div>
                          <hr />
                        </>)}
                      </div>
                    </div>
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

export default VideoDetail;