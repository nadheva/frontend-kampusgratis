import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';
import PageNotFound from '../../components/default/PageNotFound';
import { getCurrentQuizzes, getQuizBySession, getSubject, resetAll, startQuiz, submitQuiz } from '../../features/my-study/myStudySlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const QuizStart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isQuizSubmit, setIsQuizSumbit] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const { sessionId, subjectId } = useParams();
	const [currentQuiz, setCurrentQuiz] = useState({});
	const [currentQuizzes, setCurrentQuizzes] = useState([]);
	const [currentSubject, setCurrentSubject] = useState({});
	const [currentQuizIndex, setCurrentQuizIndex] = useState(-1);

	const { isLoading, data, message } = useSelector(
		(state) => state.myStudy
	);

	const fetchAll = async () => {
		await Promise.all([
			dispatch(getSubject(subjectId)),
			dispatch(getQuizBySession(sessionId)),
			dispatch(getCurrentQuizzes())
		]);

		setIsLoaded(true);
	}

	useEffectOnce(() => {
		dispatch(resetAll());
		fetchAll();
	});

	const takeQuiz = quizId => {
		dispatch(startQuiz(quizId));
	}

	const doSubmitQuiz = () => {
		dispatch(submitQuiz({
			answers: [],
			quizId: currentQuiz.quiz.id,
			materialId: currentQuizzes[currentQuizIndex].material_enrolled_id,
		}));

		setIsQuizSumbit(true);
	}

	useEffect(() => {
		if (message === "SUCCESS_TAKE_QUIZ") navigate(`${data?.quiz_detail?.material_enrolled_id}`);

		if (data?.quizzes) setCurrentQuizzes(data.quizzes);
		if (data?.subject) setCurrentSubject(data.subject);
		if (data?.quiz) setCurrentQuiz(data.quiz);
		if (Object.keys(currentQuizzes).length !== 0 && Object.keys(currentQuiz).length !== 0) {
			let currentindex = currentQuizzes.findIndex(quiz => quiz.id === currentQuiz.id)
			setCurrentQuizIndex(currentindex);

			if (!isQuizSubmit && currentQuizIndex >= 0) {
				if (new Date(currentQuizzes[currentQuizIndex].deadline).getTime() < new Date().getTime()) doSubmitQuiz()
			}
		}
	}, [data, currentQuizzes, currentQuiz, currentQuizIndex, message]);

	if (message === "no quiz found") return <PageNotFound />

	return <>
		<Header />
		<main>
			{isLoading && !isLoaded || Object.keys(currentSubject).length === 0 || Object.keys(currentQuiz).length === 0 ? <>
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
				<section className='pb-0 pt-lg-5'>
					<div className="container">
						<div className="row">
							<div className="card shadow">
								<div className="card-body py-4">
									{currentQuizIndex !== -1 && currentQuizzes.length !== 0 ? <>
										<div className="col-md-12 mb-4">
											<div className="alert alert-info mb-4">
												{/* Kamu telah memulai Quiz ini {(new Date(currentQuizzes[currentQuizIndex].deadline).getTime() - new Date().getTime()).toLocaleString("en-US")} */}
												Kamu telah memulai Quiz ini. Kamu harus menyelesaikan pada <b>{new Date(currentQuizzes[currentQuizIndex].deadline).toISOString().split("T")[0]}, {new Date(currentQuizzes[currentQuizIndex].deadline).toString().split(" ")[4]}</b>
											</div>
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
												<Link className='btn btn-dark' to={`${currentQuizzes[currentQuizIndex]?.material_enrolled_id}`}>
													<i className="fas fa-play me-3"></i>
													Lanjutkan Quiz
												</Link>
											</div>
										</div>
									</> : <>
										<div className="col-lg-12 col-xl-12">
											{currentQuiz.summary.length !== 3 ? <>
												<div className="alert alert-info mb-4">
													Kamu dapat memulai Quiz ini dengan klik tombol `Mulai Quiz` di bawah ini.
												</div>
												<div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
													<div>
														<h5 className="card-title mb-0">
															{currentQuiz.quiz.description}
														</h5>
													</div>
												</div>
												<div className="d-sm-flex align-items-center">
													{isLoading && isLoaded ? <>
														<button className='btn btn-dark' style={{ cursor: 'not-allowed' }}>
															<span className="spinner-border spinner-border-sm"></span>&nbsp;
															&nbsp;Memulai Quiz ...
														</button>
													</> : <>
														<button className='btn btn-dark' onClick={() => takeQuiz(currentQuiz.quiz.id)}>
															<i className="fas fa-play me-3"></i>
															Mulai Quiz
														</button>
													</>}
												</div>
											</> : <>
												<div className="alert alert-info mb-0">
													Kamu sudah mengambil Quiz sebanyak 3 kali dan kamu sudah tidak dapat mengambil Quiz ini lagi.
												</div>
											</>}
										</div>
									</>}
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
									<div className="col-md-12 mb-4">
										<h5>Riwayat Quiz Kamu</h5>
										<div className="row">
											{currentQuiz.summary.length !== 0 ? <>
												{currentQuiz.summary.map((quizTaken, number) => <>
													<div className="col-md-12 col-lg-6 mt-4">
														<div className="card shadow border p-2">
															<div className="card-body">
																<h4 className='card-title'>Quiz Pengambilan Ke-{number + 1}</h4>
																<span className='badge bg-dark'>Pengumpulan kamu : {quizTaken.activity_detail.date_submit}</span>
																<span className='badge bg-info'>Jumlah Soal : {quizTaken.activity_detail.number_of_questions}</span>
																<span className='badge bg-success'>Jawaban Benar : {quizTaken.activity_detail.correct_answers}</span>
																<span className='badge bg-danger'>Jawaban Salah : {quizTaken.activity_detail.number_of_questions - quizTaken.activity_detail.correct_answers}</span>

																<div className='h4 mt-2'>Nilai :</div>
																<div className='h2'>{quizTaken.score}</div>
																{quizTaken.status === "FAILED" ? <>
																	<span className='badge bg-danger'>{quizTaken.status}</span>
																</> : quizTaken.status === "PASSED" ? <>
																	<span className='badge bg-info'>{quizTaken.status}</span>
																</> : <>
																	<span className='badge bg-sucess'>{quizTaken.status}</span>
																</>}
															</div>
														</div>
													</div>
												</>)}
											</> : <>
												<div className="col-md-12">
													{currentQuizIndex !== -1 && currentQuizzes.length !== 0 ? <>
														<div className="alert alert-danger mb-0 mt-1">
															Kamu sedang memulai Quiz. Kamu tidak dapat melihat riwayat Quiz kamu!
														</div>
													</> : <>
														<div className="alert alert-info mb-0 mt-1">
															Belum ada Quiz yang telah kamu selesaikan saat ini.
														</div>
													</>}
												</div>
											</>}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>}
		</main >
		<Footer />
	</>
}

export default QuizStart;