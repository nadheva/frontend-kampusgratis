import React from 'react'

const CardHeader = () => {
    return (
        <div className="card-header border-bottom p-0 pb-3">
            <h4 className="mb-3">Forum Diskusi</h4>
            <form className="row g-4">
                <div className="col-sm-6 col-lg-4">
                    <div className="position-relative">
                        <input className="form-control pe-5 bg-transparent"
                            type="search" placeholder="Search" aria-label="Search" />
                        <button
                            className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                            type="submit">
                            <i className="fas fa-search fs-6 "></i>
                        </button>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <select className="js-choice form-select">
                        <option value="">Select item</option>
                        <option>Week 1</option>
                        <option>Week 2</option>
                        <option>Week 3</option>
                        <option>Week 4</option>
                        <option>Week 5</option>
                        <option>Week 6</option>
                    </select>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <select className="js-choice form-select">
                        <option value="">Filter</option>
                        <option>All</option>
                        <option>Answered</option>
                        <option>Unanswered</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CardHeader