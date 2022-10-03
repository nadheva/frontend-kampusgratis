import React from 'react'

const RightContent = () => {
    return (

        <div className="col-lg-4 col-xl-3">
            <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">

                <div className="offcanvas-body p-3 p-lg-0">
                    <form>
                        <div className="card card-body shadow p-4 mb-4">
                            <h4 className="mb-3">Category</h4>
                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault9">All</label>
                                    </div>
                                    <span className="small">(1256)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault10">Development</label>
                                    </div>
                                    <span className="small">(365)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault11">Design</label>
                                    </div>
                                    <span className="small">(156)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault12">Accounting</label>
                                    </div>
                                    <span className="small">(65)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault17">Translation</label>
                                    </div>
                                    <span className="small">(245)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault13">Finance</label>
                                    </div>
                                    <span className="small">(184)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault14">Legal</label>
                                    </div>
                                    <span className="small">(65)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault15">Photography</label>
                                    </div>
                                    <span className="small">(99)</span>
                                </div>
                                <div className="collapse multi-collapse" id="multiCollapseExample1">
                                    <div className="card card-body p-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault16">Writing</label>
                                            </div>
                                            <span className="small">(178)</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault18">Marketing</label>
                                            </div>
                                            <span className="small">(104)</span>
                                        </div>
                                    </div>
                                </div>
                                <a className=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse"
                                    href=" multiCollapseExample1" role="button" aria-expanded="false"
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
                                    <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-12">All levels</label>
                                </li>
                                <li className="list-inline-item mb-2">
                                    <input type="checkbox" className="btn-check" id="btn-check-9" />
                                    <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-9">Beginner</label>
                                </li>
                                <li className="list-inline-item mb-2">
                                    <input type="checkbox" className="btn-check" id="btn-check-10" />
                                    <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-10">Intermediate</label>
                                </li>
                                <li className="list-inline-item mb-2">
                                    <input type="checkbox" className="btn-check" id="btn-check-11" />
                                    <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-11">Advanced</label>
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

    )
}

export default RightContent