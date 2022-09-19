import React from 'react'
import { useState } from 'react';

const Penugasan = () => {

    const [file, setFile] = useState();

    function handleFileChange(e) {
        setFile(e.target.value)
    }

    return (

        <>
            <main>
                <section className="pt-3 pt-xl-5">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <div className="card shadow rounded-2 p-0 ">
                                <div className="card-body p-sm-4">
                                    {/* 1 */}
                                    <div className="col-12">
                                        <h4>Tugas</h4>
                                        <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant
                                            private blushes removed an in equally totally if. Delivered dejection necessary
                                            objection do Mr prevailed. Mr feeling does chiefly cordial in do.
                                            If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced digital marketing course syllabus, let’s look at the scope of digital marketing and what the future holds.</p>

                                    </div>
                                    {/* 2 */}
                                    <div className="col-12 mt-4">
                                        <h3>Submission status</h3>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover">
                                                <tbody>
                                                    <tr>
                                                        <th>Submission status</th>
                                                        <td>Submitted for grading</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Grading status   </th>
                                                        <td>Not graded </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Due date </th>
                                                        <td>Monday, 11 October 2021, 12:00 AM </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Time remaining </th>
                                                        <td>Assignment was submitted 1 day 9 hours early </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Last modified </th>
                                                        <td>	Saturday, 9 October 2021, 2:12 PM </td>
                                                    </tr>
                                                    <tr>
                                                        <th>File submissions </th>
                                                        <td>{file}</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                    {/*  Upload image START */}
                                    <div className="col-12 mt-4">
                                        <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                                            {/* <!-- Image --> */}
                                            <img src="../assets/images/element/gallery.svg" className="h-50px" alt="uploadfile" />
                                            <div>
                                                <h6 className="my-2">Upload tugas disini<a href="#!" className="text-primary"> Browse</a></h6>
                                                <label style={{ cursor: "pointer" }}>
                                                    <span>
                                                        <input onChange={handleFileChange} className="form-control stretched-link" type="file" name="my-image" id="image" />
                                                    </span>
                                                </label>
                                                <p className="small mb-0 mt-2"><b>Note:</b> Pastikan berkas sudah sesuai dengan ketentuan tugas submission</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Upload image END --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>


    )
}

export default Penugasan