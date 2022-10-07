import React, { useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getSubjects, reset } from '../../../features/subject/subjectSlice'
import useEffectOnce from '../../../helpers/useEffectOnce';

const Intro = ({ subjectId }) => {

    // redux
    const dispatch = useDispatch()
    const { subjects, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.subject
    );

    useEffectOnce(() => {
        dispatch(getSubjects())
    });

    useEffect(() => {

        if (isError && !isSuccess) {
            // toast.error(message);
            dispatch(reset());
        }

        if (isSuccess && message && !isError) {
            // toast.success(message);
            dispatch(reset());
        }

    }, [subjects, isLoading, isError, isSuccess, message, dispatch])

    // Filter data
    const thisSubject = subjects.find(prod => prod.item.id == subjectId)

    return (
        <section className="bg-blue">
            <div className="container">
                <div className="row justify-content-lg-between">
                    {
                        thisSubject == null || thisSubject == 0 ? (
                            <h1></h1>
                        ) : (
                            <div className="col-lg-8">
                                <h1 className="text-white">{thisSubject.item.Subject.name}</h1>
                                <ul className="list-inline mb-5">
                                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-white">
                                        <i className="fas fa-user text-warning me-2"></i> {thisSubject.lecturers}
                                    </li>
                                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-white">
                                        <i className="fas fa-table text-orange me-2"></i>{thisSubject.item.Subject.credit} Sks
                                    </li>
                                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-white">
                                        <i className="fas fa-signal text-success me-2"></i>{thisSubject.item.Subject.level}
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