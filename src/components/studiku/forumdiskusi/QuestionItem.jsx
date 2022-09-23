import React from 'react'
import { NavLink } from 'react-router-dom'

const QuestionItem = () => {
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
                                src="assets/images/avatar/03.jpg"
                                alt="avatar"
                            />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                            <h6 className="mb-0">
                                <a href=" ">Samuel Bishop</a>
                            </h6>
                            <small>posted 9 minutes ago</small>
                        </div>
                    </div>
                </div>
                {/* Question */}
                <h5>How can you categorize Digital marketing?</h5>
                <p className="mb-2">
                    As it so contrasted oh estimating instrument. Size like body someone
                    had. Are conduct viewing boy minutes warrant the expense? Tolerably
                    behavior may admit daughters offending her ask own. Praise effect wishes
                    change way and any wanted. Lively use looked latter regard had. Do he it
                    part more last in.
                </p>
            </div>
        </NavLink>
    )
}

export default QuestionItem