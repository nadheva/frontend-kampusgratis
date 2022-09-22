import React from 'react';
import { NavLink } from 'react-router-dom';

const Result = ({ showResult, quizs, marks, startOver }) => {
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 20 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold text-white'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold text-white'>Skor Anda adalah {marks} dari {quizs.length * 20}</h3>
                            {/* <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Mulai lagi</button> */}
                            <NavLink to="/quiz" className='btn py-2 px-4 btn-light fw-bold d-inline'>Kembali</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;