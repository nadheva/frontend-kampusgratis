import moment from 'moment/moment'
import React from 'react'

const Category = ({ event }) => {
    return (
        <section>
            <div className="container">
                <div className="row g-4">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="card card-body shadow rounded-3">
                            <div className="d-flex align-items-center">
                                <div className="icon-lg bg-purple bg-opacity-10 rounded-circle text-purple">
                                    <i className="fas fa-users" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">
                                        <a href=" " className="stretched-link">
                                            Kapasitas
                                        </a>
                                    </h5>
                                    <span>{event?.capacity} Orang</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="card card-body shadow rounded-3">
                            <div className="d-flex align-items-center">
                                <div className="icon-lg bg-danger bg-opacity-10 rounded-circle text-danger">
                                    <i className="fas fa-ticket-alt" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">
                                        <a href=" " className="stretched-link">
                                            Harga Tiket
                                        </a>
                                    </h5>
                                    <span>Rp. {event?.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="card card-body shadow rounded-3">
                            <div className="d-flex align-items-center">
                                <div className="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue">
                                    <i className="fas fa-building" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">
                                        <a href=" " className="stretched-link">
                                            Jenis Kegiatan
                                        </a>
                                    </h5>
                                    <span>{event?.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="card card-body shadow rounded-3">
                            <div className="d-flex align-items-center">
                                <div className="icon-lg bg-success bg-opacity-10 rounded-circle text-success">
                                    <i className="fas fa-clock" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">
                                        <a href=" " className="stretched-link">
                                            {moment(event?.date_start).format('LL')}
                                        </a>
                                    </h5>
                                    <span> {moment(event?.date_start).format('LT')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category