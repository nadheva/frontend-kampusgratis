import React from 'react'
import QuestionItem from './QuestionItem'
import DataForumDiskusi from '../../../json/ForumDiskusi'

const QuestioList = () => {
    return (
        <div className="card-body p-0 pt-3">
            <div className="vstack gap-3">
                {DataForumDiskusi.map((forum) => (
                    <QuestionItem key={forum.id} forum={forum} />
                ))}
            </div>
        </div>
    )
}

export default QuestioList