import React from 'react'
import { Link } from 'react-router-dom'

const ItemSelesai = ({ finished }) => {
    return (
        <Link to={`/studi-ku/${finished.subject_id}/pertemuan/${finished.session_id}/penugasan`} className="text-body">
            <div className="card border-start border-success border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-3">
                        <h5 className="m-0 mb-1">
                            {`Tugas Pertemuan ${finished?.Session?.session_no}`}
                        </h5>
                        <p>
                            {finished?.Subject?.name}
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-clock-history fs-5 text-success"></i>
                        <p className="m-0 text-success small">{finished?.status}</p>
                        <p className="m-0 small"> {finished?.deadline}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemSelesai