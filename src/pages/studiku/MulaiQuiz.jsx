import React from "react";
import BannerQuiz from "../../components/studiku/quiz/BannerQuiz";
import Question from "../../components/studiku/quiz/Question";

import Header from "../default/Header";
import Footer from "../default/Footer";

const MulaiQuiz = () => {
	return (
		<>
			<main>
				<Header />
				<BannerQuiz />
				<Question />
				<Footer />
			</main>
		</>
	);
};

export default MulaiQuiz;
