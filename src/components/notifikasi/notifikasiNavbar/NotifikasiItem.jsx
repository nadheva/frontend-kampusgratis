import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const NotifikasiItem = ({ notif }) => {
    return (
        <li>
            <Link to="" className="list-group-item-action border-0 border-bottom d-flex p-3" >
                <div>
                    <h6 className="mb-1">{notif?.title}</h6>
                    <p className="small text-body m-0">
                        {/* {notif?.notification} */}
                    </p>
                    <small className="text-body">{moment(notif?.created_at).format('LL')} </small>
                </div>
            </Link>
        </li>
    )
}

export default NotifikasiItem