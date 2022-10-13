import React from 'react'

const SearchBar = () => {
    return (
        <div className="row mb-4 align-items-center">
            <div className="col-xl-12">
                <form className="border rounded p-2">
                    <div className="input-group input-borderless">
                        <input
                            className="form-control me-1"
                            type="search"
                            placeholder="Cari matakuliah"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar