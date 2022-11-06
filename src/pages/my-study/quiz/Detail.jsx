import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Footer from '../../../components/default/Footer';
import Header from '../../../components/default/Header';
import { getCurrentQuizzes, getQuestions, getSubject, resetAll, submitQuiz } from '../../../features/my-study/myStudySlice';
import useEffectOnce from '../../../helpers/useEffectOnce';

const Detail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { subjectId, sessionId, materialId } = useParams();

  const localData = localStorage.getItem("quiz-attempt");

  const [isLoaded, setIsLoaded] = useState(false);
  const [userCache, setUserCache] = useState([]);

  const [userChanged, setUserChanged] = useState(false);
  const [currentQuizNumber, setQuizNumber] = useState(1);
  const [currentSubject, setCurrentSubject] = useState({});
  const [currentQuiz, setQuiz] = useState({});

  const [questions, setQuestions] = useState([]);
  const [questionsAnswers, setQuestionsAnswers] = useState({});

  const { data, isLoading, isSuccess, message } = useSelector(
    (state) => state.myStudy
  );

  // const compare = (x, y) => {
  //   const srt = (obj) => JSON.stringify(obj)?.split('').sort().join('');
  //   return srt(x) === srt(y);
  // };

  const onUserAnswer = (e) => {
    setUserChanged(true);
    setQuestionsAnswers(prevState => ({
      ...prevState,
      [e.target.name]: {
        doubt: questionsAnswers[`${e.target.name}`].doubt,
        answer: e.target.value
      }
    }));
  }

  const onUserDoubt = () => {
    let target_name = `question-${currentQuizNumber}`;

    for (const [key, value] of Object.entries(questionsAnswers)) {
      if (key === target_name) {
        setUserChanged(true);
        setQuestionsAnswers((prevState) => ({
          ...prevState,
          [target_name]: { ...value, doubt: !value.doubt }
        }));
      }
    }
  }

  const onUserSubmit = () => {
    let answers = [];

    for (const [_, value] of Object.entries(questionsAnswers)) {
      if (value.answer === null) return toast.warning("Kamu harus menjawab semua pertanyaan sebelum submit quiz.");
      else answers.push(value.answer);
    }

    dispatch(submitQuiz({
      answers,
      quizId: currentQuiz.quiz_id,
      materialId: currentQuiz.material_enrolled_id
    }));
  }

  const fetchAll = async () => {
    await Promise.all([
      dispatch(getSubject(subjectId)),
      dispatch(getCurrentQuizzes()),
      dispatch(getQuestions(materialId))
    ]);

    setIsLoaded(true);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    fetchAll();
  });

  useEffectOnce(() => {
    if (localData) setUserCache(JSON.parse(localData));
    else setUserCache([]);
  });

  useEffect(() => {
    if (data?.subject) setCurrentSubject(data.subject);
    if (data?.questions?.quiz?.questions) {
      setQuiz(data.questions);
      setQuestions(data.questions.quiz.questions);
    }

    if (message === "QUIZ_SUBMITED" && isSuccess) {
      toast.success("Quiz kamu telah dikirim. Halaman telah dialihkan.");
      dispatch(resetAll());
      localStorage.removeItem('quiz-attempt');

      let redirect_location = location.pathname.split("/");
      redirect_location.pop()

      navigate(redirect_location.join("/"));
    }

    if (localData === null && userCache.length === 0 && currentQuiz && questions) {
      if (Object.keys(questionsAnswers).length === 0) {
        questions.map((_, number) => {
          setQuestionsAnswers((prevState) => ({
            ...prevState,
            [`question-${number + 1}`]: {
              doubt: false,
              answer: null
            }
          }));
        });
      } else if (Object.keys(questionsAnswers).length !== 0) {
        let questionsAndAnswers = {
          quiz_id: currentQuiz.quiz_id,
          material_id: currentQuiz.material_enrolled_id,
          answers: questionsAnswers
        };

        setUserCache([questionsAndAnswers]);
        localStorage.setItem('quiz-attempt', JSON.stringify([questionsAndAnswers]));
      }
    } else {
      if (Object.keys(questionsAnswers).length === 0 && userCache.length !== 0) {
        for (const [key, value] of Object.entries(userCache[0].answers)) {
          setQuestionsAnswers((prevState) => ({
            ...prevState,
            [key]: value
          }));
        }

        toast.info("Jawaban kamu telah disinkronisasi pada sesi sebelumnya.")
      } else if (questions && Object.keys(questionsAnswers).length !== 0 && userChanged) {
        let questionsAndAnswers = {
          quiz_id: currentQuiz.quiz_id,
          material_id: currentQuiz.material_enrolled_id,
          answers: questionsAnswers
        };

        setUserCache([questionsAndAnswers]);

        localStorage.setItem('quiz-attempt', JSON.stringify([questionsAndAnswers]));

        setUserChanged(false);
      }
    }
  }, [data, userCache, currentQuiz, userChanged]);

  return <>
    <Header />
    <main>
      {isLoading && !isLoaded || Object.keys(questions).length === 0 || Object.keys(questionsAnswers).length === 0 ? <>
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
                      <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/quiz`}>Quiz</Link></li>
                      <li className='breadcrumb-item active' aria-current='page'>Soal</li>
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
                  <div className="row">
                    <div className="col-lg-8 my-2 order-1">
                      <div className="card bg-transparent border rounded-3 mb-1">
                        <div className='bs-stepper stepper-outline'>
                          <div className="card-body">
                            <div className="bs-stepper-content pt-1">
                              {questions.map((question, number) => <>
                                <div className={`content dstepper-block ${currentQuizNumber === number + 1 ? 'active' : 'fade dstepper-none'}`}>
                                  <h5>{number + 1}. {question.question}</h5>
                                  <hr />
                                  <div className="vstack gap-2">
                                    {question.choices.map((choice, choiceNumber) => <>
                                      <input type="radio" className="btn-check" name={`question-${number + 1}`} id={`option${number}${(choiceNumber + 1) * choiceNumber}`} value={choice} onChange={onUserAnswer} checked={questionsAnswers[`question-${number + 1}`].answer === choice} disabled={isLoading} />
                                      <label className="btn btn-outline-primary w-100" htmlFor={`option${number}${(choiceNumber + 1) * choiceNumber}`}>
                                        {choice}
                                      </label>
                                    </>)}
                                  </div>
                                  <div className="d-flex justify-content-center mt-3">
                                    {currentQuizNumber !== 1 && <>
                                      <button type="button" className="btn btn-primary mb-0 me-1" onClick={() => setQuizNumber(currentQuizNumber - 1)} disabled={isLoading}>
                                        <i className="fa fa-arrow-left"></i> <span className='d-md-inline d-none ms-2'>Pertanyaan Sebelumnya</span>
                                      </button>
                                    </>}
                                    {!questionsAnswers[`question-${currentQuizNumber}`].doubt ? <>
                                      <button type="button" className="btn btn-warning mb-0" onClick={() => onUserDoubt()} disabled={isLoading}>
                                        <i className="fa fa-solid fa-question"></i> <span className='d-md-inline d-none ms-2'>Ragu</span>
                                      </button>
                                    </> : <>
                                      <button type="button" className="btn btn-secondary mb-0" onClick={() => onUserDoubt()} disabled={isLoading}>
                                        <i className="fa fa-solid fa-question"></i> <span className='d-md-inline d-none ms-2'>Tidak Ragu</span>
                                      </button>
                                    </>}
                                    {currentQuizNumber !== questions.length && <>
                                      <button type="button" className="btn btn-primary mb-0 ms-1" onClick={() => setQuizNumber(currentQuizNumber + 1)} disabled={isLoading}>
                                        <span className='d-md-inline d-none me-2'>Pertanyaan Selanjutnya</span> <i className="fa fa-arrow-right"></i>
                                      </button>
                                    </>}
                                    {currentQuizNumber === questions.length && <>
                                      {isLoading ? <>
                                        <button className="btn btn-success mb-0 ms-1" disabled={isLoading}>
                                          <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                          &nbsp;Mengirim ...
                                        </button>
                                      </> : <>
                                        <button type="button" className="btn btn-success mb-0 ms-1" onClick={onUserSubmit}>
                                          <i className="fa fa-paper-plane"></i> Submit Quiz
                                        </button>
                                      </>}
                                    </>}
                                  </div>
                                </div>
                              </>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 my-2 order-lg-2">
                      <div className="card bg-transparent border rounded-3 mb-1">
                        {/* <h6 className="text-danger text-center mt-4">
                          <i className="bi bi-clock-history me-2"></i>
                          Time Left: 00:01:30
                        </h6> */}
                        <div className="px-4 mx-3 py-4">
                          <p className='h5'>Daftar Soal :</p>
                          <div className="d-block mt-3">
                            {questions.map((_, number) => <>
                              {questionsAnswers[`question-${number + 1}`].doubt ? <>
                                <button className={`btn ${currentQuizNumber === number + 1 ? "btn-info" : "btn-warning"} me-1`}
                                  onClick={() => setQuizNumber(number + 1)}>{number + 1}
                                </button>
                              </> : <>
                                {questionsAnswers[`question-${number + 1}`].answer !== null ? <>
                                  <button className={`btn ${currentQuizNumber === number + 1 ? "btn-info" : "btn-primary"} me-1`}
                                    onClick={() => setQuizNumber(number + 1)}>{number + 1}
                                  </button>
                                </> : <>
                                  <button className={`btn ${currentQuizNumber === number + 1 ? "btn-info" : "btn-primary-soft"} me-1`}
                                    onClick={() => setQuizNumber(number + 1)}>{number + 1}
                                  </button>
                                </>}
                              </>}
                            </>)}
                          </div>
                        </div>
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

export default Detail;