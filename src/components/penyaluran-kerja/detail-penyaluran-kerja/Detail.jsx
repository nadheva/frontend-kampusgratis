import React from "react";

const Detail = () => {
	return (
		<section className="">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{/* List */}
						<div className="row">
							{/* Title */}
							<h5 className="">Deskripsi Pekerjaan</h5>
							{/* List item */}
							<div className="col-lg-4">
								<ul className="list-group list-group-borderless">
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										One of the best places to live and work
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										Affordable education &amp; living
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										20 hrs/week work while Studying
									</li>
								</ul>
							</div>
							{/* List item */}
							<div className="col-lg-4">
								<ul className="list-group list-group-borderless">
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										Degree recognized all over the world
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										Career-oriented specialized courses
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										2-year study + 3-year work permit + PR
									</li>
								</ul>
							</div>
						</div>
						{/* <div className="row mt-4">
						
							<h5 className="mt-3">Kualifikasi Minimal</h5>
						
							<div className="col-lg-4">
								<ul className="list-group list-group-borderless">
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										One of the best places to live and work
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										Affordable education &amp; living
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										20 hrs/week work while Studying
									</li>
								</ul>
							</div>
					
							<div className="col-lg-4">
								<ul className="list-group list-group-borderless">
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										Degree recognized all over the world
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										Career-oriented specialized courses
									</li>
									<li className="list-group-item h6 fw-normal d-flex">
										<i className="bi bi-caret-right me-2" />
										2-year study + 3-year work permit + PR
									</li>
								</ul>
							</div>
						</div> */}
						<div className="row g-4 mt-4">
							{/* <h5>Rekomendasi Pekerjaan</h5> */}
							<div className="col-md-6 col-xl-4">
								{/* Card START */}
								<div className="card card-body shadow p-4 align-items-start">
									{/* Image */}
									<img
										className="rounded-1 h-60px"
										src="assets/images/client/uni-logo-03.svg"
										alt="university logo"
									/>
									{/* Title */}
									<h5 className="card-title mt-3 mb-0">Content Creator</h5>
									<span>PT. Gojek Indonesia</span>
									{/* Button */}
									<a
										href="index-6.html"
										className="btn btn-lg btn-link p-0 mt-3 stretched-link"
									>
										<u>Lama Disini</u>
									</a>
								</div>
								{/* Card END */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Detail;
