import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({data}) => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card card-body shadow h-100">
                <div className="d-flex align-items-center">
                    <img
                        src="assets/images/element/18.svg"
                        className="h-60px mb-2"
                        alt="img"
                    />
                    <div className="ms-3">
                        <h5 className="mb-0">
                            <Link to="/analitik-detail" target="_blank" >{data.title}</Link>
                        </h5>
                        <p className="mb-0 small">{data.semester}</p>
                    </div>
                </div>
                <ul className="list-group list-group-borderless small mt-2">
                    <li className="list-group-item text-body pb-0">
                        <i className="bi bi-patch-check-fill text-success" />
                        SKS : {data.sks}
                    </li>
                    <li className="list-group-item text-body pb-0">
                        <i className="bi bi-patch-check-fill text-success" />
                        IP : {data.ip}
                    </li>
                    <li className="list-group-item text-body pb-0">
                        <i className="bi bi-patch-check-fill text-success" />
                        IPK : {data.ipk}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardItem