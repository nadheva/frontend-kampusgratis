import React from 'react'

const Intro = ({ handleRead }) => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shadow p-4 rounded-3  d-flex justify-content-between align-items-center" >
                            <h3 className="m-0">Notifikasi</h3>
                            <button type="submit" onClick={handleRead} className="fw-bold btn btn-link">
                                Baca Semua
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro