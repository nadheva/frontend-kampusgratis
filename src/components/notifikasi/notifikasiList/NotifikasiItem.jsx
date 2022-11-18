import React from 'react'

const NotifikasiItem = ({ notif }) => {
    return (
        <tr style={notif.is_read ? {} : { backgroundColor: '#D3F2FA' }}>
            <td className="d-flex align-items-center row-hover">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                    <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1 d-inline">
                            {notif?.title}
                        </h6>
                        <p className="small text-body m-0">
                            {notif?.notification}
                        </p>
                        <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                {new Date(notif?.created_at).toLocaleString('id-ID')}
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default NotifikasiItem