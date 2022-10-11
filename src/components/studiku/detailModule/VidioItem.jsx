import React from 'react'
import { Link } from 'react-router-dom'

const VidioItem = ({ vidio, dModules }) => {
    return (
        <>
            <div className="d-sm-flex justify-content-sm-between align-items-center">
                <div className="d-flex">
                    <Link to={`/vidio-player/${vidio.id}/${dModules.module.id}`} className="btn btn-danger-soft btn-round mb-0">
                        <i className="fas fa-play" />
                    </Link>
                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                        <h6 className="mb-0">{vidio.title}</h6>
                        <p className="mb-2 mb-sm-0 small">{vidio.description.substring(0, 60)}</p>
                    </div>
                </div>
                <Link to={`/vidio-player/${vidio.id}/${dModules.module.id}`} className="btn btn-sm btn-success mb-0">
                    Play
                </Link>
            </div>
            <hr />
        </>
    )
}

export default VidioItem