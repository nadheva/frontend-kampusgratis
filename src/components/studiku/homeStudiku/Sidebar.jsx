import React from 'react'

const Sidebar = () => {
    return (
        <div className="col-lg-4 col-xl-3 ">
            <div
                className="offcanvas-lg offcanvas-end"
                tabIndex="-1"
                id="offcanvasSidebar"
                aria-labelledby="offcanvasSidebarLabel"
            >
                <div className="offcanvas-body p-3 p-lg-0">
                    <div className="card card-body shadow p-4 mb-4">
                        <h4 className="mb-3">Skill level</h4>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mb-2">
                                <button className="btn btn-light btn-primary-soft-check">
                                    All levels
                                </button>
                            </li>
                            <li className="list-inline-item mb-2">
                                <button className="btn btn-light btn-primary-soft-check">
                                    Basic
                                </button>
                            </li>
                            <li className="list-inline-item mb-2">
                                <button className="btn btn-light btn-primary-soft-check">
                                    Intermediate
                                </button>
                            </li>
                            <li className="list-inline-item mb-2">
                                <button className="btn btn-light btn-primary-soft-check">
                                    Advanced
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar