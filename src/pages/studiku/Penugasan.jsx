import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../default/Header";
import Footer from "../default/Footer";

const Penugasan = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Penugasan";
	});

	const [file, setFile] = useState("201904020-ibnu-trpl.pdf");

	function handleFileChange(e) {
		setFile(e.target.value);
	}

	return (
		<>
			<Header />
			<main>
				<section
					className="bg-blue align-items-center d-flex"
					style={{
						background:
							"url(/assets/images/pattern/04.png) no-repeat center center",
						backgroundSize: "cover",
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1 className="text-white">Penugasan</h1>
								<div className="d-flex justify-content-center">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
											<li className="breadcrumb-item">
												<Link to="/pertemuan">Pertemuan</Link>
											</li>
											<li
												className="breadcrumb-item active"
												aria-current="page"
											>
												Penugasan
											</li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pt-3 pt-xl-5">
					<div className="container" data-sticky-container>
						<div className="row g-4">
							<div className="card shadow rounded-2 p-0 ">
								<div className="card-body p-sm-4">
									{/* 1 */}
									<div className="col-12">
										<h4>Tugas Matematika</h4>
										<hr />
										<p>
											Satisfied conveying a dependent contented he gentleman
											agreeable do be. Warrant private blushes removed an in
											equally totally if. Delivered dejection necessary
											objection do Mr prevailed. Mr feeling does chiefly cordial
											in do. If you wish to find out the skills that should be
											covered in a basic digital marketing course syllabus in
											India or anywhere around the world, then reading this blog
											will help. Before we delve into the advanced digital
											marketing course syllabus, let’s look at the scope of
											digital marketing and what the future holds.
										</p>
										<div className="hstack gap-3 flex-wrap">
											<a href=" " className="btn btn-lg btn-light">
												<div className="fs-4">
													<i className="bi bi-file-earmark-pdf" />
												</div>
												<span className="fs-6 mb-0">Tugas 5 pdf</span>
											</a>
											<a href=" " className="btn btn-lg btn-light">
												<div className="fs-4">
													<i className="bi bi-file-earmark-word" />
												</div>
												<span className="fs-6 mb-0">Panduan 5 docs</span>
											</a>
										</div>
									</div>
									{/* 2 */}
									<div className="col-12 mt-5">
										<h3>Submission status</h3>
										<div className="table-responsive">
											<table className="table table-striped table-hover">
												<tbody>
													<tr>
														<th>Submission status</th>
														<td>Submitted for grading</td>
													</tr>
													<tr>
														<th>Grading status </th>
														<td>Not graded </td>
													</tr>
													<tr>
														<th>Due date </th>
														<td>Monday, 11 October 2021, 12:00 AM </td>
													</tr>
													<tr>
														<th>Time remaining </th>
														<td>
															Assignment was submitted 1 day 9 hours early{" "}
														</td>
													</tr>
													<tr>
														<th>Last modified </th>
														<td> Saturday, 9 October 2021, 2:12 PM </td>
													</tr>
													<tr>
														<th>File submissions </th>
														<td>{file}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>

									{/*  Upload image START */}
									<div className="col-12 mt-4">
										<div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
											{/* <!-- Image --> */}
											<img
												src="../assets/images/element/gallery.svg"
												className="h-50px"
												alt="uploadfile"
											/>
											<div>
												<h6 className="my-2">
													Upload tugas disini
													<a href="#!" className="text-primary">
														{" "}
														Browse
													</a>
												</h6>
												<label style={{ cursor: "pointer" }}>
													<span>
														<input
															onChange={handleFileChange}
															className="form-control stretched-link"
															type="file"
															name="my-image"
															id="image"
														/>
													</span>
												</label>
												<p className="small mb-0 mt-2">
													<b>Note:</b> Pastikan berkas sudah sesuai dengan
													ketentuan tugas submission
												</p>
											</div>
										</div>
									</div>
									{/* <!-- Upload image END --> */}
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

export default Penugasan;
