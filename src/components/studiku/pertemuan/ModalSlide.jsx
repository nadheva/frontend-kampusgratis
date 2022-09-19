import React from 'react'

const ModalSlide = () => {
    return (
        <div className="modal fade" id="slideModal" tabIndex="-1" aria-labelledby="slideModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="slideModalLabel">Lecture Slides</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <h6 className="lead fw-bold">You can download or view this slide as:</h6>
                        <p>These are the lecture slides from this unit. It would be helpful to take a look at them prior to
                            taking the quiz. </p>

                        <div className="hstack gap-3 flex-wrap">
                            <a href=" " className="btn btn-lg btn-light">
                                <div className="fs-4"><i className="bi bi-file-earmark-pdf"></i></div>
                                <span className="fs-6 mb-0">Lecture 5 pdf</span>
                            </a>

                            <a href=" " className="btn btn-lg btn-light">
                                <div className="fs-4"><i className="bi bi-file-earmark-word"></i></div>
                                <span className="fs-6 mb-0">Lecture 5 docs</span>
                            </a>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-primary mb-0">Mark as complete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSlide