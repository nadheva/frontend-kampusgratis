import React from 'react'

const Search = ({ handleSearchFilter, searchValue }) => {
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
                                    value={searchValue}
                                    onChange={handleSearchFilter}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search