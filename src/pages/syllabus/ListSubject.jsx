import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
	getMyStudyPlan,
	getSubjectsByMajor,
} from "../../features/syllabus/syllabusSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

import { getMe } from "../../features/profile/profileSlice";

import SubjectItem from "../../components/Syllabus/SubjectItem";
import { useState } from "react";

import PageNotFound from "../error/404";

import Header from "../default/Header";
import Footer from "../default/Footer";

const ListSubject = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const { majorId } = useParams();
	const dispatch = useDispatch();

	const { data, message } = useSelector((state) => state.syllabus);

	const { user } = useSelector((state) => state.profile);

	const fetchingData = async () => {
		try {
			await Promise.all([
				dispatch(getMe()),
				dispatch(getSubjectsByMajor(majorId)),
				dispatch(getMyStudyPlan()),
			]);

			setIsLoaded(true);
		} catch (error) {
			console.error(error);
		}
	};

	useEffectOnce(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});

		fetchingData();
	});

	useEffect(() => {
		console.log(isLoaded);
	}, [data, dispatch]);

	if (message === "Major ID not found") return <PageNotFound />;

	return (
		<>
			<Header />
			<main>
				{!isLoaded ? (
					<>
						<section
							className="bg-blue align-items-center d-flex"
							style={{
								background:
									"url(assets/images/pattern/04.png) no-repeat center center",
								backgroundSize: "cover",
							}}
						>
							<div className="container">
								<div className="row">
									<div className="col-12 text-center">
										<h1 className="text-white">...</h1>
										<div className="d-flex justify-content-center">
											<nav aria-label="breadcrumb">
												<ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
													<li className="breadcrumb-item">
														<Link to="/kategori">Kategori</Link>
													</li>
													<li className="breadcrumb-item">
														<Link to="/silabus">Silabus</Link>
													</li>
													<li
														className="breadcrumb-item active"
														aria-current="page"
													>
														Jurusan
													</li>
												</ol>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="bg-light py-0 py-sm-5">
							<div
								className="container text-center"
								style={{ marginTop: "178px", marginBottom: "178px" }}
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
									"url(assets/images/pattern/04.png) no-repeat center center",
								backgroundSize: "cover",
							}}
						>
							<div className="container">
								<div className="row">
									<div className="col-12 text-center">
										<h1 className="text-white">
											{data?.subjects?.major?.name}
										</h1>
										<div className="d-flex justify-content-center">
											<nav aria-label="breadcrumb">
												<ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
													<li className="breadcrumb-item">
														<Link to="/kategori">Kategori</Link>
													</li>
													<li className="breadcrumb-item">
														<Link to="/silabus">Silabus</Link>
													</li>
													<li
														className="breadcrumb-item active"
														aria-current="page"
													>
														Jurusan
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
								<div className="row px-2">
									{user?.role === "guest" && (
										<>
											<div className="alert alert-info">
												Haloo {user?.full_name}! Kamu harus mengirimkan data{" "}
												<Link to="/administrasi">administrasi</Link> sebelum
												mengambil mata kuliah.
											</div>
										</>
									)}
									{user?.role === "student" && (
										<>
											<img
												className="img-thumbnail p-2"
												src={data?.subjects?.major?.thumbnail_link}
												alt={data?.subjects?.major?.name}
												style={{ height: "360px", objectFit: "cover" }}
											/>
											<div className="col-lg-7 mt-4">
												<div className="card shadow rounded-2 p-0">
													<div className="card-header border-bottom px-4 py-3">
														<ul
															className="nav nav-pills nav-tabs-line py-0"
															id="course-pills-tab"
															role="tablist"
														>
															<li
																className="nav-item me-2 me-sm-4"
																role="presentation"
															>
																<button
																	className="nav-link mb-2 mb-md-0 active"
																	id="course-pills-tab-1"
																	data-bs-toggle="pill"
																	data-bs-target="#course-pills-1"
																	type="button"
																	role="tab"
																	aria-controls="course-pills-1"
																	aria-selected="true"
																>
																	Peninjauan
																</button>
															</li>
															<li
																className="nav-item me-2 me-sm-4"
																role="presentation"
															>
																<button
																	className="nav-link mb-2 mb-md-0"
																	id="course-pills-tab-2"
																	data-bs-toggle="pill"
																	data-bs-target="#course-pills-2"
																	type="button"
																	role="tab"
																	aria-controls="course-pills-2"
																	aria-selected="false"
																>
																	Kurikulum
																</button>
															</li>
														</ul>
													</div>
													<div className="card-body p-4">
														<div
															className="tab-content pt-2"
															id="course-pills-tabContent"
														>
															<div
																className="tab-pane fade show active"
																id="course-pills-1"
																role="tabpanel"
																aria-labelledby="course-pills-tab-1"
															>
																<h5 className="mb-3">Course Description</h5>
																<p className="mb-3">
																	Welcome to the{" "}
																	<strong>
																		{" "}
																		Digital Marketing Ultimate Course Bundle -
																		12 Courses in 1 (Over 36 hours of content)
																	</strong>
																</p>
																<p className="mb-3">
																	In this practical hands-on training, you’re
																	going to learn to become a digital marketing
																	expert with this{" "}
																	<strong>
																		{" "}
																		ultimate course bundle that includes 12
																		digital marketing courses in 1!
																	</strong>
																</p>
															</div>
															<div
																className="tab-pane fade"
																id="course-pills-2"
																role="tabpanel"
																aria-labelledby="course-pills-tab-2"
															>
																<div
																	className="accordion accordion-icon accordion-bg-light"
																	id="accordionSubjects"
																>
																	{data &&
																		data?.subjects?.result
																			.slice(1)
																			.map((semester, i) => (
																				<>
																					<div class="accordion-item mb-3">
																						<h6
																							class="accordion-header font-base"
																							id={`heading-${i + 1}`}
																						>
																							<button
																								class="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
																								type="button"
																								data-bs-toggle="collapse"
																								data-bs-target={`#collapse-${
																									i + 1
																								}`}
																								aria-expanded="false"
																								aria-controls={`collapse-${
																									i + 1
																								}`}
																							>
																								Semester {semester.semester}
																								<span class="small ms-0 ms-sm-2">
																									({semester.subjects.length})
																									Dosen atau Mentor
																								</span>
																							</button>
																						</h6>
																						<div
																							id={`collapse-${i + 1}`}
																							class="accordion-collapse collapse"
																							aria-labelledby={`heading-${
																								i + 1
																							}`}
																						>
																							<div class="accordion-body mt-3">
																								{semester.subjects.length ===
																									0 && (
																									<>
																										<div className="alert alert-info">
																											Mata Kuliah belum
																											dimasukkan pada semester
																											ini.
																										</div>
																									</>
																								)}
																								{semester.subjects.map(
																									(subject) => (
																										<>
																											<SubjectItem
																												subject={subject}
																											/>
																											<hr />
																										</>
																									)
																								)}
																							</div>
																						</div>
																					</div>
																				</>
																			))}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-5 mt-4">
												<div className="card card-shadow rounded-2 p-0">
													<div className="card-header border-bottom px-4 py-3">
														<h5 className="text-center">
															Daftar Pengajuan KRS Kamu
														</h5>
														<p className="text-center">
															Pengajuan ini digunakan untuk mengatur Kartu
															Rencana Studi untuk kamu.
														</p>
													</div>
													<div className="card-body">
														<h6 className="">
															Total SKS Kamu: {data?.study_plan.total_credit}{" "}
															SKS
														</h6>
														<div
															className="accordion accordion-icon accordion-bg-light"
															id="accordionSubjects"
														>
															{data?.study_plan &&
																data?.study_plan?.draft?.subjects.length ===
																	0 && (
																	<>
																		<span className="d-block">
																			- Kamu belum memiliki KRS yang terencana.
																		</span>
																	</>
																)}
															{data?.study_plan &&
																data?.study_plan?.draft?.subjects.map(
																	(subject, i) => (
																		<>
																			<div class="accordion-item mb-3">
																				<h6
																					class="accordion-header font-base"
																					id={`heading-${i + 1}`}
																				>
																					<button
																						class="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
																						type="button"
																						data-bs-toggle="collapse"
																						data-bs-target={`#collapse-${
																							i + 1
																						}`}
																						aria-expanded="false"
																						aria-controls={`collapse-${i + 1}`}
																					>
																						subject {subject.subject}
																						<span class="small ms-0 ms-sm-2">
																							(3 Lectures)
																						</span>
																					</button>
																				</h6>
																				<div
																					id={`collapse-${i + 1}`}
																					class="accordion-collapse collapse"
																					aria-labelledby={`heading-${i + 1}`}
																				>
																					<div class="accordion-body mt-3"></div>
																				</div>
																			</div>
																		</>
																	)
																)}

															{data?.study_plan &&
																data?.study_plan?.ongoing?.subjects.length ===
																	0 && (
																	<>
																		<span className="d-block">
																			- Kamu belum memiliki KRS yang sedang
																			berjalan.
																		</span>
																	</>
																)}
															{data?.study_plan &&
																data?.study_plan?.ongoing?.subjects.map(
																	(subject, i) => (
																		<>
																			<div class="accordion-item mb-3">
																				<h6
																					class="accordion-header font-base"
																					id={`heading-${i + 1}`}
																				>
																					<button
																						class="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
																						type="button"
																						data-bs-toggle="collapse"
																						data-bs-target={`#collapse-${
																							i + 1
																						}`}
																						aria-expanded="false"
																						aria-controls={`collapse-${i + 1}`}
																					>
																						subject {subject.subject}
																						<span class="small ms-0 ms-sm-2">
																							(3 Lectures)
																						</span>
																					</button>
																				</h6>
																				<div
																					id={`collapse-${i + 1}`}
																					class="accordion-collapse collapse"
																					aria-labelledby={`heading-${i + 1}`}
																				>
																					<div class="accordion-body mt-3"></div>
																				</div>
																			</div>
																		</>
																	)
																)}

															{data?.study_plan &&
																data?.study_plan?.pending?.subjects.length ===
																	0 && (
																	<>
																		<span className="d-block">
																			- Kamu belum memiliki KRS yang sedang
																			tertunda.
																		</span>
																	</>
																)}
															{data?.study_plan &&
																data?.study_plan?.pending?.subjects.map(
																	(subject, i) => (
																		<>
																			<div class="accordion-item mb-3">
																				<h6
																					class="accordion-header font-base"
																					id={`heading-${i + 1}`}
																				>
																					<button
																						class="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
																						type="button"
																						data-bs-toggle="collapse"
																						data-bs-target={`#collapse-${
																							i + 1
																						}`}
																						aria-expanded="false"
																						aria-controls={`collapse-${i + 1}`}
																					>
																						subject {subject.subject}
																						<span class="small ms-0 ms-sm-2">
																							(3 Lectures)
																						</span>
																					</button>
																				</h6>
																				<div
																					id={`collapse-${i + 1}`}
																					class="accordion-collapse collapse"
																					aria-labelledby={`heading-${i + 1}`}
																				>
																					<div class="accordion-body mt-3"></div>
																				</div>
																			</div>
																		</>
																	)
																)}
														</div>
													</div>
												</div>
											</div>
										</>
									)}
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

export default ListSubject;
