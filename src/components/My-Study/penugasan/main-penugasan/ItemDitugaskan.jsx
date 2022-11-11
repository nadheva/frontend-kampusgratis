import React from 'react'

const ItemDitugaskan = ({ ongoing }) => {
    return (
        <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mt-3">
                    <h5 className="m-0 mb-1">
                        Tugas Matriks & Bahasa Jepang
                    </h5>
                    <p>
                        Matematika
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-clock-history fs-5 text-primary"></i>
                    <p className="m-0 text-primary small">{ongoing?.status}</p>
                    <p className="m-0 small">Deadline 24 Juni 2022, 09:00</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDitugaskan