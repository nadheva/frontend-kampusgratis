import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
	return (
		<>
			{/* Vidio */}
			<div className="col-12 position-relative">
				<div class="ratio ratio-16x9">
					<iframe
						src="https://www.youtube.com/embed/mtmOxZNI-XE"
						title="YouTube video"
						allowfullscreen
					></iframe>
				</div>
			</div>

			{/* Deskripsi & forum diskusi */}
			<div className="col-lg-12">
				<div className="bg-body shadow rounded-2 p-4">
					<ul
						className="nav nav-pills nav-tabs-line pt-0"
						id="course-pills-tab"
						role="tablist"
					>
						<li className="nav-item me-2 me-sm-4" role="presentation">
							<button
								className="nav-link mb-2 mb-md-0 active  "
								id="course-pills-tab-1"
								data-bs-toggle="pill"
								data-bs-target="#course-pills-1"
								type="button"
								role="tab"
								aria-controls="course-pills-1"
								aria-selected="true"
							>
								Description
							</button>
						</li>

						<li className="nav-item me-2 me-sm-4" role="presentation">
							<button
								className="nav-link mb-2 mb-md-0  "
								id="course-pills-tab-4"
								data-bs-toggle="pill"
								data-bs-target="#course-pills-4"
								type="button"
								role="tab"
								aria-controls="course-pills-4"
								aria-selected="false"
							>
								Discusion{" "}
							</button>
						</li>
					</ul>
					<hr />
					<div className="tab-content pt-2" id="course-pills-tabContent">
						<div
							className="tab-pane fade show active"
							id="course-pills-1"
							role="tabpanel"
							aria-labelledby="course-pills-tab-1"
						>
							<h5 className="mb-3 ">Course Description</h5>
							<p className="mb-3">
								Welcome to the
								<strong>
									{" "}
									Digital Marketing Ultimate Course Bundle - 12 Courses in 1
									(Over 36 hours of content)
								</strong>
							</p>
							<p className="mb-3">
								In this practical hands-on training, you’re going to learn to
								become a digital marketing expert with this{" "}
								<strong>
									{" "}
									ultimate course bundle that includes 12 digital marketing
									courses in 1!
								</strong>
							</p>
							<p className="mb-3">
								If you wish to find out the skills that should be covered in a
								basic digital marketing course syllabus in India or anywhere
								around the world, then reading this blog will help. Before we
								delve into the advanced
								<strong>
									<a href=" " className="text-reset text-decoration-underline">
										digital marketing course
									</a>
								</strong>{" "}
								syllabus, let’s look at the scope of digital marketing and what
								the future holds.
							</p>
							<p className="mb-0">
								We focus a great deal on the understanding of behavioral
								psychology and influence triggers which are crucial for becoming
								a well rounded Digital Marketer. We understand that theory is
								important to build a solid foundation, we understand that theory
								alone isn’t going to get the job done so that’s why this course
								is packed with practical hands-on examples that you can follow
								step by step.
							</p>

							<p className="mb-0">
								As it so contrasted oh estimating instrument. Size like body
								someone had. Are conduct viewing boy minutes warrant the
								expense? Tolerably behavior may admit daughters offending her
								ask own. Praise effect wishes change way and any wanted. Lively
								use looked latter regard had. Do he it part more last in.
							</p>
						</div>
						<div
							className="tab-pane fade"
							id="course-pills-4"
							role="tabpanel"
							aria-labelledby="course-pills-tab-4"
						>
							<div className="row ">
								<h5 className="mb-4 ">Forum Diskusi</h5>
							</div>
							<div className="card-body p-0 pt-3">
								<div className="vstack gap-3">
									<div className="row mb-4">
										<div className="col-12">
											{/* Comment box */}
											<div className="d-flex mb-4">
												{/* Avatar */}
												<div className="avatar avatar-sm flex-shrink-0 me-2">
													<a href=" ">
														<img
															className="avatar-img rounded-circle"
															src="/assets/images/avatar/09.jpg"
															alt=""
														/>
													</a>
												</div>
												<form className="w-100 d-flex">
													<textarea
														className="one form-control pe-4 bg-light"
														id="autoheighttextarea"
														rows={1}
														placeholder="Add a comment..."
														defaultValue={""}
													/>
													<button
														className="btn btn-primary ms-2 mb-0"
														type="button"
													>
														Post
													</button>
												</form>
											</div>
											{/* Comment item START */}
											<div className="border p-2 p-sm-4 rounded-3 mb-4">
												<ul className="list-unstyled mb-0">
													<li className="comment-item">
														<div className="d-flex mb-3">
															{/* Avatar */}
															<div className="avatar avatar-sm flex-shrink-0">
																<a href=" ">
																	<img
																		className="avatar-img rounded-circle"
																		src="/assets/images/avatar/05.jpg"
																		alt=""
																	/>
																</a>
															</div>
															<div className="ms-2">
																{/* Comment by */}
																<div className="bg-light p-3 rounded">
																	<div className="d-flex justify-content-center">
																		<div className="me-2">
																			<h6 className="mb-1 lead fw-bold">
																				<a href=" "> Frances Guerrero </a>
																			</h6>
																			<p className="h6 mb-0">
																				Removed demands expense account in
																				outward tedious do. Particular way
																				thoroughly unaffected projection?
																			</p>
																		</div>
																		<small>5hr</small>
																	</div>
																</div>
																{/* Comment react */}
																<ul className="nav nav-divider py-2 small">
																	<li className="nav-item">
																		<a className="text-primary-hover" href=" ">
																			Like (3)
																		</a>
																	</li>
																	<li className="nav-item">
																		<a className="text-primary-hover" href=" ">
																			Reply
																		</a>
																	</li>
																	<li className="nav-item">
																		<a className="text-primary-hover" href=" ">
																			View 5 replies
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														{/* Comment item nested START */}
														<ul className="list-unstyled ms-4">
															{/* Comment item START */}
															<li className="comment-item">
																<div className="d-flex">
																	{/* Avatar */}
																	<div className="avatar avatar-xs flex-shrink-0">
																		<a href=" ">
																			<img
																				className="avatar-img rounded-circle"
																				src="/assets/images/avatar/06.jpg"
																				alt=""
																			/>
																		</a>
																	</div>
																	{/* Comment by */}
																	<div className="ms-2">
																		<div className="bg-light p-3 rounded">
																			<div className="d-flex justify-content-center">
																				<div className="me-2">
																					<h6 className="mb-1  lead fw-bold">
																						<a href=" "> Lori Stevens </a>
																					</h6>
																					<p className=" mb-0">
																						See resolved goodness felicity shy
																						civility domestic had but Drawings
																						offended yet answered Jennings
																						perceive. Domestic had but Drawings
																						offended yet answered Jennings
																						perceive.
																					</p>
																				</div>
																				<small>2hr</small>
																			</div>
																		</div>
																		{/* Comment react */}
																		<ul className="nav nav-divider py-2 small">
																			<li className="nav-item">
																				<a
																					className="text-primary-hover"
																					href=" "
																				>
																					Like (5)
																				</a>
																			</li>
																			<li className="nav-item">
																				<a
																					className="text-primary-hover"
																					href=" "
																				>
																					Reply
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</li>
															{/* Comment item END */}
														</ul>
														{/* Comment item nested END */}
													</li>
												</ul>
											</div>
											{/* Comment item END */}
											{/* Comment item START */}
											<div className="border p-2 p-sm-4 rounded-3">
												<ul className="list-unstyled mb-0">
													<li className="comment-item">
														<div className="d-flex">
															{/* Avatar */}
															<div className="avatar avatar-sm flex-shrink-0">
																<a href=" ">
																	<img
																		className="avatar-img rounded-circle"
																		src="/assets/images/avatar/02.jpg"
																		alt=""
																	/>
																</a>
															</div>
															<div className="ms-2">
																{/* Comment by */}
																<div className="bg-light p-3 rounded">
																	<div className="d-flex justify-content-center">
																		<div className="me-2">
																			<h6 className="mb-1 lead fw-bold">
																				<a href=" "> Louis Ferguson </a>
																			</h6>
																			<p className="h6 mb-0">
																				Removed demands expense account in
																				outward tedious do. Particular way
																				thoroughly unaffected projection?
																			</p>
																		</div>
																		<small>5hr</small>
																	</div>
																</div>
																{/* Comment react */}
																<ul className="nav nav-divider py-2 small">
																	<li className="nav-item">
																		<a className="text-primary-hover" href=" ">
																			Like
																		</a>
																	</li>
																	<li className="nav-item">
																		<a className="text-primary-hover" href=" ">
																			Reply
																		</a>
																	</li>
																</ul>
															</div>
														</div>
													</li>
												</ul>
											</div>
											{/* Comment item END */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Btn */}
			<div className="col-lg-12">
				<Link to="/detail-modul" className="btn btn-secondary">
					<i className="fas fa-arrow-left ms-2" /> Kembali
				</Link>
			</div>
		</>
	);
};

export default MainContent;
