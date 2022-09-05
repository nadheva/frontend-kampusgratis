import React from "react";
import Header1 from "../../component/partials/Header1";
import BannerStudiku from "../../component/studiku/homeStudiku/BannerStudiku";
import CardCategory from "../../component/studiku/homeStudiku/CardCategory";
import CardCourse from "../../component/studiku/homeStudiku/CardCourse";

import { Element } from "react-scroll";

import _Footer from "../../component/partials/_Footer";


const HomeStudiku = () => {
  return (
    <>
      <Header1 />
      <main>
        <section>
          <BannerStudiku />
        </section>
        <section className="pb-0 py-sm-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-xxl-8">
                <div className="row g-4">
                  <CardCourse />
                  <CardCourse />
                  <CardCourse />
                  <CardCourse />
                </div>
              </div>
              <div className="col-lg-3 col-xxl-4 pt-5 pt-lg-0">
                <nav className="navbar navbar-light navbar-expand-xl mx-0">
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-body p-3 p-xl-0">
                      <CardCategory />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Element name="footer-section1">
        <_Footer />
      </Element>
    </>
  );
};

export default HomeStudiku;
