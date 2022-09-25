import React from 'react'

const CardHeader = () => {
    return (
        <div className="card-header p-0 pb-5">
            <h4 className="mb-3">Detail Diskusi</h4>

            <div className="card border p-4 h-100">
                {/* Avatar group and content */}
                <div className="d-sm-flex align-items-center mb-4">
                    {/* Avatar group */}
                    <ul className="avatar-group mb-2 mb-sm-0">
                        <li className="avatar avatar-md">
                            <img
                                className="avatar-img rounded-circle border-white"
                                src="assets/images/avatar/09.jpg"
                                alt="avatar"
                            />
                        </li>
                    </ul>
                    {/* Content */}
                    <div className="ms-sm-2">
                        <h6 className="mb-1"> Jacqueline Miller</h6>
                        <p className="mb-0">
                            Matematika - 27 Mar 2021
                        </p>
                    </div>
                </div>

                <h4 className="card-title m-0">
                    <p className="stretched-link">
                        Untuk pertanyaan pada kuis apa tidak bisa melihat pembahasannya?
                    </p>
                </h4>
                <p >untuk kuis nya apa tidak ada pembahasannya? agar saya koreksi lagi mana yang benar dan yang salah</p>

            </div>
        </div>
    )
}

export default CardHeader