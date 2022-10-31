import React, { useEffect, useState } from 'react'

// componentf
import Banner from "../../components/Account/Banner";
import Sidebar from "../../components/Account/Sidebar";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import MainContent from '../../components/nilai-sertifikat/sertifikat/MainContent';

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCertificates, reset, resetAll } from "../../features/sertifikat/certificateSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Sertifikat = () => {
	// Redux
	const dispatch = useDispatch();
	const [currentCertificates, setCurrentCertificates] = useState({});

	const { data, isLoading } = useSelector(
		(state) => state.certificate
	);

	useEffectOnce(() => {
		dispatch(getCertificates());
	});

	useEffect(() => {
		if (data?.certificates) setCurrentCertificates(data.certificates);

	}, [data]);

	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<div className="card border bg-transparent rounded-3">
								<div className="card-header bg-transparent border-bottom">
									<h3 className="mb-0">List Sertifikat</h3>
								</div>
								<MainContent
									data={currentCertificates}
									isLoading={isLoading}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Sertifikat