import React from 'react'

const CardItem = () => {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="card shadow h-100">
                {/* Image */}
                <img
                    src="assets/images/courses/4by3/02.jpg"
                    className="card-img-top"
                    alt="course"
                />
                <div className="card-body pb-0">
                    {/* Badge and favorite */}
                    <div className="d-flex justify-content-between mb-2">
                        <a
                            href=" "
                            className="badge bg-success bg-opacity-10 text-success"
                        >
                            Beginner
                        </a>
                        <a href=" " className="text-danger">
                            <i className="fas fa-heart" />
                        </a>
                    </div>
                    {/* Title */}
                    <h5 className="card-title fw-normal">
                        <a href=" ">Graphic Design Masterclass</a>
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
    )
}

export default CardItem