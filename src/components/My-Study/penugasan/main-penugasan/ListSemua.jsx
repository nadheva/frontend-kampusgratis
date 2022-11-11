import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ItemSemua from './ItemSemua'

const ListSemua = ({ assignments }) => {
    const [allAsignments, setAllAsignments] = useState([]);

    useEffect(() => {
        if (allAsignments.length === 0 && Object.values(assignments).length !== 0) {
            assignments?.ongoing.map(ongoing => setAllAsignments(prevValue => [...prevValue, ongoing]));
            assignments?.grading.map(grading => setAllAsignments(prevValue => [...prevValue, grading]));
            assignments?.finished.map(finished => setAllAsignments(prevValue => [...prevValue, finished]));
            assignments?.late.map(late => setAllAsignments(prevValue => [...prevValue, late]));
        }
    }, [allAsignments, assignments]);

    return (
        <div className="tab-pane fade show active"
            id="course-pills-4"
            role="tabpanel"
            aria-labelledby="course-pills-tab-4">
            {
                allAsignments.length === 0 ? <>
                    <SkeletonTheme>
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                    </SkeletonTheme>
                </> : <>
                    {
                        allAsignments.length !== 0 ? <>
                            {
                                allAsignments.map((assignment) => (
                                    <ItemSemua key={assignment.id} assignment={assignment} />
                                ))
                            }
                        </> : <>
                            <div className="card border border-info border-2 shadow-lg rounded-2 px-4 py-2 my-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="m-0 text-info">
                                        Belum ada tugas
                                    </h5>
                                </div>
                            </div>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default ListSemua