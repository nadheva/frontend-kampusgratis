import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from "react-redux";
import {
    getAssignments,
} from "../../../features/assignment/assignmentSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";

// Component
import Footer from '../../../components/default/Footer'
import Header from '../../../components/default/Header'
import Intro from '../../../components/My-Study/penugasan/main-penugasan/Intro'
import MainContent from '../../../components/My-Study/penugasan/main-penugasan/MainContent'

const Penugasan = () => {

    useEffect(() => {
        document.title = "Kampus Gratis | Penugasan";
    });

    // // Redux
    const dispatch = useDispatch();

    const [assignments, setAssignments] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [late, setLate] = useState([]);
    const [grading, setGrading] = useState([]);
    const [finished, setFinished] = useState([]);

    const { data, isLoading } = useSelector(
        (state) => state.assignment
    );

    useEffectOnce(() => {
        dispatch(getAssignments());
    });

    useEffect(() => {
        if (data?.assignments) setAssignments(data.assignments);
        if (data?.assignments?.ongoing) setOngoing(data?.assignments?.ongoing);
        if (data?.assignments?.late) setLate(data?.assignments?.late);
        if (data?.assignments?.grading) setGrading(data?.assignments?.grading);
        if (data?.assignments?.finished) setFinished(data?.assignments?.finished);
    }, [data]);
console.log()
    return (
        <>
            <Header />
            <main>
                <Intro />
                <MainContent
                    assignments={assignments}
                    ongoing={ongoing}
                    grading={grading}
                    late={late}
                    finished={finished}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}

export default Penugasan