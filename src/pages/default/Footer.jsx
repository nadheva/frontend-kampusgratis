import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <>
    <footer class="bg-light pt-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3">
            <a class="me-0" href="index.html">
              <img class="light-mode-item h-40px" src="assets/images/logo-kampus-gratis.png" alt="Kampus Gratis" />
              <img class="dark-mode-item h-40px" src="assets/images/logo-kampus-gratis.png" alt="Kampus Gratis" />
            </a>
            <p class="my-3">Jl. Radio IV No.8 B, RW.4,Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130</p>
            <ul class="list-inline mb-0 mt-3">
              <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-facebook" href=" "><i class="fab fa-fw fa-facebook-f"></i></a> </li>
              <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-instagram" href=" "><i class="fab fa-fw fa-instagram"></i></a> </li>
              <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-twitter" href=" "><i class="fab fa-fw fa-twitter"></i></a> </li>
              <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-linkedin" href=" "><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="row g-4">
              <div class="col-6 col-md-4">
                <h5 class="mb-2 mb-md-4">Company</h5>
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link" href=" ">About us</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Contact us</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">News and Blogs</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Library</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Career</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-4">
                <h5 class="mb-2 mb-md-4">Community</h5>
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link" href=" ">Documentation</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Faq</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Forum</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Sitemap</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-4">
                <h5 class="mb-2 mb-md-4">Teaching</h5>
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link" href=" ">Become a teacher</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">How to guide</a></li>
                  <li class="nav-item"><a class="nav-link" href=" ">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <h5 class="mb-2 mb-md-4">Contact</h5>
            <p class="mb-2">
              Toll free:<span class="h6 fw-light ms-2">+1234 568 963</span>
              <span class="d-block small">(9:AM to 8:PM IST)</span>
            </p>
            <p class="mb-0">Email:<span class="h6 fw-light ms-2">learning@m-knowsconsulting.com</span></p>
          </div>
        </div>
        <hr class="mt-4 mb-0" />
        <div class="py-3">
          <div class="container px-0">
            <div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
              <div class="text-primary-hover">
                <Link to="/" class="text-body">Kampus Gratis © 2022 </Link>- Hak Cipta Dilindungi.
              </div>
              <div class="justify-content-center mt-3 mt-lg-0">
                <ul class="nav list-inline justify-content-center mb-0">
                  <li class="list-inline-item"><a class="nav-link" href=" ">Terms of use</a></li>
                  <li class="list-inline-item"><a class="nav-link pe-0" href=" ">Privacy policy</a></li>
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