import React from 'react'

const CoureList = () => {
    return (
        <div className="row mt-5">
            <div className="col-12">
                <div className="card bg-transparent border rounded-3">
                    <div className="card-header bg-transparent border-bottom">
                        <h3 className="mb-0">Daftar Mata Kuliah</h3>
                    </div>
                    <div className="card-body">
                        <div className="row g-3 align-items-center justify-content-between mb-4">
                            <div className="col-md-8">
                                <form className="rounded position-relative">
                                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <button
                                        className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                                        type="submit">
                                        <i className="fas fa-search fs-6 "></i>
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <form>
                                    <select className="form-select js-choice border-0 z-index-9 bg-transparent"
                                        aria-label=".form-select-sm">
                                        <option value="">Sort by</option>
                                        <option>Free</option>
                                        <option>Newest</option>
                                        <option>Most popular</option>
                                        <option>Most Viewed</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="table-responsive border-0">
                            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 rounded-start">Mata Kuliah</th>
                                        <th scope="col" className="border-0">Total Mata Kuliah</th>
                                        <th scope="col" className="border-0">Terselesaikan</th>
                                        <th scope="col" className="border-0 rounded-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="w-100px">
                                                    <img src="assets/images/courses/4by3/08.jpg" className="rounded" alt="" />
                                                </div>
                                                <div className="mb-0 ms-2">
                                                    <h6><a href=" ">Building Scalable APIs with GraphQL</a></h6>
                                                    <div className="overflow-hidden">
                                                        <h6 className="mb-0 text-end">85%</h6>
                                                        <div className="progress progress-sm bg-primary bg-opacity-10">
                                                            <div className="progress-bar bg-primary aos" role="progressbar"
                                                                data-aos="slide-right" data-aos-delay="200"
                                                                data-aos-duration="1000" data-aos-easing="ease-in-out"
                                                                style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>56</td>
                                        <td>40</td>
                                        <td>
                                            <a href=" " className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i
                                                className="bi bi-play-circle me-1"></i>Continue</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="w-100px">
                                                    <img src="assets/images/courses/4by3/03.jpg" className="rounded" alt="" />
                                                </div>
                                                <div className="mb-0 ms-2">
                                                    <h6><a href=" ">Create a Design System in Figma</a></h6>
                                                    <div className="overflow-hidden">
                                                        <h6 className="mb-0 text-end">100%</h6>
                                                        <div className="progress progress-sm bg-primary bg-opacity-10">
                                                            <div className="progress-bar bg-primary aos" role="progressbar"
                                                                data-aos="slide-right" data-aos-delay="200"
                                                                data-aos-duration="1000" data-aos-easing="ease-in-out"
                                                                style={{ width: '100%' }} aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>42</td>
                                        <td>42</td>
                                        <td>
                                            <button className="btn btn-sm btn-success me-1 mb-1 mb-x;-0 disabled"><i
                                                className="bi bi-check me-1"></i>Complete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="w-100px">
                                                    <img src="assets/images/courses/4by3/05.jpg" className="rounded" alt="" />
                                                </div>
                                                <div className="mb-0 ms-2">
                                                    <h6><a href=" ">The Complete Web Development in python</a></h6>
                                                    <div className="overflow-hidden">
                                                        <h6 className="mb-0 text-end">60%</h6>
                                                        <div className="progress progress-sm bg-primary bg-opacity-10">
                                                            <div className="progress-bar bg-primary aos" role="progressbar"
                                                                data-aos="slide-right" data-aos-delay="200"
                                                                data-aos-duration="1000" data-aos-easing="ease-in-out"
                                                                style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>28</td>
                                        <td>12</td>
                                        <td>
                                            <a href=" " className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i
                                                className="bi bi-play-circle me-1"></i>Continue</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="w-100px">
                                                    <img src="assets/images/courses/4by3/01.jpg" className="rounded" alt="" />
                                                </div>
                                                <div className="mb-0 ms-2">
                                                    <h6><a href=" ">Digital Marketing MasterclassName</a></h6>
                                                    <div className="overflow-hidden">
                                                        <h6 className="mb-0 text-end">40%</h6>
                                                        <div className="progress progress-sm bg-primary bg-opacity-10">
                                                            <div className="progress-bar bg-primary aos" role="progressbar"
                                                                data-aos="slide-right" data-aos-delay="200"
                                                                data-aos-duration="1000" data-aos-easing="ease-in-out"
                                                                style={{ width: '45%' }} aria-valuenow="40" aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>32</td>
                                        <td>18</td>
                                        <td>
                                            <a href=" " className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i
                                                className="bi bi-play-circle me-1"></i>Continue</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="w-100px">
                                                    <img src="assets/images/courses/4by3/02.jpg" className="rounded" alt="" />
                                                </div>
                                                <div className="mb-0 ms-2">
                                                    <h6><a href=" ">Graphic Design MasterclassName</a></h6>
                                                    <div className="overflow-hidden">
                                                        <h6 className="mb-0 text-end">90%</h6>
                                                        <div className="progress progress-sm bg-primary bg-opacity-10">
                                                            <div className="progress-bar bg-primary aos" role="progressbar"
                                                                data-aos="slide-right" data-aos-delay="200"
                                                                data-aos-duration="1000" data-aos-easing="ease-in-out"
                                                                style={{ width: '85%' }} aria-valuenow="90" aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>16</td>
                                        <td>14</td>
                                        <td>
                                            <a href=" " className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i
                                                className="bi bi-play-circle me-1"></i>Continue</a>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                            <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                                <ul
                                    className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                    <li className="page-item mb-0"><a className="page-link" href=" " tabIndex="-1"><i
                                        className="fas fa-angle-left"></i></a></li>
                                    <li className="page-item mb-0"><a className="page-link" href=" ">1</a></li>
                                    <li className="page-item mb-0 active"><a className="page-link" href=" ">2</a></li>
                                    <li className="page-item mb-0"><a className="page-link" href=" ">3</a></li>
                                    <li className="page-item mb-0"><a className="page-link" href=" "><i
                                        className="fas fa-angle-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoureList