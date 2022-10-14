import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getModuleBySession, getSingleModule, getSubject, resetAll } from '../../features/my-study/myStudySlice';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import useEffectOnce from '../../helpers/useEffectOnce';

const ModuleDetail = () => {
  const dispatch = useDispatch();
  const [currentSubject, setCurrentSubject] = useState({});
  const [currentModule, setCurrentModule] = useState({});

  const { subjectId, sessionId, moduleId } = useParams();

  const { data, isLoading } = useSelector(
    (state) => state.myStudy
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getSingleModule(moduleId))
    ]);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.module) setCurrentModule(data.module);
  }, [data, currentSubject, currentModule]);

  return <>
    <Header />
    <main>
      {isLoading || Object.keys(currentSubject).length === 0 || Object.keys(currentModule).length === 0 ? <>
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
                      <li className='breadcrumb-item active' aria-current='page'>Detail</li>
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
                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul`}>Modul</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Detail</li>
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
              {isLoading ? (
                <>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                  <div className="col-sm-12 col-xl-12">
                    <SkeletonTheme>
                      <Skeleton height={50} />
                    </SkeletonTheme>
                  </div>
                </>
              ) : (<>
                <div className="card shadow">
                  <div className="card-body py-4">
                    <div className="col-12">
                      <h5 className="mb-4">List Vidio</h5>
                      {currentModule.videos.map(video => <>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <div className="d-flex">
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-danger-soft btn-round mb-0">
                              <i className="fas fa-play" />
                            </Link>
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                              <h6 className="mb-0">{video.title}</h6>
                            </Link>
                          </div>
                          <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/vidio/${video.id}`} className="btn btn-sm btn-success mb-0 mt-3">
                            Lihat Vidio
                          </Link>
                        </div>
                        <hr />
                      </>)}
                    </div>

                    <div className="col-12">
                      <h5 className="mb-4">List Dokumen</h5>
                      {currentModule.documents.map(document => <>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <div className="d-flex">
                            <a href={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="btn btn-light btn-round mb-0">
                              <i className="fas fa-solid fa-file"></i>
                            </a>
                            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                              <h6 className="mb-0">{document.content}</h6>
                            </Link>
                          </div>
                          <a href={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${moduleId}/dokumen/${document.id}`} className="btn btn-sm btn-success mb-0 mt-3">
                            Lihat Dokumen
                          </a>
                        </div>
                        <hr />
                      </>)}
                    </div>
                  </div>
                </div>
              </>)}
            </div>
          </div>
        </section>
      </>}
    </main>
    <Footer />
  </>
}

export default ModuleDetail;