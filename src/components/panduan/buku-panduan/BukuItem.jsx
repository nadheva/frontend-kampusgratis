import React from 'react'
import { Link } from 'react-router-dom'

const BukuItem = ({ buku }) => {
    return (
        <Link to={`/buku-panduan/${buku?.id}`} className="text-body">
            <div className="card border-top border-info border-4 shadow-lg rounded-2 px-4 py-4 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">
                        {buku?.title}
                    </h5>
                    <div className="d-flex flex-column align-items-center m-0">
                        <i className="bi bi-book fs-5 text-info"></i>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BukuItem