import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getModuleBySession, getSubject, resetAll } from '../../features/my-study/myStudySlice';
import useEffectOnce from '../../helpers/useEffectOnce';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';
import ModuleDetail from '../../components/My-Study/ModuleDetail';

const Module = () => {
  const dispatch = useDispatch();

  const { subjectId, sessionId, moduleId } = useParams();
  const [modules, setModules] = useState([]);
  const [currentSubject, setCurrentSubject] = useState({});
  const { data, message, isLoading } = useSelector(
    (state) => state.myStudy
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getModuleBySession(sessionId))
    ]);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.modules) setModules(data.modules);
    // if (message === 'Subject ID not found' || !subjectId || subjectId.length !== 36) return <PageNotFound />
  }, [data]);

  return <>
    <Header />
    <main>
      {isLoading || currentSubject.length === 0 || modules.length === 0 ? <>
        <section className='bg-light py-0 py-sm-5'>
          <div className='container text-center' style={{ marginTop: '165px', marginBottom: '165px' }}>
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
                      <li className='breadcrumb-item active' aria-current='page'>Modul</li>
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
              {isLoading && modules ? (
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
                {modules.map((module, i) => <><ModuleDetail module={module} key={i} count={i} /></>)}
              </>)}
            </div>
          </div>
        </section>
      </>}
    </main>
    <Footer />
  </>
}

export default Module;