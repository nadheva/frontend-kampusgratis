import React from 'react'

const FilterBar = () => {
    return (
        <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
            <div className="row g-3">
                <div className="col-xl-11">
                    <input
                        className="form-control me-1"
                        type="search"
                        placeholder="Cari Acara"
                    />
                </div>
                {/* <div className="col-xl-3">
                    <select
                        className="form-select form-select-sm js-choice"
                        aria-label=".form-select-sm example">
                        <option value="">All</option>
                        <option>Event Terbaru</option>
                        <option>Update Terbaru</option>
                        <option>Segera Berakhir</option>
                    </select>
                </div> */}
                <div className="col-xl-1">
                    <button
                        type="button"
                        className="btn btn-primary mb-0 rounded z-index-1 w-100">
                        <i className="fas fa-search" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FilterBar