import React from 'react'

const AccordionItem = ({nilai}) => {

    const dataTarget = `#data${nilai.id}`;
    const dataId = `data${nilai.id}`;

    return (
        <div className="accordion-item mb-3">
            <h6 className="accordion-header font-base" id="heading-1">
                <button
                    className="accordion-button fw-bold rounded d-flex collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={dataTarget}
                    aria-expanded="true"
                    aria-controls="collapse-1">
                    {nilai.title}
                    <span
                        className="text-secondary ms-auto pe-4"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark as completed">
                        3.90
                    </span>
                </button>
            </h6>
            <div
                id={dataId}
                className="accordion-collapse collapse show"
                aria-labelledby="heading-1"
                data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                    <div className="table-responsive border-0">

                        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">
                                        Nama Matakuliah
                                    </th>
                                    <th scope="col" className="border-0">
                                        Nilai
                                    </th>
                                    <th scope="col" className="border-0">
                                        Grade
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Logika pemograman 1</td>
                                    <td>90</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Logika pemograman 2</td>
                                    <td>80</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                    <td>Logika pemograman 3</td>
                                    <td>70</td>
                                    <td>C</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem