import React from 'react'
import ListDitugaskan from './ListDitugaskan'
import ListSelesai from './ListSelesai'
import ListSemua from './ListSemua'
import ListTerlambat from './ListTerlambat'
import ListGrading from './ListGrading'

const CardBody = ({ assignments, ongoing, isLoading, grading, late, finished }) => {
    return (
        <div className="card-body p-sm-4">
            <div className="tab-content" id="course-pills-tabContent">
                <ListSemua
                    assignments={assignments}
                />
                <ListDitugaskan
                    ongoing={ongoing}
                    isLoading={isLoading}
                />
                <ListTerlambat
                    late={late}
                    isLoading={isLoading}
                />
                <ListGrading
                    isLoading={isLoading}
                    grading={grading}
                />
                <ListSelesai
                    finished={finished}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default CardBody