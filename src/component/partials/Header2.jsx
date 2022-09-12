import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
// import { Nav, DropdownButton, Dropdown } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthAction";

const Header2 = () => {
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
    <header className="navbar-light navbar-sticky  header-static">
      <div className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          <NavLink to="/" className="navbar-brand p-3">
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
                <a
                  className="nav-link"
                  href="/home"
                >
                  Home
                </a>
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
            </ul>

            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">

                {!isAuthenticated ? (
                  <NavLink to="/login" className="btn btn-sm btn-warning mb-0">
                    Coba Sekarang
                  </NavLink>
                ) : (
                  <>
                    <div className="dropdown ms-1 ms-lg-0">
                      <a
                        className=" "
                        href=" "
                        id="profileDropdown"
                        role="button"
                        data-bs-auto-close="outside"
                        data-bs-display="static"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-person-fill "></i> {user.data.full_name}
                      </a>
                      <ul
                        className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                        aria-labelledby="profileDropdown"
                      >
                        <li className="px-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar me-3">
                              <img
                                className="avatar-img rounded-circle shadow"
                                src="assets/images/avatar/01.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div>
                              <a className="h6" href=" ">
                                Lori Ferguson
                              </a>
                              <p className="small m-0">example@gmail.com</p>
                            </div>
                          </div>
                          <hr />
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/edit-profile">
                            <i className="bi bi-person fa-fw me-2"></i>Edit Profile
                          </NavLink>
                        </li>
                        <li>
                          <a className="dropdown-item" href=" ">
                            <i className="bi bi-gear fa-fw me-2"></i>Account
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href=" ">
                            <i className="bi bi-info-circle fa-fw me-2"></i>Help
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item bg-danger-soft-hover"
                            href=" "
                            onClick={handleLogout}
                          >
                            <i className="bi bi-power fa-fw me-2"></i>Sign Out
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Header2;
