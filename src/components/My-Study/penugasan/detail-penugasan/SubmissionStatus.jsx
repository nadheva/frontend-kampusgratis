import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SubmissionStatus = ({ assignments, isLoading }) => {
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
                ) : assignments == undefined || assignments.length == 0 || assignments == null ? (
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
                                        assignments?.students_work?.status == 0 || assignments?.students_work?.status == null ? (
                                            <td>Belum ada status.</td>
                                        ) : (
                                            <td className={assignments?.students_work?.status === "LATE" ? "table-danger" : ""}>
                                                {assignments?.students_work?.status}
                                            </td>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <th>Nilai</th>
                                    {
                                        assignments?.students_work?.score == 0 || assignments?.students_work?.score == null ? (
                                            <td>Belum dinilai.</td>
                                        ) : (
                                            <td className="table-success">
                                                {assignments?.students_work?.score}
                                            </td>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <th>Waktu Tersisa</th>
                                    <td>
                                        {assignments?.assignment?.deadline ?? '-'}
                                    </td>
                                </tr>
                                {/* <tr>
                                    <th>Waktu Tersisa </th>
                                    <td>
                                        {assignments?.assignment?.duration ?? '-'}
                                    </td>
                                </tr> */}
                                <tr>
                                    <th>Terakhir Diubah</th>
                                    <td >
                                        {assignments?.students_work?.activity_detail?.date_submit ?? '-'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Berkas Tugas</th>
                                    <td>
                                        {
                                            <p className={assignments?.students_work?.activity_detail?.file_assignment ? "bg-light" : ""}>
                                                <a href={assignments?.students_work?.activity_detail?.file_assignment_link} target="_blank">
                                                    {assignments?.students_work?.activity_detail?.file_assignment ?? '-'}
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