import React from "react";

import Footer from "../../components/default/Footer";
import Header from "../../components/default/Header";
import AboutSection from "../../components/landing-page/AboutSection";
import ActionBoxSection from "../../components/landing-page/ActionBoxSection";
import ArtikelSection from "../../components/landing-page/ArtikelSection";
import HeroSection from "../../components/landing-page/HeroSection";
import JurusanSection from "../../components/landing-page/JurusanSection";
import MentorSection from "../../components/landing-page/MentorSection";
import Testimonial from "../../components/landing-page/Testimonial";

const Main = () => {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<JurusanSection />
				<MentorSection />
				<Testimonial />
				<ArtikelSection />
				<ActionBoxSection />
			</main>
			<Footer />
		</>
	);
};

export default Main;
