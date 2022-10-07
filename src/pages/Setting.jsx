import React from "react";
import Banner from "../components/Profile/Banner";
import Sidebar from "../components/Profile/Sidebar";
import Header from "./default/Header";
import Footer from "./default/Footer";

const Setting = () => {
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />

						{/* Main content START */}
						<div className="col-xl-9">
							{/* 2 */}
							<div className="border rounded-3">
								<div className="row">
									<div className="col-12">
										{/* Card START */}
										<div className="card bg-transparent">
											{/* Card header START */}
											<div className="card-header bg-transparent border-bottom">
												<h3 className="card-header-title">Ubah Password</h3>
											</div>
											{/* Card header END */}
											{/* Card body START */}
											<div className="card-body">
												<form>
													<div className="mb-3">
														<label className="form-label">Password</label>
														<input type="password" className="form-control" />
													</div>
													<div className="mb-3">
														<label className="form-label">
															Confirm Password
														</label>
														<input type="password" className="form-control" />
													</div>
												</form>

												{/* Notification START */}
												{/* Buttons */}
												<div className="d-sm-flex justify-content-end">
													<button
														type="button"
														className="btn btn-sm btn-primary me-2 mb-0"
													>
														Save changes
													</button>
													<a
														href=" "
														className="btn btn-sm btn-outline-secondary mb-0"
													>
														Cancel
													</a>
												</div>
											</div>
											{/* Card body END */}
										</div>
										{/* Card END */}
									</div>
								</div>
							</div>
						</div>
						{/* Row END */}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Setting;
