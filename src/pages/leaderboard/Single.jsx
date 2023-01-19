import React from "react";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

import Intro from "../../components/leaderboard/Intro";
import MainContent from "../../components/leaderboard/MainContent";

const Single = () => {
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

export default Single;
