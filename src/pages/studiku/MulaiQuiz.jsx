import React from "react";
import Footer2 from "../../component/partials/Footer2";
import Header3 from "../../component/partials/Header3";
import BannerQuiz from "../../component/studiku/quiz/BannerQuiz";
import Question from "../../component/studiku/quiz/Question";

const MulaiQuiz = () => {
  return (
    <>
      <Header3 />
      <main>
        <BannerQuiz />
        <Question />
      </main>
      <Footer2 />
    </>
  );
};

export default MulaiQuiz;