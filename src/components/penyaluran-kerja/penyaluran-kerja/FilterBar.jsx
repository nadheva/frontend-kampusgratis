import React from 'react'

const FilterBar = () => {
    return (
        <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
            <div className="row g-3">
                <div className="col-xl-3">
                    <input
                        className="form-control me-1"
                        type="search"
                        placeholder="Search"
                    />
                </div>
                <div className="col-xl-8">
                    <div className="row g-3">
                        <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                            <select
                                className="form-select form-select-sm js-choice"
                                aria-label=".form-select-sm example"
                            >
                                <option>Terbaru</option>
                                <option>Terlama</option>
                            </select>
                        </div>
                        <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                            <select
                                className="form-select form-select-sm js-choice"
                                aria-label=".form-select-sm example"
                            >
                                <option value="">Waktu Kerja</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                            </select>
                        </div>
                        <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                            <select
                                className="form-select form-select-sm js-choice"
                                aria-label=".form-select-sm example"
                            >
                                <option value="">Lowongan</option>
                                <option>Pekerjaan</option>
                                <option>Magang</option>
                                <option>Project</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-xl-1">
                    <button
                        type="button"
                        className="btn btn-primary mb-0 rounded z-index-1 w-100"
                    >
                        <i className="fas fa-search" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FilterBar