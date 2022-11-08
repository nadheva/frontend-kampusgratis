import React from 'react'

const Search = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-10 mx-auto text-center position-relative">
                        <form className="bg-body shadow rounded p-2 mt-4">
                            <div className="input-group">
                                <input
                                    className="form-control border-0 me-1"
                                    type="search"
                                    placeholder="Search ..."
                                />
                                <button type="button" className="btn btn-primary mb-0 rounded">
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