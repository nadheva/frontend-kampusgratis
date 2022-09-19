import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <>
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <a className="me-0" href="index.html">
              <img className="light-mode-item h-40px" src="assets/images/logo-kampus-gratis.png" alt="Kampus Gratis" />
              <img className="dark-mode-item h-40px" src="assets/images/logo-kampus-gratis.png" alt="Kampus Gratis" />
            </a>
            <p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners. </p>
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i className="fab fa-fw fa-instagram"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i className="fab fa-fw fa-twitter"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a> </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Company</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">News and Blogs</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Library</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Career</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Community</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a className="nav-link" href="#">Documentation</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Faq</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Forum</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Sitemap</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Teaching</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a className="nav-link" href="#">Become a teacher</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">How to guide</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h5 className="mb-2 mb-md-4">Contact</h5>
            <p className="mb-2">
              Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
              <span className="d-block small">(9:AM to 8:PM IST)</span>
            </p>
            <p className="mb-0">Email:<span className="h6 fw-light ms-2">learning@m-knowsconsulting.com</span></p>
          </div>
        </div>
        <hr className="mt-4 mb-0" />
        <div className="py-3">
          <div className="container px-0">
            <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
              <div className="text-primary-hover">
                <Link to="/" className="text-body">Kampus Gratis © 2022 </Link>- Hak Cipta Dilindungi.
              </div>
              <div className="justify-content-center mt-3 mt-lg-0">
                <ul className="nav list-inline justify-content-center mb-0">
                  <li className="list-inline-item"><a className="nav-link" href="#">Terms of use</a></li>
                  <li className="list-inline-item"><a className="nav-link pe-0" href="#">Privacy policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer