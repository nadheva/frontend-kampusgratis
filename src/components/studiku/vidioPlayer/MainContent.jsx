import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainContent = ({ videos }) => {
	let url = videos.url.split("?v=")[1];
	const navigate = useNavigate();

	return (
		<>
			<div className="col-12 position-relative">
				<div className="ratio ratio-16x9">
					<iframe
						src={`https://www.youtube.com/embed/${url}`}
						title="YouTube video"
						allowFullScreen
					></iframe>
				</div>
			</div>

			{/* Deskripsi */}
			<div className="col-lg-12">
				<div className="bg-body shadow rounded-2 p-4">
					<h5 className="mb-3 ">{videos.title}</h5>
					<p className="mb-0">{videos.description}</p>
				</div>
			</div>

			{/* Btn */}
			<div className="col-lg-12">
				<Link to="" onClick={() => navigate(-1)} className="btn btn-secondary">
					<i className="fas fa-arrow-left ms-2" /> Kembali
				</Link>
			</div>
		</>
	);
};

export default MainContent;
