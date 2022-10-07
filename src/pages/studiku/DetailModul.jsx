import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import VidioItem from "../../components/studiku/detailModule/VidioItem";
import DokumentItem from "../../components/studiku/detailModule/DokumentItem";
import Header from '../default/Header';
import Footer from '../default/Footer';

import { useParams } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
	getDetailModules,
	reset,
} from "../../features/detailmodule/detailModuleSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailModul = () => {
	const navigate = useNavigate();

	// Get id
	const { moduleId } = useParams();

	const dispatch = useDispatch();
	const { dModules, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.detailModule
	);

	useEffectOnce(() => {
		dispatch(getDetailModules(moduleId));
	});

	useEffect(() => {
		if (isError && !isSuccess) {
			// toast.error(message);
			dispatch(reset());
		}

		if (isSuccess && message && !isError) {
			// toast.success(message);
			dispatch(reset());
		}
	}, [dModules, isLoading, isError, isSuccess, message, dispatch]);

	// console.log(dModules)

	// dModules.videos.map(video => console.log(video.url))
	// dModules.documents.map(dokument => console.log(dokument.file))

	return (
		<>
			<Header />
			<main>
				{/* Intro */}
				<section className="bg-blue py-7">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1 className="text-white">Modul</h1>
								<div className="d-flex justify-content-center">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
											<li className="breadcrumb-item">
												<Link to="" onClick={() => navigate(-2)}>
													Pertemuan
												</Link>
											</li>
											<li className="breadcrumb-item">
												<Link to="" onClick={() => navigate(-1)}>
													Modul
												</Link>
											</li>
											<li className="breadcrumb-item active" aria-current="page">
												Detail Modul
											</li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Content */}
				<section className="pt-0">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-12">
								<div className="card shadow rounded-2 p-0 mt-n5">
									<div className="card-body p-sm-4">
										<div className="tab-content" id="course-pills-tabContent">
											<div
												className="tab-pane fade show active"
												id="course-pills-3"
												role="tabpanel"
												aria-labelledby="course-pills-tab-3"
											>
												<div className="card">
													{/* Card header */}
													<div className="card-header  p-0 pb-3">
														<h4 className="mb-0">Modul</h4>
														{/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo rerum vero reiciendis omnis dolor consequatur earum. Sint eum facilis hic doloribus, excepturi nesciunt quo labore suscipit, nobis, laborum totam. adipisicing elit. Quos illo rerum vero reiciendis omnis dolor consequatur earum.</p> */}
													</div>

													{/* Card Body */}
													<div className="card-body p-0 pt-3">
														<div className="row g-5">
															{/* Viido */}
															<div className="col-12">
																<h5 className="mb-4">Vidio</h5>
																{dModules.videos != null ? (
																	dModules.videos.map((vidio) => (
																		<VidioItem key={vidio.id} vidio={vidio} />
																	))
																) : isLoading ? (
																	<div className="row">
																		<div className="col-sm-12 col-xl-12">
																			<SkeletonTheme>
																				<Skeleton height={50} />
																			</SkeletonTheme>
																		</div>
																		<div className="col-sm-12 col-xl-12">
																			<SkeletonTheme>
																				<Skeleton height={50} />
																			</SkeletonTheme>
																		</div>
																	</div>
																) : (
																	<h1>Data Kosong</h1>
																)}
															</div>

															{/* Dokument */}
															<div className="col-12">
																{/* Curriculum item */}
																<h5 className="mb-4">Dokumen</h5>
																{dModules.documents != null ? (
																	dModules.documents.map((dokument) => (
																		<DokumentItem
																			key={dokument.id}
																			dokument={dokument}
																		/>
																	))
																) : isLoading ? (
																	<div className="row">
																		<div className="col-sm-12 col-xl-12">
																			<SkeletonTheme>
																				<Skeleton height={50} />
																			</SkeletonTheme>
																		</div>
																		<div className="col-sm-12 col-xl-12">
																			<SkeletonTheme>
																				<Skeleton height={50} />
																			</SkeletonTheme>
																		</div>
																	</div>
																) : (
																	<h1>Data Kosong</h1>
																)}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Btn */}
							<div className="col-lg-12 col-12 my-4">
								<a
									className="btn btn-success btn-lg"
									href=" "
									data-bs-toggle="modal"
									data-bs-target="#modalCreatePost"
								>
									Saya sudah paham
									<i className="fas fa-check ms-2" />
								</a>
								<a
									className="btn btn-secondary ms-3 btn-lg"
									href="/forum-diskusi"
								>
									Tanya forum diskusi
									<i className="fas fa-comments ms-2" />
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Modal */}
				<div
					className="modal fade"
					id="modalCreatePost"
					tabIndex={-1}
					aria-labelledby="modalLabelCreatePost"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							{/* Title */}
							<div className="modal-header">
								<h5 className="modal-title" id="modalLabelCreatePost">
									Catatan
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								{/* Form START */}
								<form>
									{/* Description */}
									<div className="mb-3">
										<label className="form-label">
											Apa pelajaran yang kamu dapat dari pertemuan ini?{" "}
										</label>
										<textarea
											className="form-control"
											rows={4}
											placeholder="Description here"
											defaultValue={""}
										/>
									</div>
								</form>
								{/* Form END */}
							</div>
							{/* Modal footer */}
							<div className="modal-footer">
								<button type="button" className="btn btn-success-soft">
									Simpan
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default DetailModul;
