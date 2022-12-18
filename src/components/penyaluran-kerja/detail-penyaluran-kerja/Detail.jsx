import React from "react";
import { Link } from "react-router-dom";

const Detail = ({ kerja }) => {
	return (
		<section className="">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<h5 className="">Deskripsi Pekerjaan</h5>
							<div className="col-lg-7">
								<ul className="list-group list-group-borderless">
									{
										kerja?.requirements?.map((x) => (
											<li className="list-group-item h6 fw-normal d-flex">
												<i className="bi bi-caret-right me-2" />
												{x}
											</li>
										))
									}
								</ul>
							</div>
						</div>
						<div className="row g-4 mt-4">
							<div className="col-md-6 col-xl-4">
								<div className="card card-body shadow p-4 align-items-start">
									<img
										className="rounded-1 h-60px"
										src={kerja?.Company?.company_logo}
										alt="university logo"
									/>
									<h5 className="card-title mt-3 mb-0">{kerja?.position}</h5>
									<span>{kerja?.Company?.company_name}</span>
									<a
										href={kerja?.url}
										target="_blank"
										className="btn btn-lg btn-link p-0 mt-3 stretched-link"
									>
										<u>Lamar Disini</u>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Detail;
