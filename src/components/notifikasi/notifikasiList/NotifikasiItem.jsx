import React from 'react'
import { Link } from 'react-router-dom'

const NotifikasiItem = ({ data }) => {
    return (
        <tr >
            <td className="d-flex align-items-center row-hover">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <Link to="">
                            <h6 className="mb-1">
                                {data.title}
                            </h6>
                        </Link>
                        <p className="small text-body m-0">
                            What's new! Find out about new features
                        </p>
                        <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                {data.date}
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default NotifikasiItem