import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getSubject } from '../../../features/my-study/myStudySlice';
import useEffectOnce from '../../../helpers/useEffectOnce';

const Intro = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { sessionId, subjectId } = useParams();
    const [currentSubject, setCurrentSubject] = useState({});

    const { data } = useSelector(
        (state) => state.myStudy
    );

    useEffectOnce(() => {
        dispatch(getSubject(subjectId))
    });

    useEffect(() => {
        if (data?.subject) setCurrentSubject(data.subject);
    });

    return (
        <section
            className="bg-blue align-items-center d-flex"
            style={{
                background:
                    "url(/assets/images/pattern/04.png) no-repeat center center",
                backgroundSize: "cover",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className='col-12 text-center'>
                        <h1 className="text-white">{currentSubject.name}</h1>
                        <div className='d-flex justify-content-center'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                                    <li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
                                    <li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
                                    <li className='breadcrumb-item'><Link to={`/studi-ku/${subjectId}`}>Mata Kuliah</Link></li>
                                    <li className='breadcrumb-item active' aria-current='page'>Penugasan</li>
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