import React from "react";
import BannerStudiku from "../../components/studiku/homeStudiku/BannerStudiku";
import CardCategory from "../../components/studiku/homeStudiku/CardCategory";
import CardCourse from "../../components/studiku/homeStudiku/CardCourse";

const HomeStudiku = () => {
  return (
    <>
      <main>
        <section className="m-0 p-0">
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
    </>
  );
};

export default HomeStudiku;
