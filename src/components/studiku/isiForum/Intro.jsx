import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <section className="bg-blue py-7">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-white">Isi Forum Diskusi</h1>
                        <div className="d-flex justify-content-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                    <li className="breadcrumb-item"><Link to="/pertemuan">Pertemuan</Link></li>
                                    <li className="breadcrumb-item"><Link to="/forum-diskusi">Forum Diskusi</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Isi Forum Diskusi</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro