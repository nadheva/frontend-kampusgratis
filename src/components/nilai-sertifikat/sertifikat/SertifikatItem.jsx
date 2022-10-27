import React from "react";
import { Link } from "react-router-dom";

const SertifikatItem = ({ sertifikat }) => {
	return (
		<div className="col-sm-12 col-lg-12 col-xl-12">
			<div className="card card-body shadow rounded-3">
				<div className="d-flex align-items-center">
					<div className="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue">
						<i className="fas fa-certificate"></i>
					</div>
					<div className="ms-3">
						<h5 className="mb-0">
							<Link
								to={`/certificates/${sertifikat.id}`}
								className="stretched-link"
							>
								{sertifikat.title}
							</Link>
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SertifikatItem;
