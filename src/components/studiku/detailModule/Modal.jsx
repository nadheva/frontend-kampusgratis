import React from 'react'

const Modal = () => {
    return (
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
                            Catatan
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">
                                    Apa pelajaran yang kamu dapat dari pertemuan ini?
                                </label>
                                <textarea
                                    className="form-control"
                                    rows={4}
                                    placeholder="Description here"
                                    defaultValue={""}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success-soft">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal