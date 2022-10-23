import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';
import { getQuizBySession, getSubject, resetAll, startQuiz } from '../../features/my-study/myStudySlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const QuizDetail = () => {
  const dispatch = useDispatch();

  const { sessionId, subjectId } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [currentSubject, setCurrentSubject] = useState({});

  const { isLoading, data } = useSelector(
    (state) => state.myStudy
  );

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getQuizBySession(sessionId))
    ]);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  const takeQuiz = quizId => {
    dispatch(startQuiz(quizId));
  }

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.quiz) setCurrentQuiz(data.quiz);

  }, [data]);

  return <>
    <Header />
    <main>
      {isLoading || Object.keys(currentQuiz).length === 0 ? <>
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
                      <li className='breadcrumb-item active' aria-current='page'>Quiz</li>
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
        <section className='bg-blue align-items-center d-flex' style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className="text-white">{currentSubject.name}</h1>
                <div className='d-flex justify-content-center'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                      <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                      <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Quiz</li>
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
                  <div className="col-lg-12 col-xl-12 mb-4">
                    <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                      <div>
                        <h5 className="card-title mb-0">
                          <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${module.id}`}>
                            {currentQuiz.quiz.description}
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="d-sm-flex align-items-center">
                      <button className='btn btn-dark' onClick={() => takeQuiz(currentQuiz.quiz.id)}>
                        <i className="fas fa-play me-3"></i>
                        Mulai Quiz
                      </button>
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

export default QuizDetail;