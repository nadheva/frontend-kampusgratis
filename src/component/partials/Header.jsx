import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar-light navbar-sticky header-static">
      <div className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          <Link to="/" className="navbar-brand">
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
          </Link>

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
                <a
                  className="nav-link active "
                  href="#"
                  id="demoMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Fakultas
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-black"
                  href="#"
                  id="demoMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mentor
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-black"
                  href="#"
                  id="demoMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-black"
                  href="#"
                  id="demoMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kontak
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link to="/login" className="nav-link text-black">Akun Saya</Link>
              </li>
            </ul>

            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                
                <a href="#" className="btn btn-sm btn-warning mb-0">
                  Coba sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
