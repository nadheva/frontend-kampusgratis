import React from "react";

// Component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/layanan-konsultasi/home-layanan/Intro";
import CardList from "../../components/layanan-konsultasi/home-layanan/CardList";

const HomeLayanan = () => {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<CardList />
			</main>
			<Footer />
		</>
	);
};

export default HomeLayanan;
