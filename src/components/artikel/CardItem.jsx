import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({ data }) => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card bg-transparent">
                <div className="overflow-hidden rounded-3">
                    <img
                        src={data.image}
                        className="card-img"
                        alt="course"
                    />
                    {/* Overlay */}
                    <div className="bg-overlay bg-dark opacity-4" />

                </div>
                {/* Card body */}
                <div className="card-body">
                    {/* Title */}
                    <h5 className="card-title">
                        <Link to=" ">{data.title}</Link>
                    </h5>
                    <p className="text-truncate-2">
                        {data.body}
                    </p>
                    {/* Info */}
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                            <a href=" ">{data.author}</a>
                        </h6>
                        <span className="small">{data.date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem