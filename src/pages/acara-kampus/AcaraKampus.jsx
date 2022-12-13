import React from "react";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/acara-kampus/acara-kampus/Intro";
import MainContent from "../../components/acara-kampus/acara-kampus/MainContent";

const AcaraKampus = () => {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<MainContent />
			</main>
			<Footer />
		</>
	);
};

export default AcaraKampus;
