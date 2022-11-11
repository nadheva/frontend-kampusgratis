import React from 'react'
import ListDitugaskan from './ListDitugaskan'
import ListSelesai from './ListSelesai'
import ListSemua from './ListSemua'
import ListTerlambat from './ListTerlambat'

const CardBody = ({ assignments, ongoing, isLoading, grading, late }) => {
    return (
        <div className="card-body p-sm-4">
            <div className="tab-content" id="course-pills-tabContent">
                <ListSemua
                    assignments={assignments}
                    isLoading={isLoading}
                />
                <ListDitugaskan
                    ongoing={ongoing}
                    isLoading={isLoading}
                />
                <ListTerlambat
                    late={late}
                    isLoading={isLoading}
                />
                <ListSelesai
                    grading={grading}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default CardBody