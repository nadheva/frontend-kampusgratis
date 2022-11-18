import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import AccordionList from './AccordionList'

const TableScore = ({ data, isLoading }) => {

    return (
        <div className="card border bg-transparent rounded-3 mt-4">
            <div className="card-header bg-transparent border-bottom px-3">
                <h3 className="card-title mb-0">Rangkuman Nilai</h3>
            </div>
            <div className="card-body p-4">
                <div className="table-responsive border-0">
                    <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="border-0 rounded-start">
                                    Nama Mata Kuliah
                                </th>
                                <th scope="col" className="border-0">
                                    SKS
                                </th>
                                <th scope="col" className="border-0">
                                    Nilai
                                </th>
                                <th scope="col" className="border-0">
                                    Predikat
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? (
                                    <>
                                        <SkeletonTheme>
                                            <tr>
                                                <td>  <Skeleton height={50} /> </td>
                                                <td>  <Skeleton height={50} /> </td>
                                                <td>  <Skeleton height={50} /> </td>
                                                <td>  <Skeleton height={50} /> </td>
                                            </tr>
                                            <tr>
                                                <td>  <Skeleton height={50} /> </td>
                                                <td>  <Skeleton height={50} /> </td>
                                                <td>  <Skeleton height={50} /> </td>
                                                <td>  <Skeleton height={50} /> </td>
                                            </tr>
                                        </SkeletonTheme>
                                    </>
                                ) : <>
                                    {data?.subject?.length === 0 || data?.subject === undefined && <>
                                        <tr>
                                            <td colSpan={4} className="p-0 pt-2">
                                                <div className="alert alert-info my-0 text-center">
                                                    Kamu belum memiliki penilaian.
                                                </div>
                                            </td>
                                        </tr>
                                    </>}
                                    {data?.subject?.map((x, index) =>
                                        <tr key={index}>
                                            <td>{x.name}</td>
                                            <td>{x.credit}</td>
                                            <td>{x.score}</td>
                                            <td>{x.predicate}</td>
                                        </tr>
                                    )}
                                </>
                            }
                        </tbody>
                    </table>

                </div>

                {/* <AccordionList /> */}
            </div>
        </div>
    )
}

export default TableScore