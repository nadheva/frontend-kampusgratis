import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/default/Footer";
import Header from "../../components/default/Header";
import PageNotFound from "../../components/default/PageNotFound";
import {
	getCurrentQuizzes,
	getQuestions,
	getSubject,
	resetAll,
	submitQuiz,
} from "../../features/my-study/myStudySlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const QuizDetail = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const userAnswersTemp = localStorage.getItem("quiz-attempt");
	const { subjectId, materialId, sessionId } = useParams();

	const [userAnswersTempDecoded, setUserAnswersTempDecoded] = useState({});
	const [currentQuiz, setCurrentQuiz] = useState({});
	const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
	const [currentSubject, setCurrentSubject] = useState({});
	const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
	const [userAnswers, setUserAnswers] = useState({});
	const [userAnswersDoubt, setUserAnswersDoubt] = useState({});

	const [userCache, setUserCache] = useState({});

	const { data, isLoading, message } = useSelector((state) => state.myStudy);

	const fetchAll = async () => {
		await Promise.all([
			dispatch(getSubject(subjectId)),
			dispatch(getCurrentQuizzes()),
			dispatch(getQuestions(materialId)),
		]);
	};

	useEffectOnce(() => {
		dispatch(resetAll());
		fetchAll();
	});

	const onUserAnswer = (e) => {
		setUserAnswers((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onUserDoubt = () => {
		setUserAnswersDoubt((prevState) => ({
			...prevState,
			[`answer-${currentQuizNumber}`]:
				!Object.values(userAnswersDoubt)[currentQuizNumber - 1],
		}));
	};

	const doSubmitQuiz = () => {
		console.log(location.pathname.split("/").pop());
		console.log(location.pathname.split("/").pop().join("/"));

		let answersDoubt = Object.values(userAnswersDoubt);
		if (answersDoubt.find((data) => data === true))
			return toast.error("Kamu masih memiliki jawaban yang ragu.");

		let answers = Object.values(userAnswers);
		if (answers.length !== currentQuiz.length)
			return toast.error("Kamu belum menjawab semua soal yang tersedia.");

		// dispatch(submitQuiz({
		//   answers,
		//   quizId: currentQuiz.quiz_id,
		//   materialId: currentQuiz.material_enrolled_id
		// }));
	};

	useEffect(() => {
		// if (message === "QUIZ_SUBMITED") navigate();

		if (data?.subject) setCurrentSubject(data.subject);
		if (data?.questions && Object.keys(currentQuizQuestions).length === 0) {
			setCurrentQuiz(data.questions);
			setCurrentQuizQuestions(data.questions.quiz.questions);

			setUserCache(JSON.parse(userAnswersTemp));

			if (Object.values(userCache).length !== 0) {
				if (userCache[0].answers.length !== 0) {
					userCache[0].answers.map((answer, number) => {
						setUserAnswers((prevState) => ({
							...prevState,
							[`answer-${number + 1}`]: answer,
						}));
					});

					userCache[0].answers_doubt.map((answer, number) => {
						setUserAnswersDoubt((prevState) => ({
							...prevState,
							[`answer-${number + 1}`]: answer,
						}));
					});
				}
			} else {
				let questionsAndAnswers = {
					quiz_id: currentQuiz.quiz_id,
					material_id: currentQuiz.material_enrolled_id,
					answers: Object.values(userAnswers),
					answers_doubt: Object.values(userAnswersDoubt),
				};

				currentQuizQuestions.map((_, number) => {
					setUserAnswersDoubt((prevState) => ({
						...prevState,
						[`answer-${number + 1}`]: false,
					}));

					setUserAnswers((prevState) => ({
						...prevState,
						[`answer-${number + 1}`]: null,
					}));
				});

				localStorage.setItem(
					"quiz-attempt",
					JSON.stringify([questionsAndAnswers])
				);
			}
		}
	}, [
		data,
		currentQuizNumber,
		userAnswersTemp,
		userAnswers,
		userAnswersDoubt,
		location,
	]);

	if (message === "Invalid type of data.") return <PageNotFound />;

	return (
		<>
			<Header />
			<main>
				{isLoading || Object.keys(currentQuizQuestions).length === 0 ? (
					<>
						<section className="bg-light py-0 py-sm-5">
							<div
								className="container text-center"
								style={{ marginTop: "188px", marginBottom: "188px" }}
							>
								<div className="row">
									<div className="col-12">
										<div className="spinner-border" role="status">
											<span className="visually-hidden">Loading...</span>
										</div>
									</div>
								</div>
							</div>
						</section>
					</>
				) : (
					<>
						<section
							className="bg-blue align-items-center d-flex"
							style={{
								background:
									"url('/assets/images/pattern/04.png') no-repeat center center",
								backgroundSize: "cover",
							}}
						>
							<div className="container">
								<div className="row">
									<div className="col-12 text-center">
										<h1 className="text-white">{currentSubject.name}</h1>
										<div className="d-flex justify-content-center">
											<nav aria-label="breadcrumb">
												<ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
													<li className="breadcrumb-item">
														<Link to="/kategori">Kategori</Link>
													</li>
													<li className="breadcrumb-item">
														<Link to="/studi-ku">Studi-Ku</Link>
													</li>
													<li className="breadcrumb-item">
														<Link to={`/studi-ku/${subjectId}`}>
															Mata Kuliah
														</Link>
													</li>
													<li className="breadcrumb-item">
														<Link
															to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/quiz`}
														>
															Quiz
														</Link>
													</li>
													<li
														className="breadcrumb-item active"
														aria-current="page"
													>
														Soal
													</li>
												</ol>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="pb-0 py-lg-5">
							<div className="container">
								<div className="row">
									<div className="card shadow">
										<div className="card-body py-4">
											{/* <h4 className='m-3'>{data?.questions?.quiz?.description}</h4> */}
											<div className="row">
												<div className="col-lg-8 my-2 order-1">
													<div className="card bg-transparent border rounded-3 mb-1">
														<div className="bs-stepper stepper-outline">
															<div className="card-body">
																<div className="bs-stepper-content pt-1">
																	<form>
																		{currentQuizQuestions.map(
																			(question, number) => (
																				<>
																					<div
																						className={`content dstepper-block ${
																							currentQuizNumber === number + 1
																								? "active"
																								: "fade dstepper-none"
																						}`}
																					>
																						<h5>
																							{number + 1}. {question.question}
																						</h5>
																						<hr />
																						<div className="vstack gap-2">
																							{question.choices.map(
																								(choice, choiceNumber) => (
																									<>
																										<input
																											type="radio"
																											className="btn-check"
																											name={`answer-${
																												number + 1
																											}`}
																											id={`option${number}${
																												(choiceNumber + 1) *
																												choiceNumber
																											}`}
																											value={choice}
																											onChange={onUserAnswer}
																											checked={
																												userAnswers[
																													`answer-${number + 1}`
																												] === choice
																											}
																										/>
																										<label
																											className="btn btn-outline-primary w-100"
																											htmlFor={`option${number}${
																												(choiceNumber + 1) *
																												choiceNumber
																											}`}
																										>
																											{choice}
																										</label>
																									</>
																								)
																							)}
																						</div>
																						<div className="d-flex justify-content-center mt-3">
																							{currentQuizNumber !== 1 && (
																								<>
																									<button
																										type="button"
																										className="btn btn-primary mb-0"
																										onClick={() =>
																											setCurrentQuizNumber(
																												currentQuizNumber - 1
																											)
																										}
																									>
																										<i className="fa fa-arrow-left"></i>{" "}
																										<span className="d-md-inline d-none ms-2">
																											Pertanyaan Sebelumnya
																										</span>
																									</button>
																								</>
																							)}
																							&nbsp;
																							{!Object.values(userAnswersDoubt)[
																								currentQuizNumber - 1
																							] ? (
																								<>
																									<button
																										type="button"
																										className="btn btn-warning mb-0"
																										onClick={() =>
																											onUserDoubt()
																										}
																									>
																										<i className="fa fa-solid fa-question"></i>{" "}
																										<span className="d-md-inline d-none ms-2">
																											Ragu
																										</span>
																									</button>
																								</>
																							) : (
																								<>
																									<button
																										type="button"
																										className="btn btn-secondary mb-0"
																										onClick={() =>
																											onUserDoubt()
																										}
																									>
																										<i className="fa fa-solid fa-question"></i>{" "}
																										<span className="d-md-inline d-none ms-2">
																											Tidak Ragu
																										</span>
																									</button>
																								</>
																							)}
																							&nbsp;
																							{currentQuizNumber !==
																								currentQuizQuestions.length && (
																								<>
																									<button
																										type="button"
																										className="btn btn-primary mb-0"
																										onClick={() =>
																											setCurrentQuizNumber(
																												currentQuizNumber + 1
																											)
																										}
																									>
																										<i className="fa fa-arrow-right"></i>{" "}
																										<span className="d-md-inline d-none ms-2">
																											Pertanyaan Selanjutnya
																										</span>
																									</button>
																								</>
																							)}
																							&nbsp;
																							{currentQuizNumber ===
																								currentQuizQuestions.length && (
																								<>
																									<button
																										type="button"
																										className="btn btn-success mb-0"
																										onClick={doSubmitQuiz}
																									>
																										<i className="fa fa-paper-plane"></i>{" "}
																										Submit Quiz
																									</button>
																								</>
																							)}
																						</div>
																					</div>
																				</>
																			)
																		)}
																	</form>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4 my-2 order-lg-2">
													<div className="card bg-transparent border rounded-3 mb-1">
														<h6 className="text-danger text-center mt-4">
															<i className="bi bi-clock-history me-2"></i>
															Time Left: 00:01:30
														</h6>
														<div className="px-4 mx-3 py-4">
															<p className="h5">Daftar Soal :</p>
															<div className="btn-group d-block">
																{currentQuizQuestions.map((_, number) => (
																	<>
																		<button
																			className={`btn ${
																				Object.values(userAnswersDoubt)[number]
																					? "btn-warning"
																					: currentQuizNumber === number + 1
																					? "btn-primary"
																					: Object.values(userAnswers)[number]
																					? "btn-success"
																					: "btn-outline-primary"
																			} me-1`}
																			onClick={() =>
																				setCurrentQuizNumber(number + 1)
																			}
																		>
																			{number + 1}
																		</button>
																	</>
																))}
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
					</>
				)}
			</main>
			<Footer />
		</>
	);
};

export default QuizDetail;
