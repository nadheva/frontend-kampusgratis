import React from "react";
import { Navigate } from "react-router-dom";

import Intro from "../../components/studiku/homeStudiku/Intro";
import CourseItem from "../../components/studiku/homeStudiku/CourseItem";
import Header from "../default/Header";
import Footer from "../default/Footer";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getSubjects, reset } from "../../features/subject/subjectSlice";
import { useEffect } from "react";
import useEffectOnce from "../../helpers/useEffectOnce";

// search
import _ from "lodash";

const Main = () => {
	// redux
	const dispatch = useDispatch();
	const { subjects, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.subject
	);

	useEffectOnce(() => {
		dispatch(getSubjects());
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
	}, [subjects, isLoading, isError, isSuccess, message, dispatch]);

	// search
	const [searchValue, setSearchValue] = React.useState("");
	const [filteredData, setFilteredData] = React.useState(subjects);

	const handleSearchFilter = (e) => {
		setSearchValue(e.target.value);
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const filter = _.filter(subjects, (data) => {
				return _.includes(
					_.lowerCase(JSON.stringify(_.values(data))),
					_.lowerCase(searchValue)
				);
			});
			setFilteredData(filter);
		}, 200);
		return () => clearTimeout(timeout);
	}, [searchValue, filteredData]);

	return (
		<>
			<Header />
			<main>
				<Intro />

				<section className="py-5">
					<div className="container">
						<div className="row">
							{/* Left */}
							<div className="col-lg-8 col-xl-9">
								<div className="row mb-4 align-items-center">
									<div className="col-xl-12">
										<form className="border rounded p-2">
											<div className="input-group input-borderless">
												<input
													className="form-control me-1"
													type="search"
													placeholder="Cari matakuliah"
													value={searchValue}
													onChange={handleSearchFilter}
												/>
											</div>
										</form>
									</div>
									{/* <div className="col-xl-4 mt-3 mt-xl-0">
                  <form className="border rounded p-2 input-borderless">
                    <select className="form-select form-select-sm js-choice border-0" aria-label=".form-select-sm">
                      <option value="">Skill Level</option>
                      <option>Basic</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </form>
                </div> */}
								</div>

								{/* Content */}
								<div className="row g-4">
									{subjects == null ? (
										<Navigate to={`/kategori`} />
									) : isLoading ? (
										<>
											<div className="col-sm-6 col-xl-4">
												<SkeletonTheme>
													<Skeleton height={234} />
													<Skeleton height={50} />
												</SkeletonTheme>
											</div>
											<div className="col-sm-6 col-xl-4">
												<SkeletonTheme>
													<Skeleton height={234} />
													<Skeleton height={50} />
												</SkeletonTheme>
											</div>
											<div className="col-sm-6 col-xl-4">
												<SkeletonTheme>
													<Skeleton height={234} />
													<Skeleton height={50} />
												</SkeletonTheme>
											</div>
										</>
									) : (
										filteredData.map((course) => (
											<CourseItem key={course.item.id} course={course} />
										))
									)}
								</div>

								<div className="col-12">
									{/* <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                  <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><a className="page-link" href=" " tabIndex="-1"><i className="fas fa-angle-double-left"></i></a></li>
                    <li className="page-item mb-0 active"><a className="page-link" href=" ">1</a></li>
                    <li className="page-item mb-0" aria-current="page"><a className="page-link" href=" ">2</a></li>
                    <li className="page-item mb-0"><a className="page-link" href=" ">..</a></li>
                    <li className="page-item mb-0"><a className="page-link" href=" ">6</a></li>
                    <li className="page-item mb-0"><a className="page-link" href=" "><i className="fas fa-angle-double-right"></i></a></li>
                  </ul>
                </nav> */}
								</div>
							</div>

							{/* RIght */}
							<div className="col-lg-4 col-xl-3">
								<div
									className="offcanvas-lg offcanvas-end"
									tabIndex="-1"
									id="offcanvasSidebar"
									aria-labelledby="offcanvasSidebarLabel"
								>
									<div className="offcanvas-body p-3 p-lg-0">
										<form>
											{/* <div className="card card-body shadow p-4 mb-4">
                      <h4 className="mb-3">Category</h4>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                            <label className="form-check-label" htmlFor="flexCheckDefault9">All</label>
                          </div>
                          <span className="small">(1256)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                            <label className="form-check-label" htmlFor="flexCheckDefault10">Development</label>
                          </div>
                          <span className="small">(365)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                            <label className="form-check-label" htmlFor="flexCheckDefault11">Design</label>
                          </div>
                          <span className="small">(156)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                            <label className="form-check-label" htmlFor="flexCheckDefault12">Accounting</label>
                          </div>
                          <span className="small">(65)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                            <label className="form-check-label" htmlFor="flexCheckDefault14">Legal</label>
                          </div>
                          <span className="small">(65)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                            <label className="form-check-label" htmlFor="flexCheckDefault15">Photography</label>
                          </div>
                          <span className="small">(99)</span>
                        </div>
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                          <div className="card card-body p-0">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                <label className="form-check-label" htmlFor="flexCheckDefault16">Writing</label>
                              </div>
                              <span className="small">(178)</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                <label className="form-check-label" htmlFor="flexCheckDefault18">Marketing</label>
                              </div>
                              <span className="small">(104)</span>
                            </div>
                          </div>
                        </div>
                        <a className=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse"
                          href=" multiCollapseExample1" role="button" aria-expanded="false"
                          aria-controls="multiCollapseExample1">
                          See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i
                            className="fas fa-angle-down ms-2"></i>
                        </a>
                      </div>
                    </div> */}

											<div className="card card-body shadow p-4 mb-4">
												<h4 className="mb-3">Skill level</h4>
												<ul className="list-inline mb-0">
													<li className="list-inline-item mb-2">
														<input
															type="checkbox"
															className="btn-check"
															id="btn-check-12"
														/>
														<label
															className="btn btn-light btn-primary-soft-check"
															htmlFor="btn-check-12"
														>
															All levels
														</label>
													</li>
													<li className="list-inline-item mb-2">
														<input
															type="checkbox"
															className="btn-check"
															id="btn-check-9"
														/>
														<label
															className="btn btn-light btn-primary-soft-check"
															htmlFor="btn-check-9"
														>
															Basic
														</label>
													</li>
													<li className="list-inline-item mb-2">
														<input
															type="checkbox"
															className="btn-check"
															id="btn-check-10"
														/>
														<label
															className="btn btn-light btn-primary-soft-check"
															htmlFor="btn-check-10"
														>
															Intermediate
														</label>
													</li>
													<li className="list-inline-item mb-2">
														<input
															type="checkbox"
															className="btn-check"
															id="btn-check-11"
														/>
														<label
															className="btn btn-light btn-primary-soft-check"
															htmlFor="btn-check-11"
														>
															Advanced
														</label>
													</li>
												</ul>
											</div>
										</form>
									</div>
									{/* <div className="d-grid p-2 p-lg-0 text-center">
                  <button className="btn btn-primary mb-0">Filter Results</button>
                </div> */}
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

export default Main;
