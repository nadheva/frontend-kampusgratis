import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../../components/default/Footer";
import Header from "../../components/default/Header";
import AboutSection from "../../components/landing-page/AboutSection";
import ActionBoxSection from "../../components/landing-page/ActionBoxSection";
import ArtikelSection from "../../components/landing-page/ArtikelSection";
import HeroSection from "../../components/landing-page/HeroSection";
import JurusanSection from "../../components/landing-page/JurusanSection";
import MentorSection from "../../components/landing-page/MentorSection";
import Testimonial from "../../components/landing-page/Testimonial";
import ClientSTART from "../../components/landing-page/ClientSTART";
import WhayUseSection from "../../components/landing-page/WhayUseSection";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Main = () => {

	useEffect(() => {
		document.title = "Kampus Gratis";
	});

	const { user } = useSelector(
		(state) => state.profile
	);

	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ClientSTART />
				<AboutSection />
				<WhayUseSection />
				<JurusanSection />
				{
					user?.role !== "student" ? (<></>) :
						(
							<MentorSection />
						)
				}
				<Testimonial />
				<ArtikelSection />
				<ActionBoxSection />
			</main>
			<Footer />
		</>
	);
};

export default Main;
