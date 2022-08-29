import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header1 = () => {
  return (
    <header className="navbar-light navbar-sticky fixed-top header-static">
      <div className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          <NavLink to="/landing-page1" className="navbar-brand p-3">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/kgLogo.png"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/kgLogo.png"
              alt="logo"
            />
          </NavLink>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll me-auto"></ul>
            <ul className="navbar-nav navbar-nav-scroll me-auto ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="home-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="fakultas-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Fakultas & Jurusan
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="mentor-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Mentor
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="event-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Event
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link "
                  to="footer-section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                <NavLink
                  to="/login"
                  className="btn btn-sm btn-warning mb-0 text-white"
                >
                  Daftar / Masuk
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
