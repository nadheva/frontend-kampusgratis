import React from 'react'

const NotifikasiItem = ({ data }) => {
    return (
        <tr>
            <td className="d-flex align-items-center">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1">
                            {data.title}
                        </h6>
                        <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                               {data.date}
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
            <td className="text-center col-2">
                <a href=" " className="btn btn-sm btn-info-soft mb-0">
                    View
                </a>
            </td>
        </tr>
    )
}

export default NotifikasiItem