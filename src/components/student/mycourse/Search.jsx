import React from 'react'

const Search = () => {
  return (
    <div className="row mb-4 align-items-center">
      <div className="col-xl-12">
        <form className="border rounded p-2">
          <div className="input-group input-borderless">
            <input className="form-control me-1" type="search" placeholder="Find your course" />
            <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search