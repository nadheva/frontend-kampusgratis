import React from 'react'
import { Link } from 'react-router-dom'

const ItemSemua = ({ assignment }) => {
    return (
        <Link to={`/studi-ku/${assignment.subject_id}/pertemuan/${assignment.session_id}/penugasan`} className="text-body">
            <div className={`card border-start border-4 shadow-lg rounded-2 px-4 py-2 my-4 
            ${assignment.status === "LATE" ? "border-danger" :
                    assignment.status === "GRADING" ? "border-success" :
                        assignment.status === "ONGOING" ? "border-primary" : ""} `}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-3">
                        <h5 className="m-0 mb-1">
                            {`Tugas Pertemuan ${assignment?.Session?.session_no}`}
                        </h5>
                        <p>
                            {assignment?.Subject?.name}
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-clock-history fs-5 "></i>
                        <p className={`m-0 small ${assignment.status === "LATE" ? "text-danger" :
                            assignment.status === "GRADING" ? "text-success" :
                                assignment.status === "ONGOING" ? "text-primary" : ""} `}>
                            {assignment?.status}
                        </p>
                        <p className="m-0 small">{assignment?.deadline}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemSemua