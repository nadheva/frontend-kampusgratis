import React from 'react';
import { useNavigate, Link, NavLink, useLocation } from 'react-router-dom';
import { reset as resetToken } from '../../features/auth/authSlice';
import { reset as resetUser } from '../../features/profile/profileSlice';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Logo from '../../assets/images/logo-kampus-gratis.png';
import LogoDark from '../../assets/images/logo-kampus-gratis-dark.png';

import { useScript } from '../../hooks/useScript';
import { useEffect } from 'react';

const getFirstName = (fullName) => {
  const names = fullName.split(" ");
  return names[0];
}

const Header = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useScript("/assets/js/functions.js");

  const onLogout = () => {
    auth.signOut();

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    dispatch(resetUser());
    dispatch(resetToken());

    toast.info("Kamu berhasil keluar.");

    if (location.pathname != '/') navigate('/');
    // else window.location.reload();
  }

  const { user } = useSelector(
    (state) => state.profile
  );

  return (
    <>
      <header className="navbar-light navbar-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand me-0" to='/'>
              <img className="light-mode-item navbar-brand-item" src={Logo} alt="Kampus Gratis" />
              <img className="dark-mode-item navbar-brand-item" src={LogoDark} alt="Kampus Gratis" />
            </Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Beranda</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/kategori">Kategori</NavLink>
                </li>
              </ul>
            </div>
            {user ? (
              <div className="dropdown ms-1 ms-lg-0">
                <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside"
                  data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="avatar-img rounded-circle" style={{ border: "1px solid black", padding: "2px" }} src={user.display_picture_link != null ? `${user.display_picture_link}` : "/assets/images/avatar/empty-display-picture.png"} alt={user.fullName} />
                </a>
                <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img className="avatar-img rounded-circle shadow" src={user.display_picture_link != null ? `${user.display_picture_link}` : "/assets/images/avatar/empty-display-picture.png"} alt={user.fullName} />
                      </div>
                      <div>
                        <a className="h6" href="#">{getFirstName(user.full_name)}</a>
                        <p className="small m-0">{user.email}</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/dashboard">
                      <i className="bi bi-ui-checks-grid fa-fw me-2"></i>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/administrasi">
                      <i className="bi bi-card-list fa-fw me-2"></i>
                      Administrasi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profil">
                      <i className="bi bi-person fa-fw me-2"></i>
                      Profil
                    </NavLink>
                  </li>
                  <li>
                    <button className="dropdown-item bg-danger-soft-hover" onClick={onLogout}>
                      <i className="fas fa-sign-out-alt fa-fw me-2"></i>
                      Keluar
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="modeswitch-wrap" id="darkModeSwitch">
                      <div className="modeswitch-item">
                        <div className="modeswitch-icon"></div>
                      </div>
                      <span>Mode Gelap</span>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <div className="navbar-nav ms-2">
                  <div className="modeswitch-wrap" id="darkModeSwitch">
                    <div className="modeswitch-item">
                      <div className="modeswitch-icon"></div>
                    </div>
                  </div>
                </div>
                <div className="navbar-nav ms-2">
                  <Link className="btn btn-sm btn-dark mb-0" to='/login'>
                    <i className="bi bi-power me-2"></i>Masuk
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav >
      </header >
    </>
  );
}

export default Header;