import React from 'react';
import { Link } from 'react-router-dom';
import ModulItem from '../../components/studiku/modul/ModulItem';
import DataModul from '../../json/Modul';

const Modul = () => {
    return (
        <main>
            {/* Intro */}
            <section className="bg-blue py-7">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-white">Modul</h1>
                            <div className="d-flex justify-content-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item"><Link to="/pertemuan">Pertemuan</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Modul</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content */}
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow rounded-2 p-0 mt-n5">

                                <div className="card-body p-sm-4">
                                    <div className="tab-content" id="course-pills-tabContent">
                                        <div className="tab-pane fade show active" id="course-pills-3" role="tabpanel"
                                            aria-labelledby="course-pills-tab-3">
                                            <div className="card">

                                                {/* Card header */}
                                                <div className="card-header  p-0 pb-3">
                                                    <h4 className="mb-3">Modul</h4>
                                                    <form className="row g-4">
                                                        <div className="col-sm-12 col-lg-12">
                                                            <div className="position-relative">
                                                                <input className="form-control pe-5 bg-transparent"
                                                                    type="search" placeholder="Search" aria-label="Search" />
                                                                <button
                                                                    className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                                                                    type="submit">
                                                                    <i className="fas fa-search fs-6 "></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* card Body */}
                                                <div className="card-body p-0 pt-3">
                                                    <div className="row g-4 justify-content-center">
                                                        {DataModul.map((modul) => (
                                                            <ModulItem key={modul.id} modul={modul} />
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>     
        </main >
    )
}

export default Modul