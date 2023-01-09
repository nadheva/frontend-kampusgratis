import React from "react";
import { Link } from "react-router-dom";

const CardBody = ({ subject, sessions }) => {
	return (
		<div className="card-body p-4">
			<div className="tab-content pt-2" id="course-pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="studi-ku-peninjauan"
					role="tabpanel"
					aria-labelledby="course-pills-tab-1"
				>
					<h5 className="mb-3">Deskripsi Mata Kuliah</h5>
					{subject.description ? (
						subject.description
					) : (
						<>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							dignissimos placeat odio blanditiis est autem dolorem esse
							accusantium nesciunt debitis amet obcaecati magni molestias, sit
							soluta dolores corrupti alias totam.
						</>
					)}
				</div>
				<div
					className="tab-pane fade"
					id="studi-ku-pertemuan-mata-kuliah"
					role="tabpanel"
					aria-labelledby="course-pills-tab-2"
				>
					<div
						className="accordion accordion-icon accordion-bg-light"
						id="accordionExample2"
					>
						{sessions.map((session, i) => (
							<>
								{session.session_no === 0 ? (
									<></>
								) : (
									<>
										<div className="accordion-item mb-3">
											{session.session_lock ? (
												<>
													<h6
														className="accordion-header font-base"
														id={`heading-${i + 1}`}
													>
														<button
															className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
															style={{ cursor: "not-allowed" }}
															type="button"
														>
															<i className="bi bi-lock-fill me-2"></i> Pertemuan{" "}
															{session.session_no}
														</button>
													</h6>
												</>
											) : (
												<>
													<h6
														className="accordion-header font-base"
														id={`heading-${i + 1}`}
													>
														<button
															className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target={`#collapse-session-${i}`}
															aria-expanded="false"
															aria-controls={`collapse-session-${i}`}
														>
															Pertemuan {session.session_no}
														</button>
													</h6>
													<div
														id={`collapse-session-${i}`}
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample2"
													>
														<div className="accordion-body mt-3">
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		<Link
																			to={`/studi-ku/${subject.id}/pertemuan/${session.id}/modul`}
																			className="icon-md mb-0 position-static flex-shrink-0 text-body"
																		>
																			<i className="fas fa-fw fa-file fs-5"></i>
																		</Link>
																		<div className="ms-3">
																			<Link
																				to={`/studi-ku/${subject.id}/pertemuan/${session.id}/modul`}
																				className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
																			>
																				Modul
																				<span className="small mb-2 ms-3 mb-sm-0">
																					Dokumen dan Video
																				</span>
																			</Link>
																		</div>
																	</div>
																</div>
																{!session?.is_locked ? (
																	<>
																		<span
																			className="p-2 mb-0 text-success"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			title="Dokumen dan Video Telah Selesai"
																		>
																			<i className="bi bi-check-circle-fill"></i>
																		</span>
																	</>
																) : (
																	<>
																		<span
																			className="p-2 mb-0 text-secondary"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			title="Dokumen dan Video Belum Selesai"
																		>
																			<i className="bi bi-check-circle-fill"></i>
																		</span>
																	</>
																)}
															</div>
															<hr />
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		{session.is_locked ? (
																			<>
																				<span
																					style={{ cursor: "not-allowed" }}
																					className="icon-md mb-0 position-static flex-shrink-0 text-body"
																				>
																					<i className="fas fa-question-circle fa-fw fs-5"></i>
																				</span>
																				<div className="ms-3">
																					<span
																						style={{ cursor: "not-allowed" }}
																						className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
																					>
																						Quiz
																					</span>
																				</div>
																			</>
																		) : (
																			<>
																				<Link
																					to={`/studi-ku/${subject.id}/pertemuan/${session.id}/quiz`}
																					className="icon-md mb-0 position-static flex-shrink-0 text-body"
																				>
																					<i className="fas fa-question-circle fa-fw fs-5"></i>
																				</Link>
																				<div className="ms-3">
																					<Link
																						to={`/studi-ku/${subject.id}/pertemuan/${session.id}/quiz`}
																						className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
																					>
																						Quiz
																					</Link>
																				</div>
																			</>
																		)}
																	</div>
																</div>
																{session?.quiz_done ? (
																	<>
																		<span
																			className="p-2 mb-0 text-success"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			title="Quiz Telah Selesai"
																		>
																			<i className="bi bi-check-circle-fill"></i>
																		</span>
																	</>
																) : (
																	<>
																		{session.is_locked ? (
																			<>
																				<span
																					className="p-2 mb-0 text-secondary"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					title="Dokumen dan Video Belum Selesai"
																					style={{ cursor: "not-allowed" }}
																				>
																					<i className="bi bi-lock-fill"></i>
																				</span>
																			</>
																		) : (
																			<>
																				<span
																					className="p-2 mb-0 text-secondary"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					title="Quiz Belum Selesai"
																				>
																					<i className="bi bi-check-circle-fill"></i>
																				</span>
																			</>
																		)}
																	</>
																)}
															</div>
															<hr />
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		{session.is_locked ? (
																			<>
																				<span
																					style={{ cursor: "not-allowed" }}
																					className="icon-md mb-0 position-static flex-shrink-0 text-body"
																				>
																					<i className="fas fa-fw fa-file-signature fs-5"></i>
																				</span>
																				<div className="ms-3">
																					<span
																						style={{ cursor: "not-allowed" }}
																						className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
																					>
																						Penugasan
																					</span>
																				</div>
																			</>
																		) : (
																			<>
																				<Link
																					to={`/studi-ku/${subject.id}/pertemuan/${session.id}/penugasan`}
																					className="icon-md mb-0 position-static flex-shrink-0 text-body"
																				>
																					<i className="fas fa-list fa-fw fs-5"></i>
																				</Link>
																				<div className="ms-3">
																					<Link
																						to={`/studi-ku/${subject.id}/pertemuan/${session.id}/penugasan`}
																						className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
																					>
																						Penugasan
																					</Link>
																				</div>
																			</>
																		)}
																	</div>
																</div>
																{session?.assignment_done ? (
																	<>
																		<span
																			className="p-2 mb-0 text-success"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			title="Penugasan Telah Selesai"
																		>
																			<i className="bi bi-check-circle-fill"></i>
																		</span>
																	</>
																) : (
																	<>
																		{session.is_locked ? (
																			<>
																				<span
																					className="p-2 mb-0 text-secondary"
																					style={{ cursor: "not-allowed" }}
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					title="Dokumen dan Video Belum Selesai"
																				>
																					<i className="bi bi-lock-fill"></i>
																				</span>
																			</>
																		) : (
																			<>
																				<span
																					className="p-2 mb-0 text-secondary"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					title="Penugasan Belum Selesai"
																				>
																					<i className="bi bi-check-circle-fill"></i>
																				</span>
																			</>
																		)}
																	</>
																)}
															</div>
															<hr />
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		<Link
																			to={`/studi-ku/${subject.id}/pertemuan/${session.id}/forum`}
																			className="icon-md mb-0 position-static flex-shrink-0 text-body"
																		>
																			<i className="fas fa-comment fa-fw fs-5"></i>
																		</Link>
																		<div className="ms-3">
																			<Link
																				to={`/studi-ku/${subject.id}/pertemuan/${session.id}/forum`}
																				className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
																			>
																				Forum dan Diskusi
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</>
											)}
										</div>
									</>
								)}
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardBody;
