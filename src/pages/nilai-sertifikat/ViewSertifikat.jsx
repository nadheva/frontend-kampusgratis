import React from "react";
// import { useParams } from 'react-router-dom';

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const ViewSertifikat = () => {
	// let id = useParams();
	return (
		<>
			<Header />
			<main>
				<section>
					<div className="container">
						<div className="row g-4 g-md-5">
							<div className="col-md-7 text-center mx-auto overflow-auto">
								<div
									className="card card-body img-object shadow p-2 h-300px h-sm-400px h-md-500px h-lg-500px  position-relative overflow-hidden"
									style={{
										backgroundImage: "url(/assets/images/about/29.jpeg)",
										backgroundPosition: "center left",
										backgroundSize: "cover",
									}}
								>
									<div className="bg-overlay bg-dark opacity-6" />
									<div className="card-img-overlay">
										<div className="position-absolute top-50 start-50 translate-middle">
											<a
												href="https://firebasestorage.googleapis.com/v0/b/kampus-gratis2.appspot.com/o/documents%2Fassignments%2F05e5d1cc-e96c-4cbf-90d9-7431dbe135fc-video.pdf?alt=media&token=99625832-6ffd-4d16-a3e4-614a6b0fb0f4z"
												className="btn btn-lg text-info btn-round btn-white-shadow mb-0"
												data-glightbox=""
												data-gallery="video-tour"
											>
												<i className="fas fa-eye" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-auto my-2 d-none d-lg-block pt-4">
									<a
										className="btn btn-info"
										href="assets/images/about/29.jpeg"
										download=""
									>
										<i className="fas fa-download me-2" />
										Download Sertifikat
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default ViewSertifikat;
