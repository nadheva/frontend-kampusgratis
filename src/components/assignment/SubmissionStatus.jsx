import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SubmissionStatus = ({ assigments, isLoading }) => {
    return (
        <div className="col-12 mt-5">
            <h3>Submission status</h3>
            {
                isLoading ? (
                    <div className="col-lg-8 mb-5">
                        <SkeletonTheme >
                            <Skeleton height={20} />
                            <Skeleton height={20} />
                            <Skeleton height={20} />
                            <Skeleton height={20} />
                        </SkeletonTheme>
                    </div>
                ) : assigments == undefined || assigments.length == 0 ? (
                    <>
                    </>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <th>Submission status</th>
                                    <td>
                                        {
                                            assigments.students_work.status == 0 || assigments.students_work.status == null ? (
                                                <>Not graded</>
                                            ) : (
                                                <>{assigments.students_work.status}</>
                                            )
                                        }

                                    </td>
                                </tr>
                                <tr>
                                    <th>Grading status </th>
                                    <td>
                                        {
                                            assigments.students_work.score == 0 || assigments.students_work.score == null ? (
                                                <>Not graded</>
                                            ) : (
                                                <>
                                                    {assigments.students_work.score}
                                                </>
                                            )
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>Due date </th>
                                    <td>Monday, 17 January 2022, 12:00 AM</td>
                                </tr>
                                <tr>
                                    <th>Time remaining </th>
                                    <td>
                                        Assignment is overdue by: 270 days 10 hours
                                    </td>
                                </tr>
                                <tr>
                                    <th>Last modified </th>
                                    <td>Friday, 22 April 2022, 11:11 AM</td>
                                </tr>
                                <tr>
                                    <th>File submissions </th>
                                    <td>namfile</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}

export default SubmissionStatus