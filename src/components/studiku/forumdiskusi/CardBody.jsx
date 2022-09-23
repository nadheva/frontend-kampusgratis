import React from 'react'
import QuestionItem from './QuestionItem'

const CardBody = () => {
    return (
        <div className="card-body p-0 pt-3">
            <div className="vstack gap-3">
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
            </div>
        </div>
    )
}

export default CardBody