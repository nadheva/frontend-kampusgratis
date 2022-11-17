import React from 'react'

const SearchBar = ({ setSearchTerm, doFilter,  }) => {
    return (
        <div className="row mb-4 align-items-center">
            <div className="col-lg-12 ">
                <form className="rounded p-2 shadow" onSubmit={doFilter}>
                    <div className="input-group input-borderless">
                        <input className="form-control me-1" type="search" placeholder="Cari Mata Kuliah" onChange={e => setSearchTerm(e.target.value)} />
                        <button type="submit" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar