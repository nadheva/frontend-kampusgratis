import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';

const SubjectItem = ({ subject, student, progress, lecturers }) => {
	return (
		<>
			<div className="col-lg-6 col-sm-12">
				<div className="card shadow h-100">
					<Link to={subject.Subject.id}>
						<img
							src={subject.Subject.thumbnail_link}
							className="card-img-top"
							style={{ height: "210px", objectFit: "cover" }}
							alt={subject.Subject.name}
						/>
					</Link>
					<div className="card-body pb-0">
						<div className="d-flex justify-content-between mb-2 mx-0">
							<span
								className="badge bg-primary rounded-pill"
								style={{ fontSize: "0.9rem" }}
							>
								{subject.Subject.credit} SKS
							</span>
							<span
								className="badge bg-success rounded-pill ms-2"
								style={{ fontSize: "0.9rem" }}
							>
								Progress {progress}%
							</span>
						</div>
						<h5 className="card-title">
							<Link to={subject.Subject.id}>{subject.Subject.name}</Link>
						</h5>
						<p className="mb-0 text-truncate-2">
							{/* TODO : Ini error
							
							{subject.Subject.indicator.trim().charAt(0).toUpperCase() +
								subject.Subject.indicator.trim().slice(1)} */}
						</p>
					</div>
					<div className="card-footer pt-0 pb-3">
						<hr />
						<div className="d-flex justify-content-between">
							<span className="h6 fw-light mb-0">
								<i className="far fa-clock text-danger me-2"></i>
								{subject.Subject.number_of_sessions} Pertemuan
							</span>
							<span className="h6 fw-light mb-0">
								<i className="fas fa-user text-orange me-2"></i>
								{student} Mahasiswa
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubjectItem;
