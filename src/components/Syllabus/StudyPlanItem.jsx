import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { doSendDraft, reset } from "../../features/syllabus/syllabusSlice";

const StudyPlanItem = () => {
	const { data, message, isLoading } = useSelector((state) => state.syllabus);

	const { study_plan } = data || {};

	const dispatch = useDispatch();

	const sendDraft = (e) => {
		e.preventDefault();
		dispatch(doSendDraft());
	};

	useEffect(() => {
		if (message === "Student is not in that major") {
			toast.error(
				"Kamu tidak dapat mengambil mata kuliah ini karena berbeda jurusan."
			);
			dispatch(reset());
		}
	}, [message]);

	return (
		<>
			<div className="card shadow rounded-2 p-0">
				<div className="card-header border-bottom px-4 py-3">
					<h5 className="text-center">Daftar Pengajuan KRS Kamu</h5>
					<p className="text-center">
						Pengajuan ini digunakan untuk mengatur Kartu Rencana Studi (KRS)
						kamu.
					</p>
				</div>
				<div className="card-body">
					<h6 className="">
						Total SKS Kamu: {study_plan.total_credit || 0} SKS
					</h6>
					<div
						className="accordion accordion-icon accordion-bg-light"
						id="accordionSubjects"
					>
						{study_plan?.draft?.subjects.length === 0 ||
						study_plan?.draft?.subjects === undefined ? (
							<>
								<div className="alert alert-secondary">
									Kamu belum memiliki Draft KRS saat ini.
								</div>
							</>
						) : (
							<>
								<div className="accordion-item mb-3">
									<h6
										className="accordion-header font-base"
										id={`heading-draft`}
									>
										<button
											className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse-draft`}
											aria-expanded="false"
											aria-controls={`collapse-draft`}
										>
											Draft KRS
											<span className="small ms-0 ms-sm-2">
												({study_plan?.draft?.subjects.length} Mata Kuliah)
											</span>
										</button>
									</h6>
									{study_plan?.draft?.subjects.length !== 0 ||
										(study_plan?.draft?.subjects !== undefined && (
											<>
												<div
													id={`collapse-draft`}
													className="accordion-collapse collapse"
													aria-labelledby={`heading-draft`}
												>
													<div className="accordion-body mt-3 px-1">
														<ul className="list-group">
															{study_plan?.draft?.subjects.map((subject, i) => (
																<>
																	<li className="list-group-item d-flex justify-content-between align-items-center">
																		<span>
																			{i + 1}. {subject.name} - {subject.credit}{" "}
																			SKS
																		</span>
																		<span className="btn-danger-soft btn-sm px-2 btn-round me-0 user-select-auto my-1">
																			<i className="fa fa-trash-alt fa-fw me-0"></i>
																		</span>
																	</li>
																</>
															))}
															<div class="d-sm-flex justify-content-end mt-2">
																{!isLoading ? (
																	<button
																		type="button"
																		class="btn btn-primary mb-0 btn-sm"
																		onClick={sendDraft}
																	>
																		<i class="bi bi-send me-2"></i>
																		Kirim Draft
																	</button>
																) : (
																	<button
																		className="btn btn-primary mb-0 btn-sm"
																		disabled={isLoading}
																	>
																		<span className="spinner-border spinner-border-sm"></span>
																		&nbsp; &nbsp;Loading...
																	</button>
																)}
															</div>
														</ul>
													</div>
												</div>
											</>
										))}
								</div>
							</>
						)}

						{study_plan?.pending?.subjects.length === 0 ||
						study_plan?.pending?.subjects === undefined ? (
							<>
								<div className="alert alert-secondary">
									Kamu belum memiliki KRS yang tertunda / menunggu konfirmasi.
								</div>
							</>
						) : (
							<>
								<div className="accordion-item mb-3">
									<h6
										className="accordion-header font-base"
										id={`heading-pending`}
									>
										<button
											className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse-pending`}
											aria-expanded="false"
											aria-controls={`collapse-pending`}
										>
											KRS Pending
											<span className="small ms-0 ms-sm-2">
												({study_plan?.pending?.subjects.length} Mata Kuliah)
											</span>
										</button>
									</h6>
									<div
										id={`collapse-pending`}
										className="accordion-collapse collapse"
										aria-labelledby={`heading-pending`}
									>
										<div className="accordion-body mt-3 px-1">
											<ul className="list-group">
												{study_plan?.pending?.subjects.map((subject, i) => (
													<>
														<li className="list-group-item d-flex justify-content-between align-items-center">
															<span>
																{i + 1}. {subject.name}
															</span>
															<button className="btn btn-danger-soft btn-sm px-2 btn-round">
																<i className="fa fa-trash-alt fa-fw"></i>
															</button>
														</li>
													</>
												))}
											</ul>
										</div>
									</div>
								</div>
							</>
						)}

						{study_plan?.ongoing?.subjects.length === 0 ||
						study_plan?.ongoing?.subjects === undefined ? (
							<>
								<div className="alert alert-info">
									Kamu belum memiliki KRS yang sedang berjalan.
								</div>
							</>
						) : (
							<>
								<div className="accordion-item mb-3">
									<h6
										className="accordion-header font-base"
										id={`heading-ongoing`}
									>
										<button
											className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse-ongoing`}
											aria-expanded="false"
											aria-controls={`collapse-ongoing`}
										>
											KRS Terkonfirmasi
											<span className="small ms-0 ms-sm-2">
												({study_plan?.ongoing?.subjects.length} Mata Kuliah)
											</span>
										</button>
									</h6>
									<div
										id={`collapse-ongoing`}
										className="accordion-collapse collapse"
										aria-labelledby={`heading-ongoing`}
									>
										<div className="accordion-body mt-3 px-1">
											<ul className="list-group">
												{study_plan?.ongoing?.subjects.map((subject, i) => (
													<>
														<li className="list-group-item d-flex justify-content-between align-items-center">
															<span>
																{i + 1}. {subject.name}
															</span>
															<span className="btn-success-soft btn-sm px-2 btn-round me-0 user-select-auto my-1">
																<i class="fa fa-check fa-fw me-0"></i>
															</span>
														</li>
													</>
												))}
											</ul>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default StudyPlanItem;
