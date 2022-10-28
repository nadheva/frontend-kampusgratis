import React from "react";

const Intro = () => {
	return (
		<section>
			<div className="container">
				<div className="row g-4 g-md-5">
					<div className="col-md-12 text-center mx-auto">
						<div
							className="card card-body shadow p-2 h-200px h-sm-400px position-relative overflow-hidden"
							style={{
								backgroundImage: "url(/assets/images/about/28.jpg)",
								backgroundPosition: "center left",
								backgroundSize: "cover",
							}}
						>
							<div className="bg-overlay bg-dark opacity-6" />
						</div>
					</div>
					<div className="col-lg-8">
						<h1>
							Webinar : Design logo using Adobe Illustrator and Photoshop.
						</h1>
						<div className="d-sm-flex justify-content-between align-items-center mb-2">
							<div className="mt-sm-0">
								<a
									href=" "
									className="badge bg-primary bg-opacity-10 text-primary mb-2"
								>
									Zoom
								</a>
							</div>
							<div className="mt-sm-0">
								<div className="icon-md bg-dark rounded-circle fs-5">
									<a href=" " className="text-white">
										<i className="bi bi-share" />
									</a>
								</div>
							</div>
						</div>
						<p className="mb-0 mt-3">
							We understand that theory is important to build a solid
							foundation, we understand that theory alone isn't going to get the
							job done so that's why this course is packed with practical
							hands-on examples that you can follow step by step. astonished.
							Demesne had new manners savings staying had. Under folly balls,
							death own point now men. Match way these she avoids seeing death.
							She who drift their fat off. Ask a quick six seven offer see
							among.
						</p>
					</div>
					<div className="col-lg-4">
						<div className="card card-body bg-light p-5 text-center">
							<h5 className="fw-normal">One-Time Payment</h5>
							<h2>Gratis</h2>
							<a href=" " className="btn btn-blue mb-2">
								Ikuti Kegiatan
							</a>
							<ul className="avatar-group mb-1 justify-content-center">
								<li className="avatar avatar-sm">
									<img
										className="avatar-img rounded-circle"
										src="assets/images/avatar/01.jpg"
										alt="avatar"
									/>
								</li>
								<li className="avatar avatar-sm">
									<img
										className="avatar-img rounded-circle"
										src="assets/images/avatar/02.jpg"
										alt="avatar"
									/>
								</li>
								<li className="avatar avatar-sm">
									<img
										className="avatar-img rounded-circle"
										src="assets/images/avatar/03.jpg"
										alt="avatar"
									/>
								</li>
								<li className="avatar avatar-sm">
									<img
										className="avatar-img rounded-circle"
										src="assets/images/avatar/04.jpg"
										alt="avatar"
									/>
								</li>
							</ul>
							<p className="mb-0">Bergabunglah diacara kami</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
