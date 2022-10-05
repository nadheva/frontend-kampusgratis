import React from "react";

const RightSidebar = () => {
	return (
		<div className="col-xl-4">
			<div data-sticky data-margin-top="80" data-sticky-for="768">
				<div className="row g-4">
					<div className="col-md-6 col-xl-12">
						<div className="card card-body shadow  p-4">
							<h5 className="mb-3">This course includes</h5>
							<ul className="list-group list-group-borderless border-0">
								<li className="list-group-item px-0 d-flex justify-content-between">
									<span className="h6 fw-light mb-0">
										<i className="fas fa-fw fa-book-open "></i>Lectures
									</span>
									<span className="">2</span>
								</li>
								<li className="list-group-item px-0 d-flex justify-content-between">
									<span className="h6 fw-light mb-0">
										<i className="fas fa-fw fa-clock "></i>Duration
									</span>
									<span className="">2 jam durasi belajar</span>
								</li>
								<li className="list-group-item px-0 d-flex justify-content-between">
									<span className="h6 fw-light mb-0">
										<i className="fas fa-fw fa-signal "></i>Skills
									</span>
									<span className="">Beginner</span>
								</li>
								<li className="list-group-item px-0 d-flex justify-content-between">
									<span className="h6 fw-light mb-0">
										<i className="fas fa-fw fa-user-clock"></i>Akses
									</span>
									<span className="">Akses online selamanya</span>
								</li>
								<li className="list-group-item px-0 d-flex justify-content-between">
									<span className="h6 fw-light mb-0">
										<i className="fa fa-fw fa-bell cursor-pointer"></i>Forum
									</span>
									<span className="">Forum Diskusi</span>
								</li>
							</ul>

							<hr />

							<div className="d-sm-flex align-items-center">
								<div className="avatar avatar-xl">
									<img
										className="avatar-img rounded-circle"
										src="/assets/images/avatar/05.jpg"
										alt="avatar"
									/>
								</div>
								<div className="ms-sm-3 mt-2 mt-sm-0">
									<h5 className="mb-0 ">
										<a href=" " className="">
											By Jacqueline Miller
										</a>
									</h5>
									<p className="mb-0 small">Founder Eduport company</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSidebar;
