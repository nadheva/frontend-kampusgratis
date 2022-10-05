import React from "react";
import Intro from "../../components/studiku/pertemuan/Intro";
import MainContent from "../../components/studiku/pertemuan/MainContent";

import Header from "../default/Header";
import Footer from "../default/Footer";

const Pertemuan = () => {
	return (
		<>
			<main>
				<Header />
				<Intro />
				<MainContent />
				<Footer />
			</main>
		</>
	);
};

export default Pertemuan;
