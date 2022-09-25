import React from 'react'
import Search from './Search'
import CardList from './CardList'
import Pagination from './Pagination'

const MainContent = () => {
    return (
        <div className="col-xl-9">
            <div className="card bg-transparent border rounded-3">
                {/* Card header START */}
                <div className="card-header bg-transparent border-bottom">
                    <h3 className="mb-0">Daftar Mata Kuliah</h3>
                </div>
                {/* Card header END */}

                {/* Card body START */}
                <div className="card-body p-3 p-md-4">
                    <Search />
                    <CardList />
                    <Pagination />
                </div>
                {/* Card body EMD */}
            </div>
        </div>

    )
}

export default MainContent