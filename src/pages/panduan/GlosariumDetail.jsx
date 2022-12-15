import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { getGlossary } from '../../features/guide/guideSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const GlosariumDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const [demoEvents, setDemoEvents] = useState([]);

    const { data, isLoading } = useSelector((state) => state.guide);

    useEffectOnce(() => {
        dispatch(getGlossary(id));
    });

    useEffect(() => {
        if (data?.glossary) setDemoEvents(data?.glossary);
    }, [data]);

    return (
        <>
            <Header />
            <main>
                <section className="bg-blue py-7">
                    <div className="container">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-12">
                                <h1 className="text-white text-center">
                                    {demoEvents?.word}
                                </h1>
                                <div className="d-flex justify-content-center">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                            <li className='breadcrumb-item'><Link to='/kategori'>Fitur</Link></li>
                                            <li className='breadcrumb-item'><Link to='/panduan'>Panduan</Link></li>
                                            <li className='breadcrumb-item'><Link to='/panduan/kamus-KG'>Kamus KG</Link></li>
                                            <li className='breadcrumb-item'><Link to='/panduan/kamus-KG/glosarium'>Glosarium</Link></li>
                                            <li className='breadcrumb-item active' aria-current='page'>{demoEvents?.word}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">
                                    <div className="card-body p-sm-4">
                                        <div className="card">
                                            <div className="card-body p-0 pt-3">
                                                <div className="vstack gap-3">
                                                    {
                                                        isLoading ? (
                                                            <section className="py-0 py-sm-5">
                                                                <div
                                                                    className="container text-center"
                                                                    style={{ marginTop: "178px", marginBottom: "178px" }}>
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className="spinner-border" role="status">
                                                                                <span className="visually-hidden">Loading...</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        ) : Object.values(demoEvents).length !== 0 ? (
                                                            <div>
                                                                <h5 className="border-bottom">{demoEvents?.word}</h5>
                                                                <p>{demoEvents?.definition}</p>
                                                            </div>
                                                        ) : (<></>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default GlosariumDetail