import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { reset } from '../../features/auth/authSlice';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';

const SidebarProfile = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    auth.signOut();

    dispatch(reset());

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/');
  }

  return (
    <div className="col-xl-3">
      <nav className="navbar navbar-light navbar-expand-xl mx-0">
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header bg-light">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              My profile
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-3 p-xl-0">
            <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
              <div className="list-group list-group-dark list-group-borderless">
                <NavLink className="list-group-item" to="/dashboard">
                  <i className="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard
                </NavLink>
                <NavLink
                  className="list-group-item"
                  to="/profil">
                  <i className="bi bi-person fa-fw me-2"></i>Profil
                </NavLink>
                <button
                  className="list-group-item text-danger bg-danger-soft-hover" onClick={onLogout}>
                  <i className="fas fa-sign-out-alt fa-fw me-2"></i>Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarProfile;