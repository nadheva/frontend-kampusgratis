import React from 'react'

const SubmissionUpload = () => {
    return (
        <div className="col-12 mt-4">
            <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                <img
                    src="/assets/images/element/gallery.svg"
                    className="h-50px"
                    alt="uploadfile"
                />
                <div>
                    <h6 className="my-2">
                        Upload tugas disini <a href="#!" className="text-primary">
                            Browse
                        </a>
                    </h6>
                    <label style={{ cursor: "pointer" }}>
                        <span>
                            <input
                                className="form-control stretched-link"
                                type="file"
                                name="my-image"
                                id="image"
                            />
                        </span>
                    </label>
                    <p className="small mb-0 mt-2">
                        <b>Note:</b> Pastikan berkas sudah sesuai dengan
                        ketentuan tugas submission
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SubmissionUpload