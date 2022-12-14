import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { getGuide } from '../../features/guide/guideSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const BukuPanduanDetial = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const [demoEvents, setDemoEvents] = useState([]);

    const { data, isLoading } = useSelector((state) => state.guide);

    useEffectOnce(() => {
        dispatch(getGuide(id));
    });

    useEffect(() => {
        if (data?.guide) setDemoEvents(data?.guide);
    }, [data]);

    return (
        <>
            <Header />
            <main>
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
                        <>
                            <section className="bg-light">
                                <div className="container">
                                    <div className="row position-relative pb-4">
                                        <div className="col-lg-8 position-relative">
                                            <h1>{demoEvents?.title}</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="h-400px mb-n9 rounded-3"
                                        style={{
                                            backgroundImage: `url(${demoEvents?.content?.image_link})`,
                                            backgroundPosition: "center left",
                                            backgroundSize: "cover"
                                        }}
                                    ></div>
                                </div>
                            </section>
                            <section className="pt-9">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <p>{demoEvents?.content?.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (<> </>)
                }
            </main>
            <Footer />
        </>
    )
}

export default BukuPanduanDetial