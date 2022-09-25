import React from 'react'
import { NavLink } from 'react-router-dom'

const QuestionItem = ({ forum }) => {
    return (
        <NavLink to="/isi-forum-diskusi" className="text-black">
            <div className="card shadow p-4 ">
                {/* Name and time */}
                <div className="d-sm-flex justify-content-sm-between mb-3">
                    <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-sm flex-shrink-0">
                            <img
                                className="avatar-img rounded-circle"
                                src={forum.image}
                                alt="avatar"
                            />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                            <h6 className="mb-0">
                                <a href=" ">{forum.name}</a>
                            </h6>
                            <small>
                                {forum.matkul} - {forum.date}
                            </small>
                        </div>

                    </div>
                </div>
                {/* Question */}
                <h5>{forum.title}</h5>
                <p className="mb-2">
                    {forum.body}
                </p>
            </div>
        </NavLink>
    )
}

export default QuestionItem