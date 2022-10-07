import React from "react";
import Intro from "../../components/studiku/isiForum/Intro";
import MainContent from "../../components/studiku/isiForum/MainContent";

import Header from "../default/Header";
import Footer from "../default/Footer";

const IsiForum = () => {
	return (
		<main>
			<Header />
			<Intro />
			<MainContent />
			<Footer />
		</main>
	);
};

export default IsiForum;
