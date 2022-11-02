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
                ) : assigments == undefined || assigments.length == 0 || assigments == null ? (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <th>Grading status</th>
                                    <td>Not graded</td>
                                </tr>
                                <tr>
                                    <th> Grade</th>
                                    <td>Not graded</td>
                                </tr>
                                <tr>
                                    <th>Due date </th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Time remaining </th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Last modified </th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>File submissions </th>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <th>Grading status</th>
                                    {
                                        assigments?.students_work?.status == 0 || assigments?.students_work?.status == null ? (
                                            <td>Not graded</td>
                                        ) : (
                                            <td className={assigments?.students_work?.status === "LATE" ? "table-danger" : ""}>
                                                {assigments?.students_work?.status}
                                            </td>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <th> Grade</th>
                                    {
                                        assigments?.students_work?.score == 0 || assigments?.students_work?.score == null ? (
                                            <td>Not graded</td>
                                        ) : (
                                            <td className="table-success">
                                                {assigments?.students_work?.score}
                                            </td>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <th>Due date </th>
                                    <td>
                                        {assigments?.assignment?.deadline ?? '-'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Time remaining </th>
                                    <td>
                                        {assigments?.assignment?.duration ?? '-'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Last modified </th>
                                    <td >
                                        {assigments?.students_work?.activity_detail?.date_submit ?? '-'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>File submissions </th>
                                    <td>
                                        {
                                            <p className={assigments?.students_work?.activity_detail?.file_assignment ? "bg-light" : ""}>
                                                <a href={assigments?.students_work?.activity_detail?.file_assignment_link} target="_blank">
                                                    {assigments?.students_work?.activity_detail?.file_assignment ?? '-'}
                                                </a>
                                            </p>
                                        }
                                    </td>
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