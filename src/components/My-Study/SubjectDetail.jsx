import React from 'react';
import { Link } from 'react-router-dom';

const SubjectDetail = ({ subject, sessions }) => {
	return <>
		<img className='img-thumbnail p-2' src={subject.thumbnail_link} alt={subject.name} style={{ height: '360px', objectFit: 'cover' }} />
		<div className="col-lg-12 mt-4">
			<div className="card shadow rounded-2 p-0">
				<div className="card-header border-bottom px-4 py-3">
					<ul className="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">
						<li className="nav-item me-2 me-sm-4" role="presentation">
							<button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill"
								data-bs-target="#studi-ku-peninjauan" type="button" role="tab" aria-controls="studi-ku-peninjauan"
								aria-selected="true">Peninjauan</button>
						</li>
						<li className="nav-item me-2 me-sm-4" role="presentation">
							<button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill"
								data-bs-target="#studi-ku-pertemuan-mata-kuliah" type="button" role="tab" aria-controls="studi-ku-pertemuan-mata-kuliah"
								aria-selected="false">Pertemuan Mata Kuliah</button>
						</li>
					</ul>
				</div>
				<div className="card-body p-4">
					<div className="tab-content pt-2" id="course-pills-tabContent">
						<div className="tab-pane fade show active" id="studi-ku-peninjauan" role="tabpanel"
							aria-labelledby="course-pills-tab-1">
							<h5 className="mb-3">Deskripsi Mata Kuliah</h5>
							{subject.description ? subject.description : <>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos placeat odio blanditiis est autem dolorem esse accusantium nesciunt debitis amet obcaecati magni molestias, sit soluta dolores corrupti alias totam.
							</>}
						</div>
						<div className="tab-pane fade" id="studi-ku-pertemuan-mata-kuliah" role="tabpanel" aria-labelledby="course-pills-tab-2">
							<div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
								{sessions.map((session, i) => <>
									{session.session_no === 0
										? <></>
										: <>
											<div className="accordion-item mb-3">
												{console.log(session.session_lock)}
												{session.session_lock ? <>
													<h6 className="accordion-header font-base" id={`heading-${i + 1}`}>
														<button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
															style={{ cursor: "not-allowed" }}
															type="button">
															<i className="bi bi-lock-fill me-2"></i> Pertemuan {session.session_no}
														</button>
													</h6>
												</> : <>
													<h6 className="accordion-header font-base" id={`heading-${i + 1}`}>
														<button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
															type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-session-${i}`} aria-expanded='false'
															aria-controls={`collapse-session-${i}`}>
															Pertemuan {session.session_no}
														</button>
													</h6>
													<div id={`collapse-session-${i}`} className="accordion-collapse collapse"
														data-bs-parent="#accordionExample2">
														<div className="accordion-body mt-3">
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/modul`}
																			className="icon-md mb-0 position-static flex-shrink-0 text-body">
																			<i className="fas fa-fw fa-file fs-5"></i>
																		</Link>
																		<div className="ms-3">
																			<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/modul`}
																				className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Modul
																				<span className="small mb-2 ms-3 mb-sm-0">Dokumen dan Vidio</span>
																			</Link>
																		</div>
																	</div>
																</div>
																{!session?.is_locked ? <>
																	<span className="p-2 mb-0 text-success"
																		data-bs-toggle="tooltip" data-bs-placement="top"
																		title="Dokumen dan Vidio Telah Selesai">
																		<i className="bi bi-check-circle-fill"></i>
																	</span>
																</> : <>
																	<span className="p-2 mb-0 text-secondary"
																		data-bs-toggle="tooltip" data-bs-placement="top"
																		title="Dokumen dan Vidio Belum Selesai">
																		<i className="bi bi-check-circle-fill"></i>
																	</span>
																</>}
															</div>
															<hr />
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		{session.is_locked ? <>
																			<span
																				style={{ cursor: "not-allowed" }}
																				className="icon-md mb-0 position-static flex-shrink-0 text-body">
																				<i className="fas fa-question-circle fa-fw fs-5"></i>
																			</span>
																			<div className="ms-3">
																				<span
																					style={{ cursor: "not-allowed" }}
																					className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
																					Quiz
																				</span>
																			</div>
																		</> : <>
																			<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/quiz`}
																				className="icon-md mb-0 position-static flex-shrink-0 text-body">
																				<i className="fas fa-question-circle fa-fw fs-5"></i>
																			</Link>
																			<div className="ms-3">
																				<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/quiz`}
																					className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
																					Quiz
																				</Link>
																			</div>
																		</>}
																	</div>
																</div>
																{session?.quiz_done ? <>
																	<span className="p-2 mb-0 text-success"
																		data-bs-toggle="tooltip" data-bs-placement="top"
																		title="Quiz Telah Selesai">
																		<i className="bi bi-check-circle-fill"></i>
																	</span>
																</> : <>
																	{session.is_locked ? <>
																		<span className="p-2 mb-0 text-secondary"
																			data-bs-toggle="tooltip" data-bs-placement="top"
																			title="Dokumen dan Vidio Belum Selesai"
																			style={{ cursor: "not-allowed" }}>
																			<i className="bi bi-lock-fill"></i>
																		</span>
																	</> : <>
																		<span className="p-2 mb-0 text-secondary"
																			data-bs-toggle="tooltip" data-bs-placement="top"
																			title="Quiz Belum Selesai">
																			<i className="bi bi-check-circle-fill"></i>
																		</span>
																	</>}
																</>}
															</div>
															<hr />
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		{session.is_locked ? <>
																			<span
																				style={{ cursor: "not-allowed" }}
																				className="icon-md mb-0 position-static flex-shrink-0 text-body">
																				<i className="fas fa-fw fa-file-signature fs-5"></i>
																			</span>
																			<div className="ms-3">
																				<span
																					style={{ cursor: "not-allowed" }}
																					className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
																					Penugasan
																				</span>
																			</div>
																		</> : <>
																			<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/penugasan`}
																				className="icon-md mb-0 position-static flex-shrink-0 text-body">
																				<i className="fas fa-list fa-fw fs-5"></i>
																			</Link>
																			<div className="ms-3">
																				<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/penugasan`}
																					className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
																					Penugasan
																				</Link>
																			</div>
																		</>}
																	</div>
																</div>
																{subject?.assignment_done ? <>
																	<span className="p-2 mb-0 text-success"
																		data-bs-toggle="tooltip" data-bs-placement="top"
																		title="Penugasan Telah Selesai">
																		<i className="bi bi-check-circle-fill"></i>
																	</span>
																</> : <>
																	{session.is_locked ? <>
																		<span className="p-2 mb-0 text-secondary"
																			style={{ cursor: "not-allowed" }}
																			data-bs-toggle="tooltip" data-bs-placement="top"
																			title="Dokumen dan Vidio Belum Selesai">
																			<i className="bi bi-lock-fill"></i>
																		</span>
																	</> : <>
																		<span className="p-2 mb-0 text-secondary"
																			data-bs-toggle="tooltip" data-bs-placement="top"
																			title="Penugasan Belum Selesai">
																			<i className="bi bi-check-circle-fill"></i>
																		</span>
																	</>}
																</>}
															</div>
															<hr />
															<div className="d-flex justify-content-between align-items-center">
																<div className="position-relative d-flex align-items-center">
																	<div className="d-flex align-items-center">
																		<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/forum`}
																			className="icon-md mb-0 position-static flex-shrink-0 text-body">
																			<i className="fas fa-comment fa-fw fs-5"></i>
																		</Link>
																		<div className="ms-3">
																			<Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/forum`}
																				className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
																				Forum dan Diskusi
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</>}
											</div>
										</>
									}
								</>)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default SubjectDetail;