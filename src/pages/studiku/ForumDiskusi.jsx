import React, { useEffect } from "react";
import Intro from "../../components/studiku/forumdiskusi/Intro";
import MainContent from "../../components/studiku/forumdiskusi/MainContent";

import Header from "../default/Header";
import Footer from "../default/Footer";

const ForumDiskusi = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Forum Diskusi";
	});

	return (
		<main>
			<Header />
			<Intro />
			<MainContent />
			<Footer />
		</main>
	);
};

export default ForumDiskusi;
