import React from "react";
import { Link } from "react-router-dom";

const Intro = ({ kerja }) => {
	return (
		<section className="bg-light">
			<div className="container">
				<div className="row position-relative">
					<div className="col-lg-8 position-relative">
						<h1 className="p-0 m-0">{kerja?.position}</h1>
						<p>{kerja?.Company?.company_name}</p>
					</div>
				</div>
				<div className="row position-relative">
					<div className="col-lg-12">
						<ul className="list-group list-group-borderless">
							<li className="list-group-item h6 fw-normal d-flex mb-0">
								<i className="bi bi-geo-alt-fill text-black me-2" />
								{kerja?.Company?.location}
							</li>
							<li className="list-group-item h6 fw-normal d-flex mb-0">
								<i className="bi bi-currency-dollar text-black me-2"></i>
								Rp {kerja?.salary}
							</li>
						</ul>
					</div>
					<div className="row g-3">
						<div className="col-sm-6 col-lg-4">
							<div className="d-flex align-items-center">
								<span className="icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3">
									<i className="fas fa-calendar" />
								</span>
								<div className="ms-3">
									<div className="d-flex">
										<h5
											className="purecounter mb-0 fw-bold"
											data-purecounter-start={0}
											data-purecounter-end={10}
											data-purecounter-delay={200}
											data-purecounter-duration={0}
										>
											{kerja?.work_days}
										</h5>
										<span className="mb-0 h5"></span>
									</div>
									<p className="mb-0 h6 fw-light">Hari Kerja</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="d-flex align-items-center">
								<span className="icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0">
									<i className="fas fa-clock" />
								</span>
								<div className="ms-3">
									<div className="d-flex">
										<h5
											className="purecounter mb-0 fw-bold"
											data-purecounter-start={0}
											data-purecounter-end={36}
											data-purecounter-delay={200}
											data-purecounter-duration={0}
										>
											{kerja?.work_hour}
										</h5>
										<span className="mb-0 h5"></span>
									</div>
									<p className="mb-0 h6 fw-light">Jam Kerja</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="d-flex align-items-center">
								<span className="icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0">
									<i className="fas fa-briefcase" />
								</span>
								<div className="ms-3">
									<div className="d-flex">
										<h5
											className="purecounter mb-0 fw-bold"
											data-purecounter-start={0}
											data-purecounter-end={11}
											data-purecounter-delay={200}
											data-purecounter-duration={0}
										>
											{kerja?.period}
										</h5>
										<span className="mb-0 h5"></span>
									</div>
									<p className="mb-0 h6 fw-light">Waktu Kerja</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
