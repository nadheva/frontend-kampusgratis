import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Nav, DropdownButton, Dropdown } from 'react-bootstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthAction";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, error } = useSelector(
    (state) => state.AuthReducer
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="navbar-light navbar-sticky fixed-top header-static">
      <div className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          <NavLink to="/" className="navbar-brand">
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
                  activeClass="active"
                  className="nav-link"
                  to="fakultas-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Fakultas
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="mentor-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Mentor
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="tentang-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="footer-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Kontak
                </Link>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/login" className="nav-link">
                  Akun Saya
                </NavLink>
              </li>
            </ul>

            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                {/* <a href="#" className="btn btn-sm btn-warning mb-0">
                  Coba sekarang
                </a> */}

                {!isAuthenticated ? (
                  <NavLink 
                    to="/registration"
                    className="btn btn-sm btn-warning mb-0"
                  >
                    Coba Sekarang
                  </NavLink>
                ) : (   
                  <>
                    <DropdownButton
                      variant="success"
                      size="sm"
                      id="dropdown-basic-button"
                      title="Nama"
                      className="ms-3 "
                    >
                      <Dropdown.Item size="sm" onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </DropdownButton>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
