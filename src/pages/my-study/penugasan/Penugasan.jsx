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

    const [assigments, setAssigments] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [late, setLate] = useState([]);
    const [grading, setGrading] = useState([]);

    const { data, isLoading } = useSelector(
        (state) => state.assignment
    );

    useEffectOnce(() => {
        dispatch(getAssignments());
    });

    useEffect(() => {
        if (data?.assigments) setAssigments(data.assigments);
        if (data?.assigments?.ongoing) setOngoing(data?.assigments?.ongoing);
        if (data?.assigments?.late) setLate(data?.assigments?.late);
        if (data?.assigments?.grading) setGrading(data?.assigments?.grading);
    }, [data]);

    // console.log(assigments.ongoing)
    // ongoing.map((x) => console.log(x.id))
    // console.log(late)
    // console.log(grading)

    // console.log(Object.values(assigments.grading).length)

    return (
        <>
            <Header />
            <main>
                <Intro />
                <MainContent
                    assigments={assigments}
                    ongoing={ongoing}
                    grading={grading}
                    late={late}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}

export default Penugasan