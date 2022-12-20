import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ data }) => {
	return (
		<div className="col-sm-6 col-lg-4 col-xl-3">
			<div className="card shadow h-100">
				<div className="position-relative">
					<img src={data?.thumbnail}
						className="card-img-top" alt="book"
						style={{ height: "258px", objectFit: "cover", objectPosition: "center" }} />
				</div>
				<div className="card-body px-3">
					{
						data?.joined ? (
							<a href="#" className="badge bg-success bg-opacity-10 text-success mb-2">Terdaftar</a>
						) : (<></>)
					}
					<h5 className="card-title mb-0">
						<Link to={`/acara-kampus/${data.id}`} className="stretched-link ">
							{data?.name}
						</Link>
						<p className="h6 fw-light mt-1">{moment(data?.date_start).format('LLL')}</p>
					</h5>
				</div>
				<div className="card-footer pt-0 px-3">
					<div className="d-flex justify-content-between align-items-center">
						<h5 className="text-success mb-0">Rp. {data?.price}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
