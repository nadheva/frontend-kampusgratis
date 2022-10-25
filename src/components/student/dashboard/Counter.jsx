import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from "react-redux";
import { getAchievements, reset } from "../../../features/profile/profileSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";

const Counter = () => {

    // redux
    const dispatch = useDispatch();
    const [achievements, setAchievements] = useState({});

    const { user } = useSelector(
        (state) => state.profile
    );

    useEffectOnce(() => {
        dispatch(getAchievements());
    });

    useEffect(() => {
        if (user?.achievements) setAchievements(user.achievements);

    }, [user]);

    return (
        <div className="row g-4 mb-4">
            <div className="col-md-4 col-xxl-4">
                <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                data-purecounter-end="1958" data-purecounter-delay="200">{achievements.finished_subjects}                                    </h2>
                            <span className="mb-0 h6 fw-light">Matkul Terselesaikan</span>
                        </div>

                        <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i
                            className="fas fa-tv fa-fw"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xxl-4">
                <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                data-purecounter-end="1600" data-purecounter-delay="200">{achievements.subject_taken}</h2>
                            <span className="mb-0 h6 fw-light">Matkul Terdaftar</span>
                        </div>

                        <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i
                            className="fas fa-user-tie fa-fw"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xxl-4">
                <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <h2 className="purecounter mb-0 fw-bold" data-purecounter-start="0"
                                data-purecounter-end="1235" data-purecounter-delay="200">{achievements.students_certificate}</h2>
                            <span className="mb-0 h6 fw-light">Achieved Certificates</span>
                        </div>

                        <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i
                            className="fas fa-medal fa-fw fa-fw"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter