import React from 'react'

const ListSemua = () => {
    return (
        <div className="tab-pane fade show active"
            id="course-pills-4"
            role="tabpanel"
            aria-labelledby="course-pills-tab-4">

            {/* Ongoing */}
            <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-3">
                        <h5 className="m-0 mb-1">
                            Tugas Matriks & Bahasa Jepang
                        </h5>
                        <p>
                            Matematika
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-clock-history fs-5 text-primary"></i>
                        <p className="m-0 text-primary small">Ongoing</p>
                        <p className="m-0 small">Deadline 24 Juni 2022, 09:00</p>
                    </div>
                </div>
            </div>

            {/* Terlambat */}
            <div className="card border-start border-danger border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-3">
                        <h5 className="m-0 mb-1">
                            Tugas Biologi ternak lele
                        </h5>
                        <p>
                            Biologi
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-clock-history fs-5 text-danger"></i>
                        <p className="m-0 text-danger small">Terlambat</p>
                        <p className="m-0 small">Deadline 24 Juni 2022, 09:00</p>
                    </div>
                </div>
            </div>

            {/* Selesai */}
            <div className="card border-start border-success border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-3">
                        <h5 className="m-0 mb-1">
                            Tugas Bahasa Indonesia
                        </h5>
                        <p>
                            Indonesia
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="bi bi-clock-history fs-5 text-success"></i>
                        <p className="m-0 text-success small">Terlambat</p>
                        <p className="m-0 small">Deadline 24 Juni 2022, 09:00</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListSemua