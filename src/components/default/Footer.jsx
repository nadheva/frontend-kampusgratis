import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo-kampus-gratis.png";
import LogoDark from "../../assets/images/logo-kampus-gratis-dark.png";

const Footer = () => {
	return (
		<>
			<div className="back-top">
				<i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i>
			</div>
			<footer className="bg-light pt-5">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-4">
							<a className="me-0" href="index.html">
								<img
									className="light-mode-item h-40px"
									src={Logo}
									alt="Kampus Gratis"
								/>
								<img
									className="dark-mode-item h-40px"
									src={LogoDark}
									alt="Kampus Gratis"
								/>
							</a>
							<p className="my-3">
								Kampus Gratis merupakan sistem manajemen E-learning yang
								mencantumkan laporan peningkatan atau progres pembelajaran
								mahasiswa layaknya seperti perguruan tinggi.
							</p>
							<ul className="list-inline mb-0 mt-3">
								<li className="list-inline-item">
									<a
										href="https://instagram.com/kampus.gratis"
										target="_blank"
										className="btn btn-white btn-sm shadow px-2 text-instagram"
									>
										<i className="fab fa-fw fa-instagram"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.facebook.com/learningkampusgratis/"
										target="_blank"
										className="btn btn-white btn-sm shadow px-2 text-facebook"
									>
										<i className="fab fa-fw fa-facebook-f"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.tiktok.com/@kampusgratis_"
										target="_blank"
										className="btn btn-white btn-sm shadow px-2 text-twitter"
									>
										<i className="fab fa-fw fa-tiktok"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.linkedin.com/in/kampusgratis/"
										target="_blank"
										className="btn btn-white btn-sm shadow px-2 text-linkedin"
									>
										<i className="fab fa-fw fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-2">
							<h5 className="mb-2 mb-md-4">Fitur</h5>
							<ul className="nav flex-column">
								<li className="nav-item">
									<Link className="nav-link" to="/administrasi">
										Administrasi
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/silabus">
										Rencana Studi
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/studi-ku">
										Studiku
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/panduan">
										Panduan
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/artikel">
										Sekilas Ilmu
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-2">
							<h5 className="mb-2 mb-md-4">Kontak</h5>
							<p className="mb-2">
								Telp :<span className="h6 fw-light ms-2">0217209729</span>
							</p>
							<p className="mb-0">
								Email :
								<span className="h6 fw-light ms-2">
									learning@m-knowsconsulting.com
								</span>
							</p>
						</div>
						<div className="col-lg-4">
							<div className="row g-2">
								<div className="col-12 col-md-12">
									<h5 className="mb-2 mb-md-4">Alamat</h5>
									<ul className="nav flex-column">
										<li className="nav-item">
											<p>
												Utama :
												<span className="h6 fw-light ms-2">
													Jl. Radio IV No.8 B, Kebayoran Baru, Kota Jakarta
													Selatan, 12130
												</span>
											</p>
										</li>
										<li className="nav-item">
											<p>
												Cabang :
												<span className="h6 fw-light ms-2">
													Jl. Raya Cirendeu No.59, Cireundeu, Ciputat Timur,
													Kota Tangerang Selatan, Banten 15419
												</span>
											</p>
										</li>
										<li className="nav-item">
											<p>
												Cabang :
												<span className="h6 fw-light ms-2">
													Jl. Raya Darmo Permai III Surabaya. 60119
												</span>
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className="mt-4 mb-0" />
					<div className="py-3">
						<div className="container px-0">
							<div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
								<div className="text-primary-hover">
									<Link to="/" className="text-body">
										2022 - www.kampusgratis.id -
									</Link>
									Hak Cipta Dilindungi.
								</div>
								<div className="justify-content-center mt-3 mt-lg-0">
									<ul className="nav list-inline justify-content-center mb-0">
										<li className="list-inline-item">
											<a className="nav-link">Terms of use</a>
										</li>
										<li className="list-inline-item">
											<a className="nav-link pe-0">Privacy policy</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
