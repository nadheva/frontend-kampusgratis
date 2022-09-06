import React from 'react'

const MainContent = () => {
    return (

        <>
            <div className="col-12 position-relative">
                <div className="video-player rounded-3">
                    <video controls crossOrigin="anonymous" playsInline
                        poster="assets/images/videos/poster.jpg" >
                        <source src="assets/images/videos/360p.mp4" type="video/mp4" size="360" />
                        <source src="assets/images/videos/720p.mp4" type="video/mp4" size="720" />
                        <source src="assets/images/videos/1080p.mp4" type="video/mp4" size="1080" />
                        <track kind="captions" label="English" srcLang="en"
                            src="assets/images/videos/en.vtt" default />
                        <track kind="captions" label="French" srcLang="fr"
                            src="assets/images/videos/fr.vtt" />
                    </video>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="bg-body bg-body-pertemuan shadow rounded-2 p-4">

                    <ul className="nav nav-pills nav-tabs-line pt-0" id="course-pills-tab" role="tablist">

                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0 active  text-white"
                                id="course-pills-tab-1" data-bs-toggle="pill"
                                data-bs-target="#course-pills-1" type="button" role="tab"
                                aria-controls="course-pills-1" aria-selected="true">Description
                            </button>
                        </li>


                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0  text-white" id="course-pills-tab-4"
                                data-bs-toggle="pill" data-bs-target="#course-pills-4" type="button"
                                role="tab" aria-controls="course-pills-4"
                                aria-selected="false">Discusion </button>
                        </li>
                    </ul>
                    <hr />

                    <div className="tab-content pt-2" id="course-pills-tabContent">

                        <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                            aria-labelledby="course-pills-tab-1">

                            <h5 className="mb-3 text-white">Course Description</h5>
                            <p className="mb-3">Welcome to the
                                <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1
                                    (Over 36 hours of content)</strong>
                            </p>
                            <p className="mb-3">In this practical hands-on training, you’re going to learn
                                to become a digital marketing expert with this <strong> ultimate course
                                    bundle that includes 12 digital marketing courses in 1!</strong></p>
                            <p className="mb-3">If you wish to find out the skills that should be covered in
                                a basic
                                digital marketing course syllabus in India or anywhere around the world,
                                then
                                reading this blog will help. Before we delve into the advanced
                                <strong><a href=" " className="text-reset text-decoration-underline">digital
                                    marketing
                                    course</a></strong> syllabus, let’s look at the scope of digital
                                marketing and what the future holds.</p>
                            <p className="mb-0">We focus a great deal on the understanding of behavioral
                                psychology
                                and influence triggers which are crucial for becoming a well rounded
                                Digital
                                Marketer. We understand that theory is important to build a solid
                                foundation, we
                                understand that theory alone isn’t going to get the job done so that’s
                                why this
                                course is packed with practical hands-on examples that you can follow
                                step by
                                step.</p>



                            <p className="mb-0">As it so contrasted oh estimating instrument. Size like body
                                someone
                                had. Are conduct viewing boy minutes warrant the expense? Tolerably
                                behavior may
                                admit daughters offending her ask own. Praise effect wishes change way
                                and any
                                wanted. Lively use looked latter regard had. Do he it part more last in.
                            </p>


                        </div>

                        <div className="tab-pane fade" id="course-pills-4" role="tabpanel"
                            aria-labelledby="course-pills-tab-4">

                            <div className="row mb-4">
                                <h5 className="mb-4 text-white">Our Student Reviews</h5>
                            </div>

                            <div className="row">

                                <div className="d-md-flex my-4">

                                    <div className="avatar avatar-xl me-4 flex-shrink-0">
                                        <img className="avatar-img rounded-circle"
                                            src="assets/images/avatar/09.jpg" alt="avatar" />
                                    </div>

                                    <div>
                                        <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                                            <h5 className="me-3 mb-0 text-white">Jacqueline Miller</h5>
                                        </div>

                                        <p className="small mb-2">2 days ago</p>
                                        <p className="mb-2">Perceived end knowledge certainly day sweetness
                                            why
                                            cordially. Ask a quick six seven offer see among. Handsome
                                            met
                                            debating sir dwelling age material. As style lived he worse
                                            dried.
                                            Offered related so visitors we private removed. Moderate do
                                            subjects
                                            to distance. </p>

                                        <div className="btn-group" role="group"
                                            aria-label="Basic radio toggle button group">

                                            <input type="radio" className="btn-check" name="btnradio"
                                                id="btnradio1" />
                                            <label className="btn btn-outline-light btn-sm mb-0">
                                                <i className="far fa-thumbs-up me-1"></i>25
                                            </label>

                                            <input type="radio" className="btn-check" name="btnradio"
                                                id="btnradio2" />
                                            <label className="btn btn-outline-light btn-sm mb-0">
                                                <i className="far fa-thumbs-down me-1"></i>2
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="d-md-flex my-4">

                                    <div className="avatar avatar-xl me-4 flex-shrink-0">
                                        <img className="avatar-img rounded-circle"
                                            src="assets/images/avatar/07.jpg" alt="avatar" />
                                    </div>

                                    <div>
                                        <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                                            <h5 className="me-3 mb-0 text-white">Dennis Barrett</h5>

                                        </div>

                                        <p className="small mb-2">2 days ago</p>
                                        <p className="mb-2">Handsome met debating sir dwelling age material.
                                            As
                                            style lived he worse dried. Offered related so visitors we
                                            private
                                            removed. Moderate do subjects to distance. </p>

                                        <div className="btn-group" role="group"
                                            aria-label="Basic radio toggle button group">

                                            <input type="radio" className="btn-check" name="btnradio"
                                                id="btnradio3" />
                                            <label className="btn btn-outline-light btn-sm mb-0"><i
                                                className="far fa-thumbs-up me-1"></i>25</label>

                                            <input type="radio" className="btn-check" name="btnradio"
                                                id="btnradio4" />
                                            <label className="btn btn-outline-light btn-sm mb-0"> <i
                                                className="far fa-thumbs-down me-1"></i>2</label>
                                        </div>
                                    </div>
                                </div>


                                <hr />
                            </div>



                            <div className="mt-2">
                                <h5 className="mb-4">Leave a Review</h5>
                                <form className="row g-3">

                                    <div className="col-md-6 bg-light-input">
                                        <input type="text" className="form-control" id="inputtext"
                                            placeholder="Name" aria-label="First name" />
                                    </div>

                                    <div className="col-md-6 bg-light-input">
                                        <input type="email" className="form-control" placeholder="Email"
                                            id="inputEmail4" />
                                    </div>

                                    <div className="col-12 bg-light-input">
                                        <textarea className="form-control" id="exampleformControlTextarea1"
                                            placeholder="Your review" rows="3"></textarea>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary mb-0">Post
                                            Review</button>
                                    </div>
                                </form>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default MainContent