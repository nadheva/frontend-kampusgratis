import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'

const CardItem = ({ artikel }) => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card bg-transparent">
                <div className="overflow-hidden rounded-3">
                    <img
                        src={artikel?.image_link}
                        className="card-img card-img-artikel"
                        alt="course"
                    />
                    <div className="bg-overlay bg-dark opacity-4" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/artikel/${artikel?.id}`} >{artikel?.title}</Link>
                    </h5>
                    <p className="text-truncate-2">
                        {artikel?.description}
                    </p>
                    <div className="d-flex justify-content-between">
                        <span className="small">{moment(artikel?.created_at).fromNow()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem