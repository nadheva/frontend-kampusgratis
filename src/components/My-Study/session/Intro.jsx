import React from 'react'
import { Link } from 'react-router-dom'

const Intro = ({ currentSubject }) => {
    return (
        <section className="bg-blue align-items-center d-flex" style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-white">{currentSubject.name}</h1>
                        <div className="d-flex justify-content-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                    <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                                    <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                                    <li className='breadcrumb-item active' aria-current='page'>Mata Kuliah</li>
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