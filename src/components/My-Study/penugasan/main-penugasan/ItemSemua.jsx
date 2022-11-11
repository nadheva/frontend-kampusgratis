import React from 'react'

const ItemSemua = ({ assignment }) => {

    return (
        <div
            className="card border-start border-success border-4 shadow-lg rounded-2 px-4 py-2 my-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mt-3">
                    <h5 className="m-0 mb-1">
                        {assignment?.Subject?.name}
                    </h5>
                    <p>
                        {assignment?.Subject?.name}
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <i className="bi bi-clock-history fs-5 text-success"></i>
                    <p className="m-0 text-success small">{assignment?.status}</p>
                    <p className="m-0 small">{assignment?.deadline}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemSemua