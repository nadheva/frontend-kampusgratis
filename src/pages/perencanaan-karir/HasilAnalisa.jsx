import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCareer } from '../../features/career/careerSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../../assets/js/ChangingProgressProvider";
const percentage = 66;

const HasilAnalisa = () => {

    // Redux
    const dispatch = useDispatch();
    const [currentCareer, setCurrentCareer] = useState({});

    const { data, isLoading } = useSelector(
        (state) => state.career
    );

    useEffectOnce(() => {
        dispatch(getCareer());
    });

    useEffect(() => {
        if (data?.career) setCurrentCareer(data?.career);
    }, [data]);

    console.log(currentCareer)

    return (
        <>
            <Header />
            <main>
                <section className="mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                {/* <img
                                    src="../assets/images/element/chart.svg"
                                    className="h-200px h-md-300px mb-3"
                                    alt=""
                                /> */}
                                <div className="d-flex justify-content-center mb-4">
                                    <div style={{ width: "25%" }}>
                                        <ChangingProgressProvider values={[0, currentCareer?.accuracy]}
                                            className="h-200px h-md-300px mb-3">
                                            {(percentage) => (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    text={`${percentage}%`}
                                                    styles={buildStyles({
                                                        pathTransition:
                                                            percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                                                    })}
                                                />
                                            )}
                                        </ChangingProgressProvider>
                                    </div>
                                </div>

                                <p>Karir yang cocok untuk kamu adalah</p>
                                <h1>“{currentCareer?.career}”</h1>
                            </div>
                            <div className="col-12 text-center mt-5">
                                <p className="mb-0">
                                    Pelajari selengkapnya untuk menjadi <br /> <b>{currentCareer?.career}</b>
                                </p>
                                {/* <Link to="/perencanaan-karir/hasil-analisa/modul-karir" type="button" className="btn btn-info mt-7 mb-0 rounded-5 px-4">
                                    Lihat detail modul
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HasilAnalisa
