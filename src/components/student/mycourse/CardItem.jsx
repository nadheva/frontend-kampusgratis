import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ lecturers, subject, student, progress }) => {
	return (
		<div className="col-sm-6 col-lg-4 col-xl-4">
			<div className="card shadow  h-100 ">
				<img src={subject.Subject.thumbnail_link} className="card-img-top card-img-artikel" alt="courseimage" />
				<div className="card-body pb-0">
					<div className="d-flex justify-content-between mb-2">
						<p className="badge bg-success bg-opacity-10 text-success"> {subject.Subject.level}</p>
						<p className="badge bg-purple bg-opacity-10 text-purple">{progress}%</p>
					</div>
					<h5 className="card-title">
						<Link to={`/studi-ku/pertemuan/${subject.subject_id}`}>{subject.Subject.name}</Link>
					</h5>
					<p className="mb-2 text-truncate-2">
						<b>Dosen : </b>
						{lecturers}
					</p>
				</div>
				<div className="card-footer pt-0 pb-3">
					<hr />
					<div className="d-flex justify-content-between">
						<span className="h6 fw-light mb-0">
							<i className="fas fa-table text-danger me-2"></i>{subject.Subject.credit} SKS
						</span>
						<span className="h6 fw-light mb-0">
							<i className="fas fa-user text-success me-2"></i>{student} Mahasiswa
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
