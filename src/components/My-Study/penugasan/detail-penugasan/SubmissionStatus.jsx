import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SubmissionStatus = ({ assigments, isLoading }) => {
    return (
        <div className="col-12 mt-5">
            <h3>Status Penugasan</h3>
            {
                isLoading ? (
                    <div className="col-lg-12 mb-5">
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
                                    <th>Status Penilaian</th>
                                    <td>Belum ada status.</td>
                                </tr>
                                <tr>
                                    <th>Nilai</th>
                                    <td>Belum dinilai.</td>
                                </tr>
                                <tr>
                                    <th>Batas Waktu</th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Waktu Tersisa</th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Terakhir Diubah</th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>Berkas Penugasan</th>
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
                                    <th>Status Penilaian</th>
                                    {
                                        assigments?.students_work?.status == 0 || assigments?.students_work?.status == null ? (
                                            <td>Belum ada status.</td>
                                        ) : (
                                            <td className={assigments?.students_work?.status === "LATE" ? "table-danger" : ""}>
                                                {assigments?.students_work?.status}
                                            </td>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <th>Nilai</th>
                                    {
                                        assigments?.students_work?.score == 0 || assigments?.students_work?.score == null ? (
                                            <td>Belum dinilai.</td>
                                        ) : (
                                            <td className="table-success">
                                                {assigments?.students_work?.score}
                                            </td>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <th>Waktu Tersisa</th>
                                    <td>
                                        {assigments?.assignment?.deadline ?? '-'}
                                    </td>
                                </tr>
                                {/* <tr>
                                    <th>Waktu Tersisa </th>
                                    <td>
                                        {assigments?.assignment?.duration ?? '-'}
                                    </td>
                                </tr> */}
                                <tr>
                                    <th>Terakhir Diubah</th>
                                    <td >
                                        {assigments?.students_work?.activity_detail?.date_submit ?? '-'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Berkas Tugas</th>
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