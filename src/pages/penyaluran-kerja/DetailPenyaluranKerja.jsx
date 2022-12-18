import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getJob } from "../../features/jobs/jobsSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

import Intro from "../../components/penyaluran-kerja/detail-penyaluran-kerja/Intro";
import Detail from "../../components/penyaluran-kerja/detail-penyaluran-kerja/Detail";
import Maps from "../../components/penyaluran-kerja/detail-penyaluran-kerja/Maps";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const DetailPenyaluranKerja = () => {

	const { id } = useParams();

	// Redux
	const dispatch = useDispatch();
	const [kerja, setKerja] = useState({});

	const { data, isLoading } = useSelector(
		(state) => state.jobs
	);

	useEffectOnce(() => {
		dispatch(getJob(id));
	});

	useEffect(() => {
		if (data?.job) setKerja(data?.job);
	}, [data]);

	console.log(kerja)
	return (
		<>
			<Header />
			<main>
				<Intro kerja={kerja} />
				<Detail kerja={kerja} />
				{/* <Maps /> */}
			</main>
			<Footer />
		</>
	);
};

export default DetailPenyaluranKerja;
