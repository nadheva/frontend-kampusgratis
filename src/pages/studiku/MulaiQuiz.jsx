import React from "react";
import Footer2 from "../../component/partials/Footer2";
import Header2 from "../../component/partials/Header2";
import BannerQuiz from "../../component/studiku/quiz/BannerQuiz";
import Question from "../../component/studiku/quiz/Question";

const MulaiQuiz = () => {
  return (
    <>
    <Header2/>
    <main>
        <BannerQuiz/>
        <Question />
    </main>
    <Footer2/>
    </>
  );
};

export default MulaiQuiz;