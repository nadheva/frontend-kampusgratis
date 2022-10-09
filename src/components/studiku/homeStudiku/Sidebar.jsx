import React from 'react'

const Sidebar = () => {
    return (
        <div className="col-lg-4 col-xl-3 col-12">
            <div
                className="offcanvas-lg offcanvas-end"
                tabIndex="-1"
                id="offcanvasSidebar"
                aria-labelledby="offcanvasSidebarLabel"
            >
                <div className="offcanvas-body p-3 p-lg-0">
                    <form>
                        <div className="card card-body shadow p-4 mb-4">
                            <h4 className="mb-3">Skill level</h4>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mb-2">
                                    <input
                                        type="checkbox"
                                        className="btn-check"
                                        id="btn-check-12"
                                    />
                                    <label
                                        className="btn btn-light btn-primary-soft-check"
                                        htmlFor="btn-check-12"
                                    >
                                        All levels
                                    </label>
                                </li>
                                <li className="list-inline-item mb-2">
                                    <input
                                        type="checkbox"
                                        className="btn-check"
                                        id="btn-check-9"
                                    />
                                    <label
                                        className="btn btn-light btn-primary-soft-check"
                                        htmlFor="btn-check-9"
                                    >
                                        Basic
                                    </label>
                                </li>
                                <li className="list-inline-item mb-2">
                                    <input
                                        type="checkbox"
                                        className="btn-check"
                                        id="btn-check-10"
                                    />
                                    <label
                                        className="btn btn-light btn-primary-soft-check"
                                        htmlFor="btn-check-10"
                                    >
                                        Intermediate
                                    </label>
                                </li>
                                <li className="list-inline-item mb-2">
                                    <input
                                        type="checkbox"
                                        className="btn-check"
                                        id="btn-check-11"
                                    />
                                    <label
                                        className="btn btn-light btn-primary-soft-check"
                                        htmlFor="btn-check-11"
                                    >
                                        Advanced
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sidebar