import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getSubject, reset } from '../../../features/subject/subjectSlice'
import useEffectOnce from '../../../helpers/useEffectOnce';

const Intro = ({ subjectId }) => {

    // redux
    const dispatch = useDispatch();
    const [currentSubject, setCurrentSubject] = useState({});

    const { data, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.subject
    );

    useEffectOnce(() => {
        dispatch(getSubject(subjectId));
    });

    useEffect(() => {
        if (data?.subject) setCurrentSubject(data.subject);

    }, [data]);

    return (
        <section className="bg-blue">
            <div className="container">
                <div className="row justify-content-lg-between">
                    {
                        isLoading ? (
                            <div className="col-lg-8 mb-5">
                                <SkeletonTheme >
                                    <Skeleton height={50} width={400} />
                                    <Skeleton height={20} width={300} />
                                </SkeletonTheme>
                            </div>
                        ) : currentSubject == null || currentSubject == 0 ? (
                            <h1></h1>
                        ) : (
                            <div className="col-lg-8">
                                <h1 className="text-white">{currentSubject.name}</h1>
                                <ul className="list-inline mb-5">
                                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-white">
                                        <i className="fas fa-user text-warning me-2"></i> {currentSubject.lecturers}
                                    </li>
                                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-white">
                                        <i className="fas fa-table text-orange me-2"></i>{currentSubject.credit} Sks
                                    </li>
                                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-white">
                                        <i className="fas fa-signal text-success me-2"></i>{currentSubject.level}
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default Intro