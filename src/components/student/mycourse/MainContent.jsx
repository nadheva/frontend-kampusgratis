import React from 'react'

const MainContent = () => {
    return (
        <div className="col-xl-9">
            <div className="card bg-transparent border rounded-3">
                {/* Card header START */}
                <div className="card-header bg-transparent border-bottom">
                    <h3 className="mb-0">My Course</h3>
                </div>

                {/* Card header END */}
                {/* Card body START */}
                <div className="card-body p-3 p-md-4">
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
                            <button className="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target=" offcanvasSidebar" aria-controls="offcanvasSidebar">
                                <i className="fas fa-sliders-h me-1"></i> Show filter
                            </button>
                            <p className="mb-0 text-end">Showing 1-7 of 32 result</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Card item START */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="card shadow h-100">
                                {/* Image */}
                                <img
                                    src="assets/images/courses/4by3/02.jpg"
                                    className="card-img-top"
                                    alt="course image"
                                />
                                <div className="card-body pb-0">
                                    {/* Badge and favorite */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <a
                                            href="#"
                                            className="badge bg-success bg-opacity-10 text-success"
                                        >
                                            Beginner
                                        </a>
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </div>
                                    {/* Title */}
                                    <h5 className="card-title fw-normal">
                                        <a href="#">Graphic Design Masterclass</a>
                                    </h5>
                                    <p className="mb-2 text-truncate-2">
                                        Rooms oh fully taken by worse do Points afraid but may end Rooms
                                        Points afraid but may end Rooms
                                    </p>
                                    {/* Rating star */}
                                    <ul className="list-inline mb-0">
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
                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                            4.5/5.0
                                        </li>
                                    </ul>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer pt-0 pb-3">
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0">
                                            <i className="far fa-clock text-danger me-2" />
                                            9h 56m
                                        </span>
                                        <span className="h6 fw-light mb-0">
                                            <i className="fas fa-table text-orange me-2" />
                                            65 lectures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                        {/* Card item START */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="card shadow h-100">
                                {/* Image */}
                                <img
                                    src="assets/images/courses/4by3/07.jpg"
                                    className="card-img-top"
                                    alt="course image"
                                />
                                <div className="card-body pb-0">
                                    {/* Badge and favorite */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <a
                                            href="#"
                                            className="badge bg-success bg-opacity-10 text-success"
                                        >
                                            Beginner
                                        </a>
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </div>
                                    {/* Title */}
                                    <h5 className="card-title fw-normal">
                                        <a href="#">Deep Learning with React-Native </a>
                                    </h5>
                                    <p className="mb-2 text-truncate-2">
                                        Far advanced settling say finished raillery. Offered chiefly
                                        farther.
                                    </p>
                                    {/* Rating star */}
                                    <ul className="list-inline mb-0">
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
                                            <i className="far fa-star text-warning" />
                                        </li>
                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                            4.0/5.0
                                        </li>
                                    </ul>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer pt-0 pb-3">
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0">
                                            <i className="far fa-clock text-danger me-2" />
                                            18h 56m
                                        </span>
                                        <span className="h6 fw-light mb-0">
                                            <i className="fas fa-table text-orange me-2" />
                                            99 lectures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                        {/* Card item START */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="card shadow h-100">
                                {/* Image */}
                                <img
                                    src="assets/images/courses/4by3/11.jpg"
                                    className="card-img-top"
                                    alt="course image"
                                />
                                <div className="card-body pb-0">
                                    {/* Badge and favorite */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <a
                                            href="#"
                                            className="badge bg-purple bg-opacity-10 text-purple"
                                        >
                                            All level
                                        </a>
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </div>
                                    {/* Title */}
                                    <h5 className="card-title fw-normal">
                                        <a href="#">Build Responsive Websites with HTML</a>
                                    </h5>
                                    <p className="mb-2 text-truncate-2">
                                        Far advanced settling say finished raillery. Offered chiefly
                                        farther.
                                    </p>
                                    {/* Rating star */}
                                    <ul className="list-inline mb-0">
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
                                            <i className="far fa-star text-warning" />
                                        </li>
                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                            4.0/5.0
                                        </li>
                                    </ul>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer pt-0 pb-3">
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0">
                                            <i className="far fa-clock text-danger me-2" />
                                            15h 30m
                                        </span>
                                        <span className="h6 fw-light mb-0">
                                            <i className="fas fa-table text-orange me-2" />
                                            68 lectures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                        {/* Card item START */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="card shadow h-100">
                                {/* Image */}
                                <img
                                    src="assets/images/courses/4by3/10.jpg"
                                    className="card-img-top"
                                    alt="course image"
                                />
                                <div className="card-body pb-0">
                                    {/* Badge and favorite */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <a href="#" className="badge bg-info bg-opacity-10 text-info">
                                            Intermediate
                                        </a>
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </div>
                                    {/* Title */}
                                    <h5 className="card-title fw-normal">
                                        <a href="#">Bootstrap 5 From Scratch</a>
                                    </h5>
                                    <p className="text-truncate-2 mb-2">
                                        Far advanced settling say finished raillery. Offered chiefly
                                        farther.
                                    </p>
                                    {/* Rating star */}
                                    <ul className="list-inline mb-0">
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
                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                            4.5/5.0
                                        </li>
                                    </ul>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer pt-0 pb-3">
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0">
                                            <i className="far fa-clock text-danger me-2" />
                                            25h 56m
                                        </span>
                                        <span className="h6 fw-light mb-0">
                                            <i className="fas fa-table text-orange me-2" />
                                            38 lectures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                        {/* Card item START */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="card shadow h-100">
                                {/* Image */}
                                <img
                                    src="assets/images/courses/4by3/04.jpg"
                                    className="card-img-top"
                                    alt="course image"
                                />
                                <div className="card-body pb-0">
                                    {/* Badge and favorite */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <a
                                            href="#"
                                            className="badge bg-purple bg-opacity-10 text-purple"
                                        >
                                            All level
                                        </a>
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </div>
                                    {/* Title */}
                                    <h5 className="card-title fw-normal">
                                        <a href="#">Learn Invision</a>
                                    </h5>
                                    <p className="mb-2">
                                        Arrived off she elderly beloved him Course regard to up he
                                        hardly.
                                    </p>
                                    {/* Rating star */}
                                    <ul className="list-inline mb-0">
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
                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                            3.5/5.0
                                        </li>
                                    </ul>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer pt-0 pb-3">
                                    <hr />
                                    <div className="d-flex justify-content-between mt-2">
                                        <span className="h6 fw-light mb-0">
                                            <i className="far fa-clock text-danger me-2" />
                                            6h 56m
                                        </span>
                                        <span className="h6 fw-light mb-0">
                                            <i className="fas fa-table text-orange me-2" />
                                            82 lectures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                        {/* Card item START */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="card shadow h-100">
                                {/* Image */}
                                <img
                                    src="assets/images/courses/4by3/01.jpg"
                                    className="card-img-top"
                                    alt="course image"
                                />
                                <div className="card-body pb-0">
                                    {/* Badge and favorite */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <a
                                            href="#"
                                            className="badge bg-success bg-opacity-10 text-success"
                                        >
                                            Beginner
                                        </a>
                                        <a href="#" className="text-danger">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </div>
                                    {/* Title */}
                                    <h5 className="card-title fw-normal">
                                        <a href="#">Digital Marketing Masterclass</a>
                                    </h5>
                                    <p className="text-truncate-2 mb-2">
                                        Delivered dejection necessary objection do Mr prevailed.
                                    </p>
                                    {/* Rating star */}
                                    <ul className="list-inline mb-0">
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
                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                            4.5/5.0
                                        </li>
                                    </ul>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer pt-0 pb-3">
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0">
                                            <i className="far fa-clock text-danger me-2" />
                                            6h 56m
                                        </span>
                                        <span className="h6 fw-light mb-0">
                                            <i className="fas fa-table text-orange me-2" />
                                            82 lectures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                    </div>
                    <div className="col-12">
                        <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                            <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                <li className="page-item mb-0"><a className="page-link" href=" " tabindex="-1"><i className="fas fa-angle-double-left"></i></a></li>
                                <li className="page-item mb-0 active"><a className="page-link" href=" ">1</a></li>
                                <li className="page-item mb-0" aria-current="page"><a className="page-link" href=" ">2</a></li>
                                <li className="page-item mb-0"><a className="page-link" href=" ">..</a></li>
                                <li className="page-item mb-0"><a className="page-link" href=" ">6</a></li>
                                <li className="page-item mb-0"><a className="page-link" href=" "><i className="fas fa-angle-double-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Card body EMD */}
            </div>
        </div>

    )
}

export default MainContent