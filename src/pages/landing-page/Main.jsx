import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return <>
    <section className="bg-light pb-5">
      <div className="container pt-5 mt-0 mt-lg-5">
        <div className="row position-relative mb-0 mb-sm-5 pb-0 pb-lg-5">
          <div className="col-lg-8 text-center mx-auto position-relative">
            <figure className="position-absolute top-0 start-0 ms-n9">
              <svg width="22px" height="22px" viewBox="0 0 22 22">
                <polygon className="fill-orange"
                  points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 ">
                </polygon>
              </svg>
            </figure>
            <figure className="position-absolute top-100 start-100 translate-middle ms-5 d-none d-lg-block">
              <svg width="21.5px" height="21.5px" viewBox="0 0 21.5 21.5">
                <polygon className="fill-danger"
                  points="21.5,14.3 14.4,9.9 18.9,2.8 14.3,0 9.9,7.1 2.8,2.6 0,7.2 7.1,11.6 2.6,18.7 7.2,21.5 11.6,14.4 18.7,18.9 ">
                </polygon>
              </svg>
            </figure>
            <figure className="position-absolute top-0 start-100 translate-middle d-none d-md-block">
              <svg width="27px" height="27px">
                <path className="fill-purple"
                  d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z">
                </path>
              </svg>
            </figure>
            <h1>
              Pembelajaran <span className="text-success">Gratis</span> dan <span className="text-danger">Terpercaya</span> Pertama di Indonesia
            </h1>
            <p>
              Dapatkan inspirasi dan temukan sesuatu yang baru hari ini. Kembangkan keterampilan Anda kursus dan sertifikasi online paling berguna di bidang pemasaran, teknologi informasi, pemrograman, dan ilmu data.
            </p>
            <Link to="/login" className="btn btn-primary">
              Coba Sekarang - Gratis!
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-light mt-0 pt-1'>
      <div className="container">
        <figure className="position-absolute translate-middle-y ms-5 d-none d-md-block">
          <svg enableBackground={"new 0 0 44.1 76.2"}>
            <path className="fill-orange" d="m25 32c-0.7-0.4-1.4-1-1.1-1.8 0.3-0.9 0.7-1.9 1.8-2.2 1-0.3 2-0.6 3-0.6 1.8-0.1 3.7-0.7 5.5-0.1 0.2 0.1 0.5-0.1 0.8-0.1 0.7 0 1.4 0 2 0.1 1.5 0.4 2 2 0.9 3-0.5 0.5-0.5 1-0.5 1.6 0.2 2.3 0.4 4.6 0.7 6.9 0.3 3.5 0.7 7 1 10.5l0.6 6.9c0.2 2.3 0.5 4.7 0.7 7 0.1 1.8 0.2 3.7 0.3 5.6 0 0.2-0.1 0.4-0.2 0.6-0.9-7-1.5-14.1-2.1-21.3-1.9 0.6-3.6 1-5.5 1-1.7 0-3.5 0.1-5.4 0.2v1.6c0.3 3.4 0.6 6.8 0.9 10.3 0.2 2.2 0.2 4.3 0.6 6.5 0.2 1.6 0.7 3.1 1.3 4.7 0.6 1.8 2.2 2.7 4 3.1 2.8 0.6 5.2-0.3 6.2-2.6 0.4-1 0.7-2.1 0.9-3.1 0.2-0.9 0.1-1.9 0.2-2.8 0-0.4 0.1-0.8 0.4-1.3 0.1 0.4 0.3 0.8 0.3 1.2 0.1 2.1-0.1 4.2-1.1 6.2-1.4 2.9-4 3.7-7 3.1-2.2-0.5-3.6-1.8-4.7-3.9-1.2-2.2-1-4.5-1.2-6.8-0.3-2.5-0.4-5-0.6-7.5s-0.4-5-0.6-7.6c-0.3-3.5-0.6-6.9-0.9-10.4-0.8-2.7-1-5.3-1.2-8zm2 15.3c3.5-2.1 7.1-2.1 11-1.3-0.4-4.8-0.9-9.5-1.3-14-3.7 0.1-7.2 0.2-11 0.3 0.4 5 0.8 9.9 1.3 15zm0.4 1c3.2 0.5 6.2 0.2 9.2-0.6 0.4-0.1 0.7-0.4 1.2-0.6-2.5-1.7-9-0.9-10.4 1.2zm-2-19.3c2.2 1.4 9.6 1 11-0.6-0.5-0.5-1-0.7-1.7-0.5-0.4 0.1-0.9 0.2-1.3 0.1-2.1-0.5-4.1 0.1-6.2 0.3-0.6 0-1.3 0.1-1.8 0.7zm-0.8 0.9c0 0.1-0.1 0.2-0.1 0.4 0.7 0.3 0.8 1.2 1.8 1.2 3.3-0.1 6.7-0.1 9.8-0.2 0.7-0.8 1.2-1.5 1.7-2.2-1.6 0.2-3 0.8-4.4 1.1s-3 0.3-4.4 0.2c-1.5 0-2.9-0.3-4.4-0.5z"></path>
            <path className="fill-orange" d="m13.1 62.4c0.9 2.3 1.8 4.6 2.7 6.9 0.1 0.3 0.3 0.6 0.5 0.9 1.3 1.9 3.4 2.6 5.6 1.8 1.4-0.5 2.2-1.5 2.3-2.9 0.1-1.1 0-2.2-0.1-3.4 0-0.6-0.2-1.3-0.3-1.9 0.1 0 0.2-0.1 0.3-0.1 0.2 0.4 0.4 0.8 0.5 1.3 0.4 1.4 0.5 2.8 0.3 4.2-0.2 1.5-1 2.6-2.4 3.2-2.3 1.1-4.8 0.5-6.5-1.3-0.9-1-1.4-2.1-1.8-3.3-2.2-6.6-4.5-13.1-6.7-19.7-0.5-1.5-1-3.1-1.5-4.6-0.1-0.6-0.3-1.1-1-1.5-0.9-0.5-0.6-2.3 0.5-2.9 0.7-0.4 1.5-0.8 2.3-1 1.7-0.5 3.3-1 5-1.4 1.3-0.3 1.9 0 2.2 0.9 0.1 0.3 0.1 0.6 0 0.8-0.6 0.8-0.2 1.6 0.1 2.3 1.6 4.6 3.1 9.1 4.7 13.7 1.3 3.7 2.5 7.3 3.8 11 0.2 0.5 0.3 1.1 0.2 1.7-1.4-2.2-1.8-4.8-2.9-7.1-2.4 1.3-4.9 2.1-7.8 2.4zm-6.6-20c2.1 6.2 4.2 12.4 6.4 18.7 2.1-2.4 4.8-2.7 7.5-3.2-2.1-6-4.1-11.9-6.1-17.8-2.7 0.8-5.2 1.5-7.8 2.3zm14 16.5c-2.6-0.3-5.9 1-7 2.7 1.9-0.1 3.5-0.7 5.1-1.4 0.6-0.2 1.5-0.3 1.9-1.3zm-15-19.1c2.5 0.5 6.8-0.9 7.7-2.5-2.7 0.5-5.2 1.1-7.7 2.5zm9-1.9c-1.5 0.7-2.9 1.6-4.3 2.1-1.5 0.5-3.1 0.7-5 1.1 0.6 0.2 0.9 0.4 1.3 0.4 0.5 0 1.1-0.1 1.6-0.3 1.9-0.5 3.8-1.1 5.7-1.6 0.2-0.6 0.5-1.1 0.7-1.7z"></path>
            <path className="fill-orange" d="m33.1 15c-1.4 0-2.6-1.2-2.5-2.5 0.1-1.6 1.8-3 3.1-2.9 1.2 0.1 2.6 1.4 2.5 2.5-0.1 1.6-1.6 2.9-3.1 2.9zm0.7-4.7c-1.4-0.1-2.5 1.2-2.6 2.2-0.1 0.9 0.8 1.7 1.9 1.7 1.2 0 2.3-1 2.3-2.1 0-1-0.7-1.7-1.6-1.8z"></path>
            <path className="fill-orange" d="m22.6 1c1.8 0 2.6 0.7 2.6 2.3 0 1.7-1 2.8-2.7 2.8-1.5 0-2.6-1-2.6-2.5 0-1.6 1-2.6 2.7-2.6zm0.3 0.2c-0.4 0.2-0.8 0.3-1.1 0.5-0.9 0.4-1.4 1.4-1.1 2.5 0.2 0.8 1 1.3 2 1.2s1.8-0.8 1.9-1.8c0.1-1.2-0.6-1.9-1.7-2.4z"></path>
            <path className="fill-orange" d="m2.9 28.6c-1.4 0-2.4-0.7-2.7-1.8-0.3-0.9 0.1-1.9 0.9-2.6 0.1-0.1 0.3-0.3 0.4-0.3 1.1 0 2.4-0.1 3.3 0.7 0.7 0.6 0.7 1.4 0.5 2.1-0.3 0.9-0.9 1.5-1.9 1.8-0.2 0-0.4 0-0.5 0.1zm-0.2-0.7c1.1 0 1.9-0.7 2-1.7 0.1-0.8-0.8-1.7-1.9-1.8s-2.1 0.8-2.2 1.8c0 0.8 1 1.6 2.1 1.7z"></path>
            <path className="fill-orange" d="m28.9 21.3c-0.9 0-1.5-0.7-1.5-1.7s0.7-1.6 1.8-1.5c1.2 0 1.8 0.5 1.8 1.4 0.1 0.8-1.1 1.8-2.1 1.8zm1.5-2.1c-0.2-0.1-0.4-0.5-0.7-0.6-0.7-0.2-1.5 0.4-1.5 1 0 0.5 0.2 0.9 0.7 1 0.5 0 1.4-0.6 1.5-1.4z"></path>
            <path className="fill-orange" d="m26.8 9.4c1.3 0.2 1.7 0.8 1.2 1.8-0.4 0.9-1.6 1.4-2.4 1s-1.3-1.4-0.9-2.3c0.3-0.8 0.7-0.9 1.6-0.4-1.1 0.7-1.3 1-0.8 1.6 0.4 0.5 1 0.6 1.5 0.1 0.6-0.5 0.6-0.9-0.2-1.8z"></path>
            <path className="fill-orange" d="m10 29.4c-0.8 0-1.6-0.7-1.6-1.5 0-0.7 0.7-1.4 1.4-1.4 0.9 0 1.9 0.7 1.9 1.4-0.1 0.8-0.9 1.5-1.7 1.5zm-0.6-2.1c-0.2 1-0.1 1.4 0.4 1.5 0.5 0 0.9-0.4 1-1.3-0.4-0.1-0.9-0.1-1.4-0.2z"></path>
            <path className="fill-orange" d="m32.4 20.3c0.7-0.4 1.1-0.8 1-1.7 0.7 0.7 1.4 1 2.5 0.8-0.7 0.6-1.6 0.9-1.4 2-0.3-0.3-0.6-0.6-0.8-0.9-0.4 0-0.8 0-1.1 0.1-0.1-0.1-0.2-0.2-0.2-0.3z"></path>
            <path className="fill-orange" d="m8.1 33.5c0 0.7-0.6 1.3-1.2 1.3-0.5 0-0.9-0.4-0.8-1 0-0.7 0.6-1.3 1.1-1.3 0.5 0.1 0.9 0.5 0.9 1z"></path>
            <path className="fill-orange" d="m7.1 21.6c-0.7 0-1.1-0.5-1-1.1 0-0.7 0.5-1.1 1.1-1.1 0.7 0 1.1 0.5 1.1 1.1 0 0.7-0.5 1.1-1.2 1.1zm0.4-1.8c-0.3 0.3-0.5 0.6-0.6 0.8 0.1 0.1 0.3 0.3 0.4 0.3 0.3-0.1 0.6-0.3 0.2-1.1z"></path>
            <path className="fill-orange" d="m30.2 24.7c-0.1 0.7-0.5 1-1.1 1-0.3 0-0.7-0.3-0.8-0.6-0.1-0.4 0.1-0.8 0.3-1.2 0-0.1 0.5-0.1 0.7 0 0.3 0.3 0.6 0.6 0.9 0.8z"></path>
            <path className="fill-orange" d="m25 14.6c0.2 0.2 0.3 0.4 0.5 0.6 0.2 0.1 0.4 0.2 0.6 0.4-0.3 0.4-0.6 0.8-0.9 1.2-0.4-0.3-0.7-0.6-1-0.9 0.2-0.4 0.5-0.8 0.8-1.3z"></path>
            <path className="fill-orange" d="m32.4 3.8c-1.3 0.6-2.3 0.5-3.4 0.3 0.7-0.7 1.5-0.7 3.4-0.3z"></path>
          </svg>
        </figure>
        <figure className="position-absolute top-0 end-0 me-5">
          <svg width="38.4px" height="42.4px">
            <path className="fill-info" d="M23.5,32.8c2.7-1.6,5.1-3.1,7.4-4.5c0.6-0.4,1.2-0.3,1.5,0.3c1.8,4.1,3.7,8.1,4.7,12.5c0,0.1,0,0.1,0,0.2 c-0.6,0.8-1.4,0.7-2.1,0.2c-2.8-1.8-5.5-3.8-8.4-5.4c-4-2.3-6.6-6-9.5-9.4c-2.7-3.2-5.4-6.6-8-9.9c-0.8-1-1.5-1.9-1.7-3.2 C12.7,20,17.9,26.6,23.5,32.8z M30.9,29.3c-2.3,1.3-4.5,2.4-6.4,4.3c2.3,1.5,4.4,2.9,6.5,4.3c0.9-0.9,1.7-1.7,2.6-2.4 C32.7,33.4,31.9,31.5,30.9,29.3z M35,40.5c0-1.6-0.5-2.8-1.2-4.1c-0.7,0.8-1.2,1.4-1.9,2.2C33,39.3,33.9,39.8,35,40.5z"></path>
            <path className="fill-info" d="M8,13c1.6-2,4.1-3,6-5c-0.4-0.4-0.8-0.8-1.1-1.1C11,8.3,9.3,9.4,7.6,10.7c-0.9,0.7-1.8,1.4-1.4,3.1 c-2.6-2.1-4.8-4-5.1-7.2C0.9,4.7,1.7,3.1,3.3,2c1.6-1.2,3.4-1.4,5.2-0.5c2.1,1.1,3.7,2.9,5.2,4.6c0.5,0.6,0.8,1.4,1.8,1.4 c0.2,0,0.4,0.3,0.5,0.4c4.8,6,9.7,12,13.6,18.6c0.2,0.3,0.3,0.7,0.5,1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.4-0.5-0.9-0.9-1.2-1.4 c-1.9-2.6-3.6-5.4-5.5-7.9c-2.3-3-4.6-5.9-7-8.8c-1-1.2-1.1-1.2-2.4-0.1c-1.5,1.2-3.1,2.4-4.7,3.6c-0.2,0.2-0.5,0.2-0.8,0.3 C8.1,13.2,8,13.1,8,13z M12.1,5.8C10.7,4,9.5,3.1,8.2,2.4C6.5,1.6,4.9,1.7,3.4,3.1C2.2,4.2,1.7,5.6,2.2,7.3c0.5,1.8,1.5,3.2,3.1,4.3 C7.3,9.4,10.2,8.3,12.1,5.8z"></path>
          </svg>
        </figure>
        <figure className="position-absolute top-50 end-0 translate-middle-y me-5 d-none d-lg-block">
          <svg width="81.3px" height="106.2px">
            <path className="fill-danger" d="M29.9,41.1c-1.7-0.8-2.4-1.5-2.7-2.8c-0.4-1.4-1.7-2.5-2.5-3.7c-4.4-6.7-6.9-14-6.6-22.1 c0.2-4.2,0.9-7.3,2.8-9.6c-0.3,1.9-0.5,3.8-0.9,5.6c-1.5,7.5,0.1,14.6,3.6,21.3c1.5,2.9,3.4,5.6,5.3,8.6 c9.3-4.1,14.3-11.3,16.7-20.6c0.7,2,0.3,3.7-0.3,5.4C42.8,29.9,38.3,35,32,38.6c-0.5,0.3-0.9,0.6-1.4,0.8c0.4,1.5,1.2,2,2.5,1.1 c2.5-1.8,5.1-3.6,7.5-5.5c3.2-2.4,6.5-4.3,10.6-4.8c5.9-0.7,10.7,1.2,15,5c4.7,4.2,7.4,9.7,9.3,15.5c3.2,9.7,3.2,19.6,0.7,29.5 c-0.5,1.8-1.3,3.5-2.1,5.2c-1.6,3.5-5,4.8-8.3,5.8c-1.3,0.4-3-0.1-4.4,0.2c-3.1,0.7-5.6,2.1-6.5,5.5c-0.4,1.7-1.9,2.8-3.4,3.6 c-5.3,2.7-10.9,2.9-16.4,1.1C23.5,98,14,91.3,7,81.1c-6.1-9-6.2-20.8-0.1-29.8c3.6-5.2,8.5-8.4,15-8.8c1.9-0.1,3.7-0.3,5.6-0.6 C28.2,41.9,28.7,41.6,29.9,41.1z M32.5,43.4c-1.5-0.1-2.6-0.3-3.8-0.3c-2.2,0.2-4.3,0.6-6.4,0.7c-5.4,0.4-9.8,2.6-13.1,6.8 c-6.7,8.5-7.3,20.1-1,29.5c5.7,8.6,13.6,14.5,23,18.5c5.4,2.3,10.9,3.6,16.7,1.8c2.8-0.9,5.5-1.9,6.3-5.3c0.5-1.8,1.8-3.1,3.5-3.8 c2.3-0.9,4.6-2,6.9-2.2c2.7-0.3,4.5-1.4,5.8-3.4c1.2-1.8,2.4-3.6,3.2-5.6c2.9-7.4,3.3-15,2-22.8c-1.2-7.1-3.7-13.6-8.4-19.1 c-7.1-8.2-17.4-8.7-24.7-2.8c-2.9,2.3-5.9,4.3-8.9,6.5C33.1,42.4,32.8,43.1,32.5,43.4z"></path>
            <path className="fill-danger" d="M41.7,2.6c6.6,11.8,1.7,27-10.7,31.8c0.9-0.8,1.8-1.6,2.7-2.4c3.3-2.8,6.3-6,8-10c2.4-5.4,2-11.6-0.4-17 c-0.3,0.1-0.6,0-0.8,0.2c-5.8,4.6-11.1,9.5-13.4,16.9c-0.9,2.9-0.6,5.7,0.8,8.5c0.3,0.6,0.5,1.3,0.9,2.4c-2-0.8-2.5-2.1-2.9-3.4 c-1.3-3.7-0.9-7.3,0.9-10.6c1.2-2.4,2.7-4.7,4.4-6.9C34.1,8.5,37.7,5.5,41.7,2.6z"></path>
          </svg>
        </figure>
        <div className="row g-lg-5 mt-3">
          <div className="col-md-3 col-lg-3 text-center position-relative">
            <figure className="position-absolute top-0 start-100 translate-middle d-none d-lg-block">
              <svg width="182.9px" height="86px" viewBox="0 0 182.9 86">
                <path className="fill-secondary" d="M127.3,19.8c0.9,0.7,1.8,1.5,2.8,2c9.3,4.5,17.1,11.1,24.4,18.3c6.5,6.4,11.9,13.7,15.8,22 c1.5,3.2,2.7,6.6,4.2,10.2c2.5-4.2,4.1-8.9,8.6-11.5c-2.2,3.9-4.7,7.7-6.5,11.9c-1.7,4.1-2.6,8.6-3.9,13.4 c-4.1-6.1-7-13.2-14.9-15.6c3.8-1.4,6.2,0.5,14.1,10.3c1-2.2,1.8-4.1,1.1-6.5c-3.8-13.6-11.4-24.8-21.4-34.6 c-5.8-5.7-12.3-10.6-19.2-14.9c-7-4.3-14.4-8-22.2-10.9c-10.7-3.8-21.5-6.6-32.8-7.7C63.9,5,50.7,5.9,38,10.4 c-14.1,5-26,13.2-35,25.4c-0.5,0.7-1.2,1.4-1.8,2.1C1.1,38,0.8,38,0.4,38.1c-0.9-0.9-0.2-1.7,0.3-2.4c4.7-6.7,10.5-12.4,17.2-17.1 C31.7,8.9,47.2,4.7,63.8,4C77.1,3.5,90,5.8,102.7,9.3c2.2,0.6,4.3,1.8,6.5,2.6c0.9,0.4,2,0.5,2.9,0.7 C117.1,15,122.2,17.4,127.3,19.8z"></path>
              </svg>
            </figure>
            <div className="px-4">
              <div className="icon-xxl bg-body shadow mx-auto rounded-circle mb-3">
                <img src="assets/images/element/child.svg" alt="" />
              </div>
              <h5>Konten Menarik</h5>
              <p className="text-truncate-2 pb-0">
                Vidio, Presentasi, Dokumen. Bisa digunakan di perangkat apa pun!
              </p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 text-center pt-0 pt-lg-5 position-relative">
            <figure className="position-absolute top-100 start-100 translate-middle mt-n3 d-none d-lg-block">
              <svg width="182.9px" height="86px" viewBox="0 0 182.9 86">
                <path className="fill-secondary" d="M127.3,70.2c0.9-0.7,1.8-1.5,2.8-2c9.3-4.5,17.1-11.1,24.4-18.3c6.5-6.4,11.9-13.7,15.8-22 c1.5-3.2,2.7-6.6,4.2-10.2c2.5,4.2,4.1,8.9,8.6,11.5c-2.2-3.9-4.7-7.7-6.5-11.9c-1.7-4.1-2.6-8.6-3.9-13.4 c-4.1,6.1-7,13.2-14.9,15.6c3.8,1.4,6.2-0.5,14.1-10.3c1,2.2,1.8,4.1,1.1,6.5c-3.8,13.6-11.4,24.8-21.4,34.6 c-5.8,5.7-12.3,10.6-19.2,14.9c-7,4.3-14.4,8-22.2,10.9c-10.7,3.8-21.5,6.6-32.8,7.7C63.9,85,50.7,84.1,38,79.6 c-14.1-5-26-13.2-35-25.4c-0.5-0.7-1.2-1.4-1.8-2.1c-0.1-0.1-0.4-0.1-0.8-0.2c-0.9,0.9-0.2,1.7,0.3,2.4c4.7,6.7,10.5,12.4,17.2,17.1 c13.7,9.7,29.2,14,45.9,14.6c13.3,0.5,26.2-1.8,38.8-5.3c2.2-0.6,4.3-1.8,6.5-2.6c0.9-0.4,2-0.5,2.9-0.7 C117.1,74.9,122.2,72.6,127.3,70.2z"></path>
              </svg>
            </figure>
            <div className="px-4">
              <div className="icon-xxl bg-body shadow mx-auto rounded-circle mb-3">
                <img src="assets/images/element/idea.svg" alt="" />
              </div>
              <h5>Belajar Menjadi Mudah</h5>
              <p className="text-truncate-2 pb-0">
                Pembelajaran yang terstruktur membuat belajar menjadi lebih mudah dan cepat!
              </p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 text-center position-relative">
            <figure className="position-absolute top-0 start-100 translate-middle d-none d-lg-block">
              <svg width="292.9px" height="86px" viewBox="0 0 182.9 86">
                <path className="fill-secondary" d="M127.3,19.8c0.9,0.7,1.8,1.5,2.8,2c9.3,4.5,17.1,11.1,24.4,18.3c6.5,6.4,11.9,13.7,15.8,22 c1.5,3.2,2.7,6.6,4.2,10.2c2.5-4.2,4.1-8.9,8.6-11.5c-2.2,3.9-4.7,7.7-6.5,11.9c-1.7,4.1-2.6,8.6-3.9,13.4 c-4.1-6.1-7-13.2-14.9-15.6c3.8-1.4,6.2,0.5,14.1,10.3c1-2.2,1.8-4.1,1.1-6.5c-3.8-13.6-11.4-24.8-21.4-34.6 c-5.8-5.7-12.3-10.6-19.2-14.9c-7-4.3-14.4-8-22.2-10.9c-10.7-3.8-21.5-6.6-32.8-7.7C63.9,5,50.7,5.9,38,10.4 c-14.1,5-26,13.2-35,25.4c-0.5,0.7-1.2,1.4-1.8,2.1C1.1,38,0.8,38,0.4,38.1c-0.9-0.9-0.2-1.7,0.3-2.4c4.7-6.7,10.5-12.4,17.2-17.1 C31.7,8.9,47.2,4.7,63.8,4C77.1,3.5,90,5.8,102.7,9.3c2.2,0.6,4.3,1.8,6.5,2.6c0.9,0.4,2,0.5,2.9,0.7 C117.1,15,122.2,17.4,127.3,19.8z"></path>
              </svg>
            </figure>
            <div className="px-4">
              <div className="icon-xxl bg-body shadow mx-auto rounded-circle mb-3">
                <img src="assets/images/element/help.svg" alt="" />
              </div>
              <h5>Kuis dan Ulasan</h5>
              <p className="text-truncate-2 pb-0">
                Uji kemampuan anda & lihat apa pendapat mereka tentang konten Kami.</p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 text-center">
            <div className="px-4">
              <div className="icon-xxl bg-body shadow mx-auto rounded-circle mb-3">
                <img src="assets/images/element/child.svg" alt="" />
              </div>
              <h5>Ilmu yang Berkualitas</h5>
              <p className="text-truncate-2 pb-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, voluptas.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-light p-4 p-sm-5 rounded-3 position-relative overflow-hidden">
              <figure className="position-absolute top-0 start-0 d-none d-lg-block ms-n7">
                <svg width="294.5px" height="261.6px" viewBox="0 0 294.5 261.6">
                  <path className="fill-warning opacity-5" d="M280.7,84.9c-4.6-9.5-10.1-18.6-16.4-27.2c-18.4-25.2-44.9-45.3-76-54.2c-31.7-9.1-67.7-0.2-93.1,21.6 C82,36.4,71.9,50.6,65.4,66.3c-4.6,11.1-9.5,22.3-17.2,31.8c-6.8,8.3-15.6,15-22.8,23C10.4,137.6-0.1,157.2,0,179 c0.1,28,11.4,64.6,40.4,76.7c23.9,10,50.7-3.1,75.4-4.7c23.1-1.5,43.1,10.4,65.5,10.6c53.4,0.6,97.8-42,109.7-90.4 C298.5,140.9,293.4,111.5,280.7,84.9z"></path>
                </svg>
              </figure>
              <figure className="position-absolute top-50 start-50 translate-middle">
                <svg width="453px" height="211px">
                  <path className="fill-orange" d="M16.002,8.001 C16.002,12.420 12.420,16.002 8.001,16.002 C3.582,16.002 -0.000,12.420 -0.000,8.001 C-0.000,3.582 3.582,-0.000 8.001,-0.000 C12.420,-0.000 16.002,3.582 16.002,8.001 Z"></path>
                  <path className="fill-warning" d="M176.227,203.296 C176.227,207.326 172.819,210.593 168.614,210.593 C164.409,210.593 161.000,207.326 161.000,203.296 C161.000,199.266 164.409,196.000 168.614,196.000 C172.819,196.000 176.227,199.266 176.227,203.296 Z"></path>
                  <path className="fill-primary" d="M453.002,65.001 C453.002,69.420 449.420,73.002 445.001,73.002 C440.582,73.002 437.000,69.420 437.000,65.001 C437.000,60.582 440.582,57.000 445.001,57.000 C449.420,57.000 453.002,60.582 453.002,65.001 Z"></path>
                </svg>
              </figure>
              <img src="assets/images/element/09.svg" className="position-absolute bottom-0 end-0 z-index-1 d-none d-lg-block me-n3" alt="" />
              <figure className="position-absolute top-0 end-0 mt-5 me-n5 d-none d-sm-block">
                <svg width="285px" height="272px">
                  <path className="fill-info opacity-4" d="M142.500,-0.000 C221.200,-0.000 285.000,60.889 285.000,136.000 C285.000,211.111 221.200,272.000 142.500,272.000 C63.799,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 63.799,-0.000 142.500,-0.000 Z"></path>
                </svg>
              </figure>
              <div className="row g-4 justify-content-center align-items-center position-relative">
                <div className="col-lg-3 text-center text-lg-start ps-0">
                  <img src="assets/images/element/08.svg" alt="" />
                </div>
                <div className="col-lg-6 text-center">
                  <h3 className="mb-0 mt-2 mb-2">Tujuan pendidikan adalah mengganti pikiran kosong dengan pikiran terbuka.</h3>
                  <span className="h6 fw-light">- Malcolm Forbes</span>
                </div>
                <div className="col-lg-3 text-center text-lg-end z-index-9">
                  <a href="#" className="btn btn-warning mb-0">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="fs-1 fw-bold">
              <span className="position-relative z-index-9">Trending </span>
              <span className="position-relative z-index-1">
                Courses
                <span className="position-absolute top-50 start-50 translate-middle z-index-n1">
                  <svg width="163.9px" height="48.6px">
                    <path
                      className="fill-warning"
                      d="M162.5,19.9c-0.1-0.4-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-0.5-0.4-0.7c-0.3-0.4-0.7-0.7-1.2-0.9l0.1,0l-0.1,0 c0.1-0.4-0.2-0.5-0.5-0.6c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.3-0.3c0-0.3,0-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.6-0.2 c0-0.3-0.1-0.5-0.3-0.6c-0.1-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.1,0-0.2,0c-0.5-0.4-1-0.8-1.4-1.1c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.3-0.2 c-0.9-0.5-1.8-1-2.6-1.5c-6-3.6-13.2-4.3-19.8-6.2c-4.1-1.2-8.4-1.4-12.6-2c-5.6-0.8-11.3-0.6-16.9-1.1c-2.3-0.2-4.6-0.3-6.8-0.3 c-1.2,0-2.4-0.2-3.5-0.1c-2.4,0.4-4.9,0.6-7.4,0.7c-0.8,0-1.7,0.1-2.5,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0 c-0.9,0-1.8,0.1-2.7,0.1c-0.9,0-1.8,0-2.7,0c-5.5-0.3-10.7,0.7-16,1.5c-2.5,0.4-5.1,1-7.6,1.5c-2.8,0.6-5.6,0.7-8.4,1.4 c-4.1,1-8.2,1.9-12.3,2.6c-4,0.7-8,1.6-11.9,2.7c-3.6,1-6.9,2.5-10.1,4.1c-1.9,0.9-3.8,1.7-5.2,3.2c-1.7,1.8-2.8,4-4.2,6 c-1,1.3-0.7,2.5,0.2,3.9c2,3.1,5.5,4.4,9,5.7c1.8,0.7,3.6,1,5.3,1.8c2.3,1.1,4.6,2.3,7.1,3.2c5.2,2,10.6,3.4,16.2,4.4 c3,0.6,6.2,0.9,9.2,1.1c4.8,0.3,9.5,1.1,14.3,0.8c0.3,0.3,0.6,0.3,0.9-0.1c0.7-0.3,1.4,0.1,2.1-0.1c3.7-0.6,7.6-0.3,11.3-0.3 c2.1,0,4.3,0.3,6.4,0.2c4-0.2,8-0.4,11.9-0.8c5.4-0.5,10.9-1,16.2-2.2c0.1,0.2,0.2,0.1,0.2,0c0.5-0.1,1-0.2,1.4-0.3 c0.1,0.1,0.2,0.1,0.3,0c0.5-0.1,1-0.3,1.6-0.3c3.3-0.3,6.7-0.6,10-1c2.1-0.3,4.1-0.8,6.2-1.2c0.2,0.1,0.3,0.1,0.4,0.1 c0.1,0,0.1,0,0.2-0.1c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0.1-0.1c0.2-0.1,0.4-0.1,0.6-0.2c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.2 c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.2,0,0.4-0.1,0.5-0.1c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0.2,0,0.3-0.1,0.3-0.3c0.5-0.2,0.9-0.4,1.4-0.5 c0.1,0,0.2,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.2,0.1,0.4,0.1,0.6,0 c0.1,0,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0.5-0.2,1-0.4,1.6-0.7c1.5-0.7,3.1-1.4,4.7-1.9c4.8-1.5,9.1-3.4,12.8-6.3 c0.8-0.2,1.2-0.5,1.6-1c0.2-0.3,0.4-0.6,0.5-0.9c0.5-0.1,0.7-0.2,0.9-0.5c0.2-0.2,0.2-0.5,0.3-0.9c0-0.1,0-0.1,0.1-0.1 c0.5,0,0.6-0.3,0.8-0.5C162.3,24,163,22,162.5,19.9z M4.4,28.7c-0.2-0.4-0.3-0.9-0.1-1.2c1.8-2.9,3.4-6,6.8-8 c2.8-1.7,5.9-2.9,8.9-4.2c4.3-1.8,9-2.5,13.6-3.4c0,0.1,0,0.2,0,0.2l0,0c-1.1,0.4-2.2,0.7-3.2,1.1c-3.3,1.1-6.5,2.1-9.7,3.4 c-4.2,1.6-7.6,4.2-10.1,7.5c-0.5,0.7-1,1.3-1.6,2c-2.2,2.7-1,4.7,1.2,6.9c0.1,0.1,0.3,0.3,0.4,0.5C7.8,32.5,5.5,31.2,4.4,28.7z  M158.2,23.8c-1.7,2.8-4.1,5.1-7,6.8c-2,1.2-4.5,2.1-6.9,2.9c-3.3,1-6.4,2.4-9.5,3.7c-3.9,1.6-8.1,2.5-12.4,2.9 c-6,0.5-11.8,1.5-17.6,2.5c-4.8,0.8-9.8,1-14.7,1.5c-5.6,0.6-11.2,0.2-16.8,0.1c-3.1-0.1-6.3,0.3-9.4,0.5c-2.6,0.2-5.2,0.1-7.8-0.1 c-3.9-0.3-7.8-0.5-11.7-0.9c-2.8-0.3-5.5-0.7-8.2-1.4c-3.2-0.8-6.3-1.7-9.5-2.5c-0.5-0.1-1-0.3-1.4-0.5c-0.2-0.1-0.4-0.1-0.6-0.2 c0,0,0.1,0,0.1,0c0.3-0.1,0.5,0,0.7,0.1c0,0,0,0,0,0c3.4,0.5,6.9,1.2,10.3,1.4c0.5,0,1,0,1.5,0c0.5,0,1.3,0.2,1.3-0.3 c0-0.6-0.7-0.9-1.4-0.9c-2.1,0-4.2-0.2-6.3-0.5c-4.6-0.7-9.1-1.5-13.4-3c-2.9-1.1-5.4-2.7-6.9-5.2c-0.5-0.8-0.5-1.6-0.1-2.4 c3.2-6.2,9-9.8,16.3-12.2c6.7-2.2,13.2-4.5,20.2-6c5-1.1,10-1.8,15-2.9c8.5-1.9,17.2-2.4,26-2.7c3.6-0.1,7.1-0.8,10.8-0.6 c8.4,0.7,16.7,1.2,25,2.3c4.5,0.6,9,1.2,13.6,1.7c3.6,0.4,7.1,1.4,10.5,2.8c3.1,1.3,6,2.9,8.5,5C159.1,17.7,159.8,21.1,158.2,23.8z"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="mb-0">Temukan kursus yang terbaik untuk profesi Anda</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-xl-4">
            <div className="card shadow-hover overflow-hidden bg-transparent">
              <div className="position-relative">
                <img
                  className="card-img-top"
                  src="assets/images/courses/4by3/16.jpg"
                  alt="Card image"
                />
                <div className="bg-overlay bg-dark opacity-4" />
                <div className="card-img-overlay d-flex align-items-start flex-column">
                  <div className="w-100 mt-auto d-inline-flex">
                    <div className="d-flex align-items-center bg-white p-2 rounded-2">
                      <div className="avatar avatar-sm me-2">
                        <img
                          className="avatar-img rounded-1"
                          src="assets/images/avatar/10.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">
                          <a href="#" className="text-dark">
                            Larry Lawson
                          </a>
                        </h6>
                        <span className="small">Tutor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <div className="hstack gap-2">
                    <a
                      href="#"
                      className="badge bg-orange bg-opacity-10 text-orange"
                    >
                      All level
                    </a>
                    <a href="#" className="badge text-bg-dark">
                      6 Sks
                    </a>
                  </div>
                </div>
                <h5 className="card-title">
                  <a href="#">
                    The Complete Digital Marketing Course - 12 Courses in 1
                  </a>
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item h6 fw-light mb-0">4.5</li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 text-reset">(6,500)</li>
                </ul>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="text-success mb-0">Gratis</h4>
                  <span className="h6 fw-light mb-0 me-3">
                    <i className="far fa-user text-danger me-2" />
                    200 Mahasiswa
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card shadow-hover overflow-hidden bg-transparent">
              <div className="position-relative">
                <img
                  className="card-img-top"
                  src="assets/images/courses/4by3/14.jpg"
                  alt="Card image"
                />
                <div className="bg-overlay bg-dark opacity-4" />
                <div className="card-img-overlay d-flex align-items-start flex-column">
                  <div className="w-100 mt-auto d-inline-flex">
                    <div className="d-flex align-items-center bg-white p-2 rounded-2">
                      <div className="avatar avatar-sm me-2">
                        <img
                          className="avatar-img rounded-1"
                          src="assets/images/avatar/08.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">
                          <a href="#" className="text-dark">
                            Billy Vasquez
                          </a>
                        </h6>
                        <span className="small">Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <div className="hstack gap-2">
                    <a href="#" className="badge bg-info bg-opacity-10 text-info">
                      Beginner
                    </a>
                    <a href="#" className="badge text-bg-dark">
                      8 Sks
                    </a>
                  </div>
                </div>
                <h5 className="card-title">
                  <a href="#">Angular – The Complete Guide (2021 Edition)</a>
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item h6 fw-light mb-0">4.5</li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 text-reset">(5,436)</li>
                </ul>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="text-success mb-0">Gratis</h4>
                  <span className="h6 fw-light mb-0 me-3">
                    <i className="far fa-user text-danger me-2" />
                    100 Mahasiswa
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card shadow-hover overflow-hidden bg-transparent">
              <div className="position-relative">
                <img
                  className="card-img-top"
                  src="assets/images/courses/4by3/21.jpg"
                  alt="Card image"
                />
                <div className="bg-overlay bg-dark opacity-4" />
                <div className="card-img-overlay d-flex align-items-start flex-column">
                  <div className="w-100 mt-auto d-inline-flex">
                    <div className="d-flex align-items-center bg-white p-2 rounded-2">
                      <div className="avatar avatar-sm me-2">
                        <img
                          className="avatar-img rounded-1"
                          src="assets/images/avatar/05.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">
                          <a href="#" className="text-dark">
                            Lori Stevens
                          </a>
                        </h6>
                        <span className="small">psychiatrist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <div className="hstack gap-2">
                    <a href="#" className="badge bg-info bg-opacity-10 text-info">
                      Beginner
                    </a>
                    <a href="#" className="badge text-bg-dark">
                      12 Sks
                    </a>
                  </div>
                </div>
                <h5 className="card-title">
                  <a href="#">Time Management Mastery: Do More, Stress Less</a>
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item h6 fw-light mb-0">3.5</li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="far fa-star text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 text-reset">(1,254)</li>
                </ul>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="text-success mb-0">Gratis</h4>
                  <span className="h6 fw-light mb-0 me-3">
                    <i className="far fa-user text-danger me-2" />
                    90 Mahasiswa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light py-5">
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <figure className="position-absolute top-50 start-50 translate-middle ms-2">
              <svg>
                <path
                  className="fill-white opacity-2"
                  d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
                />
                <path
                  className="fill-white opacity-2"
                  d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
                />
                <path
                  className="fill-white opacity-2"
                  d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
                />
                <path
                  className="fill-white opacity-2"
                  d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
                />
              </svg>
            </figure>
            <div className="bg-dark p-4 p-sm-5 rounded-3">
              <div className="row justify-content-center position-relative">
                <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                  <svg width="141px" height="141px">
                    <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                  </svg>
                </figure>
                <div className="col-11 position-relative">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <h3 className="text-white mb-0">
                        Tunggu apa lagi?
                      </h3>
                      <p className="text-white small">
                        Tingkatkan pengetahuan Anda, kembangkan keterampilan dengan kursus dan sertifikasi paling andal
                      </p>
                      <ul className="list-inline mb-0 justify-content-center justify-content-lg-start">
                        <li className="list-inline-item text-white me-2">
                          <i className="bi bi-check-circle-fill text-success me-2" />
                          Registrasi Gratis
                        </li>
                        <li className="list-inline-item text-white me-2">
                          <i className="bi bi-check-circle-fill text-success me-2" />
                          Banyak Pertemuan Bermanfaat
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
                      <a href=" " className="btn btn-warning mb-0">
                        Buat Akun
                      </a>
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
}

export default Main