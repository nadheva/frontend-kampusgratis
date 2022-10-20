import React from "react";

import Intro from "../../components/penyaluran-kerja/detail-penyaluran-kerja/Intro";
import Detail from "../../components/penyaluran-kerja/detail-penyaluran-kerja/Detail";
import Maps from "../../components/penyaluran-kerja/detail-penyaluran-kerja/Maps";

import Header from "../default/Header";
import Footer from "../default/Footer";

const DetailPenyaluranKerja = () => {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<Detail />
				<Maps />
			</main>
			<Footer />
		</>
	);
};

export default DetailPenyaluranKerja;
