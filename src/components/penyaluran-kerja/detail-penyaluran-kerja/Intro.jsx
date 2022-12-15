import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
	return (
		<section className="bg-light">
			<div className="container">
				<div className="row position-relative">
					<div className="col-lg-8 position-relative">
						<h1 className="p-0 m-0">Content Creator</h1>
						<p>PT. Gojek Indonesia</p>
					</div>
				</div>
				<div className="row position-relative">
					<div className="col-lg-12">
						<ul className="list-group list-group-borderless">
							<li className="list-group-item h6 fw-normal d-flex mb-0">
								<i className="bi bi-geo-alt-fill text-black me-2" />
								Kota Depok, Jawa Barat
							</li>
							<li className="list-group-item h6 fw-normal d-flex mb-0">
								<i className="bi bi-currency-dollar text-black me-2"></i>
								Rp 3.500.000-5.000.000
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
											Senin - Sabtu
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
											08:00 - 17:00
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
											Fulltime
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
