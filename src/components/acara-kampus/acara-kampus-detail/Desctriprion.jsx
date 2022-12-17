import React from 'react'

const Desctriprion = ({ event }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            {/* <h5 className="mt-0">Desctriprion </h5> */}
                            <p>
                                {event?.description}
                            </p>
                        </div>
                        <div>
                            <h5 className="mt-3">Materi Acara</h5>
                            <ul className="list-group list-group-borderless">
                                {
                                    event?.material?.map((x, i) => (
                                        <li className="list-group-item h6 fw-normal d-flex" key={i}>
                                            <i className="bi bi-caret-right me-2" />
                                            {x}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Desctriprion