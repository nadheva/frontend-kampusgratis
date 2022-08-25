import React from "react";

const Event1 = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E2ECF0"
          fillOpacity="1"
          d="M0,96L34.3,112C68.6,128,137,160,206,197.3C274.3,235,343,277,411,282.7C480,288,549,256,617,240C685.7,224,754,224,823,224C891.4,224,960,224,1029,240C1097.1,256,1166,288,1234,261.3C1302.9,235,1371,149,1406,106.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="event-section bg-abu py-5">
        <div className="container">
          <div className="mb-5">
            <h2 className="fs-1">EVENT</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-2">
                <div className="card card-event ">
                  <img
                    className="card-img img-fluid"
                    src="./assets/images/event/event-2.png"
                    alt="Bologna"
                  />
                  <div className="card-img-overlay ">
                    <div className="card-text-event">
                      <h4 className="card-title">EVENT 1</h4>
                      <p className="card-text">
                        It is the seventh most populous city in Italy, at the
                        heart of a metropolitan area of about one million
                        people.
                      </p>
                      <div>
                        <img
                          src="assets/images/calendar1-ico.png"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="card-time">
                           Agustus 2022 - September 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 py-2">
                <div className="card card-event">
                  <img
                    className="card-img img-fluid"
                    src="./assets/images/event/event-1.png"
                    alt="Bologna"
                  />
                  <div className="card-img-overlay ">
                    <div className="card-text-event">
                      <h4 className="card-title">EVENT 2</h4>
                      <p className="card-text">
                        It is the seventh most populous city in Italy, at the
                        heart of a metropolitan area of about one million
                        people.
                      </p>
                      <div>
                        <img
                          src="assets/images/calendar1-ico.png"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="card-time">
                           Agustus 2022 - September 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event1;
