import React from 'react';
import Intro from '../../components/studiku/forumdiskusi/Intro';
import MainContent from '../../components/studiku/forumdiskusi/MainContent';

const ForumDiskusi = () => {
    return (
        <main>
            <Intro />
            <MainContent />

            {/* Modal Create Post  START */}
            <div
                className="modal fade"
                id="modalCreatePost"
                tabIndex={-1}
                aria-labelledby="modalLabelCreatePost"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreatePost">
                                Create Post{" "}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {/* Form START */}
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Add title here"
                                    />
                                </div>
                                {/* Description */}
                                <div className="mb-3">
                                    <label className="form-label">Description </label>
                                    <textarea
                                        className="form-control"
                                        rows={4}
                                        placeholder="Description here"
                                        defaultValue={""}
                                    />
                                </div>
                                {/* Category */}

                            </form>
                            {/* Form END */}
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success-soft">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Create Post  END */}

        </main >
    )
}

export default ForumDiskusi