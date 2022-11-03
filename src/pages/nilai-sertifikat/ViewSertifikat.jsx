import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from '../../components/nilai-sertifikat/viewSertifikat/Intro';
import SertifikatItem from '../../components/nilai-sertifikat/viewSertifikat/SertifikatItem';

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCertificate } from "../../features/sertifikat/certificateSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const ViewSertifikat = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Certificate";
	});

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
				<Intro />
				<SertifikatItem
					currentCertificate={currentCertificate}
					isLoading={isLoading}
				/>
			</main>
			<Footer />
		</>
	)
}

export default ViewSertifikat