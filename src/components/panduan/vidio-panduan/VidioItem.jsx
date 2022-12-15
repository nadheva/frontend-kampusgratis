import React from 'react'
import { Link } from 'react-router-dom'

const VidioItem = ({ vidio }) => {
    return (
        <Link to={`/panduan/vidio-panduan/${vidio?.id}`} className="text-body" >
            <div className="card border-top border-info border-4 shadow-lg rounded-2 px-4 py-4 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">
                        {vidio?.title}
                    </h5>
                    <div className="d-flex flex-column align-items-center m-0">
                        <i className="bi bi-play fs-5 text-info"></i>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VidioItem