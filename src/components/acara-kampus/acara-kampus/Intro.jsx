import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-light p-4 text-center rounded-3">
                            <h1 className="m-0">Acara Kampus</h1>
                            <div className="d-flex justify-content-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item">
                                            <Link to="/kategori" >Category</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Acara Kampus
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Intro