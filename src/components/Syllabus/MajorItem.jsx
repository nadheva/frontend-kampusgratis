import React from "react";
import { Link } from "react-router-dom";

const MajorItem = ({ major }) => {
	return (
		<div className="col-sm-6 col-lg-4">
			<div className="card shadow h-100">
				<img
					src="/assets/images/courses/4by3/08.jpg"
					className="card-img-top"
					alt="course image"
				/>
				<div className="card-body pb-0">
					<div className="d-flex justify-content-between mb-2">
						<a href="#" className="badge bg-purple bg-opacity-10 text-purple">
							Medium
						</a>
						<a href="#" className="h6 fw-light mb-0">
							<i className="far fa-heart"></i>
						</a>
					</div>
					<h5 className="card-title">
						<Link to={major.id}>{major.name}</Link>
					</h5>
					<p>{major.description}</p>
				</div>
				<div className="card-footer pt-0 pb-3">
					<hr />
					<div className="d-flex justify-content-between">
						<span className="h6 fw-light mb-0">
							<i className="far fa-clock text-danger me-2"></i>12h 56m
						</span>
						<span className="h6 fw-light mb-0">
							<i className="fas fa-table text-orange me-2"></i>15 lectures
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MajorItem;
