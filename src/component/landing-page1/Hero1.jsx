import React from "react";
import { NavLink } from "react-router-dom";

const Hero1 = () => {
  return (
    <section className="hero-section-kg1 position-relative py-5 ">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-md-6 col-12 text-center pt-6">
            <img
              src="assets/images/hero-kg1/hero-chara.png"
              className="img-fluid"
              alt="hero"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-12 hero-kg1">
            <h5>Mari kita belajar bersama di</h5>
            <h1>Kampus Gratis</h1>
            <p>
              Belum mempunyai akun ? <NavLink to='' className="btn btn-sm btn-outline-warning py-0 px-3 ml-0" > Klik disini!</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
