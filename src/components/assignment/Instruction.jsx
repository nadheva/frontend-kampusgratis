import React from 'react'

const Instruction = ({ assignment, isLoading }) => {
    return (
        <div className="col-12">
            <h4>{assignment.content}</h4>
            <hr />
            <p>
                {assignment.description}
            </p>
            <div className="hstack gap-3 flex-wrap">
                <a href={assignment.file_assignment_link} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-light">
                    <div className="fs-4">
                        <i className="bi bi-file-earmark-pdf" />
                    </div>
                    {/* <span className="fs-6 mb-0">Tugas 5 pdf</span> */}
                </a>
            </div>
        </div>
    )
}

export default Instruction