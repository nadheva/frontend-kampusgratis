import React from 'react'

const CreateComment = () => {
    return (
        <div className="d-flex mb-4">
            <div className="avatar avatar-sm flex-shrink-0 me-2">
                <a href=" ">
                    <img
                        className="avatar-img rounded-circle"
                        src="/assets/images/avatar/09.jpg"
                        alt=""
                    />
                </a>
            </div>
            <form className="w-100 d-flex">
                <textarea
                    className="one form-control pe-4 bg-light"
                    id="autoheighttextarea"
                    rows={1}
                    placeholder="Add a comment..."
                    defaultValue={""}
                />
                <button className="btn btn-primary ms-2 mb-0" type="button">
                    Kirim
                </button>
            </form>
        </div>
    )
}

export default CreateComment