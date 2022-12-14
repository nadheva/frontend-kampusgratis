import React from 'react'
import { Link } from 'react-router-dom'

const ItemTerlambat = ({ late }) => {
    return (
        <Link to={`/studi-ku/${late.subject_id}/pertemuan/${late.session_id}/penugasan`} className="text-body">
            <div className="card border-start border-danger border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-3">
                        <h5 className="m-0 mb-1">
                            {`Tugas Pertemuan ${late?.Session?.session_no}`}
                        </h5>
                        <p>
                            {late?.Subject?.name}
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-clock-history fs-5 text-danger"></i>
                        <p className="m-0 text-danger small">{late?.status}</p>
                        <p className="m-0 small"> {late?.deadline}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemTerlambat