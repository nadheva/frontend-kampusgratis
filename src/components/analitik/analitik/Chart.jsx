import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCareer, resetAll } from "../../../features/career/careerSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../../../assets/js/ChangingProgressProvider";
import GradientSVG from "../../../assets/js/GradientSVG";

import "./style.css";

const Chart = () => {
	const idCSS = "hello";
	const percentage = 66;
	// Redux
	const dispatch = useDispatch();
	const [currentCareer, setCurrentCareer] = useState({});

	const { data, isLoading } = useSelector((state) => state.career);

	useEffectOnce(() => {
		dispatch(resetAll());
		dispatch(getCareer());
	});

	useEffect(() => {
		if (data?.career) setCurrentCareer(data?.career);
	}, [data]);
	return (
		<section className="pt-5 pb-0">
			<div className="container">
				{/* Chart and Ticket START */}
				<div className="row g-4 mb-4">
					{/* Ticket START */}
					<div className="col-xxl-4">
						<div className="card shadow h-100">
							{/* Card header */}
							<div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
								<h5 className="card-header-title">Performa Semester Ini</h5>
								<a href="#" className="btn btn-link p-0 mb-0">
									View all
								</a>
							</div>
							{/* Card body START */}
							<div className="card-body p-4">
								{/* Chart */}
								<div className="row justify-content-center">
									<div className="col-12 text-center">
										{/* <img
                                    src="../assets/images/element/chart.svg"
                                    className="h-200px h-md-300px mb-3"
                                    alt=""
                                /> */}
										<div className="d-flex justify-content-center mb-4">
											<div style={{ width: "60%" }}>
												<GradientSVG />
												<CircularProgressbar
													strokeWidth={12}
													value={[currentCareer?.accuracy]}
													text={currentCareer?.accuracy + "%"}
													styles={{
														path: { stroke: `url(#${idCSS})`, height: "100%" },
														trail: {
															stroke: "#eee",
														},
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Ticket END */}
					{/* Chart START */}
					<div className="col-xxl-8">
						<div className="card shadow h-100">
							{/* Card header */}
							<div className="card-header p-4 border-bottom">
								<h5 className="card-header-title">
									Analisa Hasil Belajar Tiap Semester
								</h5>
							</div>
							{/* Card body */}
							<div className="card-body">
								{/* Apex chart */}
								<div id="ChartPayout" />
							</div>
						</div>
					</div>
					{/* Chart END */}
				</div>
			</div>
		</section>
	);
};

export default Chart;
