import React from 'react'
import CommentItem from './CommentItem'

const CommentList = () => {
    return (
        <div className="border p-2 p-sm-4 rounded-3 mb-4">
            <ul className="list-unstyled mb-0">
                <CommentItem />
                <CommentItem />
            </ul>
        </div>
    )
}

export default CommentList