import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	reset,
	takeStudyPlan,
	removeStudyPlan,
} from "../../features/syllabus/syllabusSlice";

import { toast } from "react-toastify";
import { useState } from "react";

const SubjectItem = ({ subject }) => {
	const [studentSubjectIndex, setStudentSubjectIndex] = useState(-1);
	const [subjectsDraft, setSubjectsDraft] = useState([]);
	const dispatch = useDispatch();

	const takeSubject = (subjectId) => {
		if (!subjectId || subjectId.length !== 36)
			return toast.error("Mata Kuliah tidak ditemukan.");

		dispatch(takeStudyPlan(subjectId));
	};

	const removeSubject = (subjectId) => {
		if (!subjectId || subjectId.length !== 36)
			return toast.error("Mata Kuliah tidak ditemukan.");

		dispatch(removeStudyPlan(subjectId));
	};

	const { data, isLoading } = useSelector((state) => state.syllabus);

	useEffect(() => {
		if (data?.study_plan?.draft.subjects) {
			setSubjectsDraft(data?.study_plan?.draft?.subjects);
			setStudentSubjectIndex(
				subjectsDraft.findIndex((e) => e.name === subject.subject.name)
			);
		}
	}, [data, isLoading, subjectsDraft, studentSubjectIndex]);

	return (
		<>
			<div className="d-flex justify-content-between">
				<div className="d-flex justify-content-between align-items-center w-100">
					<span className="text-white btn-round btn-sm mb-0">
						<i className="fas fa-book me-0 text-primary"></i>
					</span>
					<span className="text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-500px">
						{subject.subject.name}
					</span>
					<span className="text-truncate ms-2 mb-0 h6 fw-light w-100px">
						{subject.subject.credit} SKS
					</span>
					<div className="mb-0 h6 fw-light text-start" style={{ width: "43%" }}>
						{subject.subject.level === "Basic" && (
							<span style={{ width: "20px" }} className="w-50 text-success">
								<i className="fas fa-signal fa-fw me-3 p-1"></i>
								<label className="d-none d-sm-inline">Basic</label>
							</span>
						)}
						{subject.subject.level === "Intermediate" && (
							<span style={{ width: "20px" }} className="w-50 text-primary">
								<i className="fas fa-signal fa-fw me-3 p-1"></i>
								<label className="d-none d-sm-inline">Intermediate</label>
							</span>
						)}
						{subject.subject.level === "Advanced" && (
							<span style={{ width: "20px" }} className="w-50 text-danger">
								<i className="fas fa-signal fa-fw me-3 p-1"></i>
								<label className="d-none d-sm-inline">Advanced</label>
							</span>
						)}
					</div>
					{!isLoading ? (
						<>
							{subjectsDraft.find(
								(sub) => subject.subject.name === sub.name
							) ? (
								<>
									{subjectsDraft[studentSubjectIndex] !== undefined && (
										<>
											<button
												className="btn ms-4 mt-1 btn-danger btn-round px-2"
												data-id={
													subjectsDraft[studentSubjectIndex].student_subject_id
												}
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Hapus dari KRS"
												onClick={() =>
													removeSubject(
														subjectsDraft[studentSubjectIndex]
															.student_subject_id
													)
												}
											>
												<i className="fa fa-times text-light"></i>
											</button>
										</>
									)}
								</>
							) : (
								<>
									<button
										className="btn ms-4 mt-1 btn-info btn-round px-2"
										data-id={subject.subject.id}
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Tambah ke KRS"
										onClick={() => takeSubject(subject.subject.id)}
									>
										<i className="fa fa-plus text-light"></i>
									</button>
								</>
							)}
						</>
					) : (
						<>
							<span className="btn ms-4 mt-1 btn-warning btn-round px-2">
								<div
									className="spinner-border text-dark"
									role="status"
									style={{ height: "20px", width: "20px", marginTop: "9px" }}
								>
									<span className="visually-hidden">Loading...</span>
								</div>
							</span>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default SubjectItem;
