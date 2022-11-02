import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

// Component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCertificate } from "../../features/sertifikat/certificateSlice";
import useEffectOnce from "../../helpers/useEffectOnce";
import { useEffect } from 'react';

const ViewSertifikat = () => {
	let { id } = useParams();

	// Redux
	const dispatch = useDispatch();
	const [currentCertificate, setCurrentCertificate] = useState({});

	const { data, isLoading } = useSelector(
		(state) => state.certificate
	);

	useEffectOnce(() => {
		dispatch(getCertificate(id));
	});

	useEffect(() => {
		if (data?.certificate) setCurrentCertificate(data.certificate);

	}, [data]);

	return (
		<>
			<Header />
			<main>
				<section>
					<div className="container">
						<div className="row g-4 g-md-5">
							<div className="col-md-7 text-center mx-auto overflow-auto">
								{
									currentCertificate.thumbnail_link === undefined || currentCertificate.thumbnail_link === null ? <>
										<div className="card card-body img-object shadow p-2 h-300px h-sm-400px h-md-500px h-lg-500px  position-relative overflow-hidden"
											style={{
												backgroundImage: `url(/assets/images/about/29.jpg)`,
												backgroundPosition: "center left",
												backgroundSize: "cover"
											}}>
											<div className="bg-overlay bg-dark opacity-6" />
										</div>
									</> : <>
										<div className="card card-body img-object shadow p-2 h-300px h-sm-400px h-md-500px h-lg-500px  position-relative overflow-hidden"
											style={{
												backgroundImage: `url(${currentCertificate.thumbnail_link})`,
												backgroundPosition: "center left",
												backgroundSize: "cover"
											}}>
											<div className="bg-overlay bg-dark opacity-6" />
										</div>
									</>
								}
							</div>
						</div>
						<div className="row justify-content-center text-center">
							<div className="col-12 pt-4">
								<a
									className="btn btn-info"
									href={currentCertificate.link}
									download
									target="_blank"
								>
									<i className="fas fa-download me-2" />
									Download Sertifikat
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default ViewSertifikat