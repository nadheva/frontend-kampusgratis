import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ data }) => {
	return (
		<div className="col-sm-6 col-lg-4 col-xl-3">
			<div className="card shadow h-100">
				<div className="position-relative">
					<img src={data.img} className="card-img-top" alt="book" />
					{/* <div className="card-img-overlay d-flex z-index-0 p-3">
						<div className="w-100 mb-auto d-flex justify-content-end">
							<div className="icon-md bg-dark rounded-circle fs-5">
								<a href=" " className="text-white">
									<i className="bi bi-share" />
								</a>
							</div>
						</div>
					</div> */}
				</div>
				<div className="card-body px-3">
					{/* <p className="badge bg-primary bg-opacity-10 text-primary mb-2">
						{data.zoom}
					</p> */}
					<h5 className="card-title mb-0">
						<Link to={`/acara-kampus/${data.id}`} className="stretched-link">
							{data.title}
						</Link>
					</h5>
				</div>
				<div className="card-footer pt-0 px-3">
					<div className="d-flex justify-content-between align-items-center">
						<span className="h6 fw-light mb-0">{data.date}</span>
						<h5 className="text-success mb-0">{data.harga}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
