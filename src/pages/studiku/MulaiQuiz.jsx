import React from "react";
import Footer2 from "../default/Footer2";
import BannerQuiz from "../../components/studiku/quiz/BannerQuiz";
import Question from "../../components/studiku/quiz/Question";

const MulaiQuiz = () => {
  return (
    <>
      <main>
        <BannerQuiz />
        <Question />
      </main>
      <Footer2 />
    </>
  );
};

export default MulaiQuiz;