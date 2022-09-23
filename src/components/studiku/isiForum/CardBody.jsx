import React from 'react'

const CardBody = () => {
    return (
        <div className="card-body p-0 pt-3">
            <div className="vstack gap-3">
                <div className="row mb-4">
                    <div className="col-12">

                        {/* Comment box */}
                        <div className="d-flex mb-4">
                            {/* Avatar */}
                            <div className="avatar avatar-sm flex-shrink-0 me-2">
                                <a href=" ">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/avatar/09.jpg"
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
                        {/* Comment item START */}
                        <div className="border p-2 p-sm-4 rounded-3 mb-4">
                            <ul className="list-unstyled mb-0">
                                <li className="comment-item">
                                    <div className="d-flex mb-3">
                                        {/* Avatar */}
                                        <div className="avatar avatar-sm flex-shrink-0">
                                            <a href=" ">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    src="assets/images/avatar/05.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="ms-2">
                                            {/* Comment by */}
                                            <div className="bg-light p-3 rounded">
                                                <div className="d-flex justify-content-center">
                                                    <div className="me-2">
                                                        <h6 className="mb-1 lead fw-bold">
                                                            <a href=" "> Masitoh </a>
                                                        </h6>
                                                        <p className="mb-2">
                                                            Alhamdulillah saya lulus dengan nilai 80%  Saya kira, tidak semuanya tertulis jelas di materi untuk soal yang disediakan. UN lagi nih. hehehe
                                                        </p>
                                                    </div>
                                                    <small>5hr</small>
                                                </div>
                                            </div>
                                            {/* Comment react */}
                                            <ul className="nav nav-divider py-2 small">
                                                <li className="nav-item">
                                                    <a className="text-primary-hover" href=" ">
                                                        Like (3)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="text-primary-hover" href=" ">
                                                        Reply
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="text-primary-hover" href=" ">
                                                        View 5 replies
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Comment item nested START */}
                                    <ul className="list-unstyled ms-4">
                                        {/* Comment item START */}
                                        <li className="comment-item">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs flex-shrink-0">
                                                    <a href=" ">
                                                        <img
                                                            className="avatar-img rounded-circle"
                                                            src="assets/images/avatar/06.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                {/* Comment by */}
                                                <div className="ms-2">
                                                    <div className="bg-light p-3 rounded">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="me-2">
                                                                <h6 className="mb-1  lead fw-bold">
                                                                    <a href=" "> Lori Stevens </a>
                                                                </h6>
                                                                <p className=" mb-0">
                                                                    Halo kak,
                                                                    menurut pengalaman pribadi untuk jawaban di kuis itu tidak ada pembahasannya kak jadi kita harus mencari sendiri jawabannya dengan membaca kembali materi di modulnya kak..
                                                                    sukses selalu ya kak..
                                                                </p>
                                                            </div>
                                                            <small>2hr</small>
                                                        </div>
                                                    </div>
                                                    {/* Comment react */}
                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item">
                                                            <a className="text-primary-hover" href=" ">
                                                                Like (5)
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="text-primary-hover" href=" ">
                                                                Reply
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Comment item END */}
                                    </ul>
                                    {/* Comment item nested END */}
                                </li>
                            </ul>
                        </div>
                        {/* Comment item END */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBody