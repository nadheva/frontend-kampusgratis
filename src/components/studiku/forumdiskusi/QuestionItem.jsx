import React from 'react'
import { NavLink } from 'react-router-dom'

const QuestionItem = ({ forum }) => {
    return (
        <NavLink to="/isi-forum-diskusi" className="text-black">
            <div className="card">
                <div className="d-sm-flex justify-content-sm-between mb-3">
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm flex-shrink-0">
                            <img
                                className="avatar-img rounded-circle"
                                src={forum.image}
                                alt="avatar"
                            />
                        </div>
                        <div className="ms-2">
                            <h6 className="mb-0">
                                <a href=" ">{forum.name}</a>
                            </h6>
                            <small>
                                {forum.date}
                            </small>
                        </div>
                    </div>
                </div>
                <h5>{forum.title}</h5>
                <p className="mb-2">
                    {forum.body}
                </p>
                <ul className="nav nav-divider pb-3 small">
                    <li className="nav-item">
                        <a className="text-primary-hover" href="">
                            <i className="bi bi-clock-history me-2" />1 Tahun yang lalu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="text-primary-hover" href="">
                            <i className="bi bi-book me-2" />{forum.matkul}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="text-primary-hover" href="">
                            <i className="bi bi-chat-left me-2" />
                            10 Jawaban
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
        </NavLink>
    )
}

export default QuestionItem