import React from 'react'

const SubmissionStatus = () => {
    return (
        <div className="col-12 mt-5">
            <h3>Submission status</h3>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <th>Submission status</th>
                            <td>Submitted for grading</td>
                        </tr>
                        <tr>
                            <th>Grading status </th>
                            <td>Not graded </td>
                        </tr>
                        <tr>
                            <th>Due date </th>
                            <td>xxx</td>
                        </tr>
                        <tr>
                            <th>Time remaining </th>
                            <td>
                                Assignment was submitted 1 day 9 hours early
                            </td>
                        </tr>
                        <tr>
                            <th>Last modified </th>
                            <td> Saturday, 9 October 2021, 2:12 PM </td>
                        </tr>
                        <tr>
                            <th>File submissions </th>
                            <td>namfile</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SubmissionStatus