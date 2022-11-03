import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import AccordionList from './AccordionList'

const TableNilai = ({ data, isLoading }) => {

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
                                    Nama Matakuliah
                                </th>
                                <th scope="col" className="border-0">
                                    Credit
                                </th>
                                <th scope="col" className="border-0">
                                    Score
                                </th>
                                <th scope="col" className="border-0">
                                    Predicate
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? (
                                    <tr>
                                        <SkeletonTheme>
                                            <td>  <Skeleton height={50} /> </td>
                                            <td>  <Skeleton height={50} /> </td>
                                            <td>  <Skeleton height={50} /> </td>
                                            <td>  <Skeleton height={50} /> </td>
                                        </SkeletonTheme>
                                    </tr>
                                ) : (
                                    data?.subject?.map((x, index) =>
                                        <tr key={index}>
                                            <td>{x.name}</td>
                                            <td>{x.credit}</td>
                                            <td>{x.score}</td>
                                            <td>{x.predicate}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>

                </div>

                {/* <AccordionList /> */}
            </div>
        </div>
    )
}

export default TableNilai