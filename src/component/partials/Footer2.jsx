import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="pt-5 footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 widget-1">
            <h2 className="mb-2 mb-md-4">Kontak Kami</h2>
            <div className="row">
              <div className="col-lg-2 col-2">
                <img
                  src="./assets/images/icon-kontak/placeholder 1.png"
                  alt=""
                />
              </div>
              <div className="col-lg-10 col-10">
                <p className="mb-1 text">
                  Primary :
                  <span className=" fw-light ms-2">
                    Jl. Radio IV No.8 B, RW.4,Kramat Pela, Kec. Kby.Baru, Kota
                    Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
                  </span>
                </p>
                <p className="mb-1">
                  Second :
                  <span className="fw-light ms-2">
                    Jl. Raya Cirendeu No.60 Cirendeu Kec. Ciputat Timur, Kota
                    Tangerang
                  </span>
                </p>
                <p className="mb-1">
                  Tertiary :
                  <span className="fw-light ms-2">
                    Jl. Raya Darmo Permai III Surabaya. 60119
                  </span>
                </p>
              </div>
              <hr className="mt-4 mb-4" />
              <div className="row">
                <div className="col-lg-2 col-2">
                  <img
                    src="./assets/images/icon-kontak/phone-call 1.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-10 col-10">
                  <p className="mb-1">
                    Primary :
                    <span className="fw-light ms-2">0812-1046 8281</span>
                  </p>
                </div>
              </div>
              <hr className="mt-4 mb-4" />
              <div className="row">
                <div className="col-lg-2 col-2">
                  <img src="./assets/images/icon-kontak/mail 1.png" alt="" />
                </div>
                <div className="col-lg-10 col-10">
                  <p className="mb-1">
                    Primary :
                    <span className="fw-light ms-2">
                      learning@m-knowsconsulting.com
                    </span>
                  </p>
                  <p className="mb-1">
                    Secondary :
                    <span className="fw-light ms-2">
                      surabaya@m-knowsconsulting.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex align-items-end justify-content-center">
            <Link to=" " className="me-0">
              <img
                className="light-mode-item h-70px"
                src="assets/images/KGLogo4.svg"
                alt="logo"
              />
              <img
                className="dark-mode-item h-70px"
                src="assets/images/KGLogo4.svg"
                alt="logo"
              />
            </Link>
          </div>

          <div className="col-lg-4">
            <h5 className="mb-2 mb-md-4">Send Us Message</h5>
            <div className="card-form-footer">
              <form className="form-white">
                <div className="row g-3">
                  <div className="col-lg-6 col-12">
                    <div className="mb-3">
                      <label className="form-label text-white">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        aria-label="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="mb-3">
                      <label className="form-label text-white">
                        Email Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-white">Message</label>
                  <textarea
                    className="form-control md-textarea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-warning btn-form-footer"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-0" />
        <div className="py-3">
          <div className="container px-0">
            <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
              <div className="text-primary-hover">
                2022 - www.kampusgratis.id. All Rights Reserved
              </div>
              <div className=" mt-3 mt-md-0">
                <ul className="list-inline mb-0 mt-3">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-white btn-sm shadow px-2 text-instagram"
                      href=" "
                    >
                      <i className="fab fa-fw fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-white btn-sm shadow px-2 text-facebook"
                      href=" "
                    >
                      <i className="fab fa-fw fa-facebook-f"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className="btn btn-white btn-sm shadow px-2 text-linkedin"
                      href=" "
                    >
                      <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" mt-3 mt-md-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="nav-link" href=" ">
                      Terms & Condition
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link" href=" ">
                      Help
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link pe-0" href=" ">
                      Privacy Police
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
