import React from 'react'
import { Link } from 'react-router-dom'

const CourseItem = ({ subject, progress }) => {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="w-100px">
                        <img
                            src={subject.Subject.thumbnail_link}
                            className="rounded"
                            alt="img"
                        />
                    </div>
                    <div className="mb-0 ms-2 flex-fill">
                        <h6>
                            <Link to={`/studi-ku/pertemuan/${subject.subject_id}`}>{subject.Subject.name}</Link>
                        </h6>
                        <div className="overflow-hidden">
                            <h6 className="mb-0 text-end">{progress}%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                                <div
                                    className="progress-bar bg-primary aos"
                                    role="progressbar"
                                    data-aos="slide-right"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    style={{ width: `${progress}%` }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="40"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <Link to={`/studi-ku/pertemuan/${subject.subject_id}`} className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0">
                    <i className="bi bi-play-circle me-1" />
                    Continue
                </Link>
            </td>
        </tr>
    )
}

export default CourseItem