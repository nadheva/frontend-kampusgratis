import React from 'react'
import { Link } from 'react-router-dom'

import CourseItem from '../../components/My-Study/CourseItem';

const Main = () => {
  return <>
    <main>
      <section className="bg-blue align-items-center d-flex" style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white">Studi Ku</h1>
              <div className="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li className="breadcrumb-item"><Link to="/kategori">Kategori</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Studi-Ku</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="row mb-4 align-items-center">
                <div className="col-xl-6">
                  <form className="border rounded p-2">
                    <div className="input-group input-borderless">
                      <input className="form-control me-1" type="search" placeholder="Find your course" />
                      <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
                    </div>
                  </form>
                </div>
                <div className="col-xl-3 mt-3 mt-xl-0">
                  <form className="border rounded p-2 input-borderless">
                    <select className="form-select form-select-sm js-choice border-0" aria-label=".form-select-sm">
                      <option value="">Most Viewed</option>
                      <option>Recently search</option>
                      <option>Most popular</option>
                      <option>Top rated</option>
                    </select>
                  </form>
                </div>
                <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
                  <button className="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                    <i className="fas fa-sliders-h me-1"></i> Show filter
                  </button>
                  <p className="mb-0 text-end">Showing 1-7 of 32 result</p>
                </div>
              </div>
              <div className="row g-4">
                {[{ id: 1, name: 'Ken' }, { id: 2, name: 'Aryo' }, { id: 3, name: 'Fikri' }].map((course) => (
                  <CourseItem key={course.id} course={course} />
                ))}
              </div>
              <div className="col-12">
                <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                  <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><a className="page-link" href="#" tabindex="-1"><i className="fas fa-angle-double-left"></i></a></li>
                    <li className="page-item mb-0 active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item mb-0" aria-current="page"><a className="page-link" href="#">2</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
                <div className="offcanvas-header bg-light">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-3 p-lg-0">
                  <form>
                    <div className="card card-body shadow p-4 mb-4">
                      <h4 className="mb-3">Category</h4>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                            <label className="form-check-label" for="flexCheckDefault9">All</label>
                          </div>
                          <span className="small">(1256)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                            <label className="form-check-label" for="flexCheckDefault10">Development</label>
                          </div>
                          <span className="small">(365)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                            <label className="form-check-label" for="flexCheckDefault11">Design</label>
                          </div>
                          <span className="small">(156)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                            <label className="form-check-label" for="flexCheckDefault12">Accounting</label>
                          </div>
                          <span className="small">(65)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                            <label className="form-check-label" for="flexCheckDefault17">Translation</label>
                          </div>
                          <span className="small">(245)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
                            <label className="form-check-label" for="flexCheckDefault13">Finance</label>
                          </div>
                          <span className="small">(184)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                            <label className="form-check-label" for="flexCheckDefault14">Legal</label>
                          </div>
                          <span className="small">(65)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                            <label className="form-check-label" for="flexCheckDefault15">Photography</label>
                          </div>
                          <span className="small">(99)</span>
                        </div>
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                          <div className="card card-body p-0">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                <label className="form-check-label" for="flexCheckDefault16">Writing</label>
                              </div>
                              <span className="small">(178)</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                <label className="form-check-label" for="flexCheckDefault18">Marketing</label>
                              </div>
                              <span className="small">(104)</span>
                            </div>
                          </div>
                        </div>
                        <a className=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse"
                          href="#multiCollapseExample1" role="button" aria-expanded="false"
                          aria-controls="multiCollapseExample1">
                          See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i
                            className="fas fa-angle-down ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="card card-body shadow p-4 mb-4">
                      <h4 className="mb-3">Skill level</h4>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mb-2">
                          <input type="checkbox" className="btn-check" id="btn-check-12" />
                          <label className="btn btn-light btn-primary-soft-check" for="btn-check-12">All levels</label>
                        </li>
                        <li className="list-inline-item mb-2">
                          <input type="checkbox" className="btn-check" id="btn-check-9" />
                          <label className="btn btn-light btn-primary-soft-check" for="btn-check-9">Beginner</label>
                        </li>
                        <li className="list-inline-item mb-2">
                          <input type="checkbox" className="btn-check" id="btn-check-10" />
                          <label className="btn btn-light btn-primary-soft-check" for="btn-check-10">Intermediate</label>
                        </li>
                        <li className="list-inline-item mb-2">
                          <input type="checkbox" className="btn-check" id="btn-check-11" />
                          <label className="btn btn-light btn-primary-soft-check" for="btn-check-11">Advanced</label>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
                <div className="d-grid p-2 p-lg-0 text-center">
                  <button className="btn btn-primary mb-0">Filter Results</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="pt-0 pt-md-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 p-sm-5 rounded-3 position-relative overflow-hidden">
                <figure className="position-absolute top-0 start-0 d-none d-lg-block ms-n7">
                  <svg width="294.5px" height="261.6px" viewBox="0 0 294.5 261.6" >
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
                <figure className="position-absolute top-0 end-0 mt-5 me-n5 d-none d-sm-block">
                  <svg width="285px" height="272px">
                    <path className="fill-info opacity-4" d="M142.500,-0.000 C221.200,-0.000 285.000,60.889 285.000,136.000 C285.000,211.111 221.200,272.000 142.500,272.000 C63.799,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 63.799,-0.000 142.500,-0.000 Z"></path>
                  </svg>
                </figure>
                <div className="col-11 mx-auto position-relative">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3>Find out why families love eduport! Schedule your Personal Tour today.</h3>
                      <p className="mb-3 mb-lg-0">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                      <a href="#" className="btn btn-warning mb-0">Schedule Tour</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  </>
}

export default Main