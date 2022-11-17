import React from 'react'

const Search = ({ setSearchTerm, doFilter, placeholder, search }) => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-10 mx-auto text-center position-relative">
                        <form className="bg-body shadow rounded p-2 mt-4" onSubmit={doFilter}>
                            <div className="input-group">
                                <input
                                    className="form-control border-0 me-1"
                                    type="search"
                                    placeholder={placeholder}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary mb-0 rounded">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search