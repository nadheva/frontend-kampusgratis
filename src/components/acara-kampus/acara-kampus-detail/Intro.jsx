import React from "react";

const Intro = () => {
	return (
		<section className="p-0">
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
						<h1>Design logo using Adobe Illustrator and Photoshop.</h1>
						<div className="d-sm-flex justify-content-between align-items-center mb-2">
							<div className="d-flex align-items-center mb-3">
								<div className="avatar">
									<img
										className="avatar-img rounded-circle"
										src="/assets/images/avatar/05.jpg"
										alt="avatar"
									/>
								</div>
								<div className="ms-2">
									<p className="mb-0 small">Pemateri</p>
									<h5 className="mb-0">Lori Stevens</h5>
									<p className="mb-0">
										CEO StartUp Milenial Indo Bisnis
									</p>
								</div>
							</div>
							<div className="mt-2 mt-sm-0">
								<p className="text-danger mb-0">
									<i className="bi bi-clock-history me-2" />
									Start in: 22 Days 15:01:30
								</p>
							</div>
						</div>
						{/* <p className="mb-0">
							CEO StartUp Milenial Indo Bisnis
						</p> */}
					</div>
					<div className="col-lg-4">
						<div className="card card-body bg-light p-5 text-center">
							<h5 className="fw-normal">Silakan Mendaftar Ke Event Ini</h5>
							<h2>Gratis</h2>
							<a href="#" className="btn btn-blue mb-2">
								Daftar Sekarang
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
