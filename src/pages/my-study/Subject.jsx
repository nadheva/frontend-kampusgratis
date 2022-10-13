import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import PageNotFound from '../../components/default/PageNotFound';
import useEffectOnce from '../../helpers/useEffectOnce';
import { getSubject } from '../../features/my-study/myStudySlice';

const Subject = () => {
  const [currentSubject, setCurrentSubject] = useState({});
  const dispatch = useDispatch();

  const { subjectId } = useParams();
  const { data, message, isLoading } = useSelector(
    (state) => state.myStudy
  );

  useEffectOnce(() => {
    dispatch(getSubject(subjectId));
  });

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (message === 'Subject ID not found' || !subjectId || subjectId.length !== 36) return <PageNotFound />

    console.log(currentSubject, "");
  }, [data]);

  return <>
    <Header />
    <main>
      {isLoading || !currentSubject ? <>
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
                      <li className='breadcrumb-item active' aria-current='page'>Mata Kuliah</li>
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
                      <li className='breadcrumb-item active' aria-current='page'>Mata Kuliah</li>
                    </ol>
                  </nav>
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

export default Subject;