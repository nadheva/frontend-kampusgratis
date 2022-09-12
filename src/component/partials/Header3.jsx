import React from 'react'

const Header3 = () => {
    return (
        <header class="navbar-light navbar-sticky">

            <nav class="navbar navbar-expand-xl z-index-9">
                <div class="container">

                    <a class="navbar-brand" href="/home">
                        <img
                            className="light-mode-item navbar-brand-item"
                            src="assets/images/kgLogo.png"
                            alt="logo"
                        />
                        <img
                            className="dark-mode-item navbar-brand-item"
                            src="assets/images/kgLogo.png"
                            alt="logo"
                        />
                    </a>

                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <div class="navbar-collapse collapse" id="navbarCollapse">
                        <ul class="navbar-nav navbar-nav-scroll ms-auto">
                            <li class="nav-item dropdown"><a class="nav-link" href="/">Landing Page</a></li>
                            <li class="nav-item"><a class="nav-link" href="/home">My Home</a></li>
                        </ul>
                    </div>


                    <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
                        <li class="nav-item ms-2 ms-sm-3 dropdown">

                            <a class="btn btn-light btn-round mb-0" href=" " role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" data-bs-auto-close="outside">
                                <i class="bi bi-bell fa-fw"></i>
                            </a>

                            <span class="notif-badge animation-blink"></span>

                            <div
                                class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                                <div class="card bg-transparent">
                                    <div
                                        class="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                                        <h6 class="m-0">Notifications <span
                                            class="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span></h6>
                                        <a class="small" href=" ">Clear all</a>
                                    </div>
                                    <div class="card-body p-0">
                                        <ul class="list-group list-unstyled list-group-flush">

                                            <li>
                                                <a href=" "
                                                    class="list-group-item-action border-0 border-bottom d-flex p-3">
                                                    <div class="me-3">
                                                        <div class="avatar avatar-md">
                                                            <img class="avatar-img rounded-circle"
                                                                src="assets/images/avatar/08.jpg" alt="avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p class="text-body small m-0">Congratulate <b>Joan Wallace</b> for
                                                            graduating from <b>Microverse university</b></p>
                                                        <u class="small">Say congrats</u>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="card-footer bg-transparent border-0 py-3 text-center position-relative">
                                        <a href=" " class="stretched-link">See all incoming activity</a>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li class="nav-item ms-3 dropdown">

                            <a class="avatar avatar-sm p-0" href=" " id="profileDropdown" role="button"
                                data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                            </a>

                            <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                                aria-labelledby="profileDropdown">

                                <li class="px-3 mb-3">
                                    <div class="d-flex align-items-center">

                                        <div class="avatar me-3">
                                            <img class="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg"
                                                alt="avatar" />
                                        </div>
                                        <div>
                                            <a class="h6" href=" ">Lori Ferguson</a>
                                            <p class="small m-0">example@gmail.com</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href=" ">
                                        <i class="bi bi-person fa-fw me-2"></i>
                                        Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/studiku">
                                        <i class="bi bi-book fa-fw me-2"></i>
                                        My Course
                                    </a>
                                </li>
                                <li><a class="dropdown-item bg-danger-soft-hover" href=" "><i
                                    class="bi bi-power fa-fw me-2"></i>Log Out</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                            </ul>

                        </li>
                    </ul>

                </div>
            </nav>

            {/* <hr class="my-0" />

            <nav class="navbar navbar-expand-xl nav-category">
                <div class="container px-0">


                    <button class="navbar-toggler m-auto w-100" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse2" aria-controls="navbarCollapse2" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="bi bi-grid-fill"></i> Category
                    </button>


                    <div class="navbar-collapse w-100 collapse" id="navbarCollapse2">

                        <ul class="navbar-nav navbar-nav-scroll mx-auto">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href=" " id="demoMenu" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Development</a>
                                <ul class="dropdown-menu" aria-labelledby="demoMenu">
                                    <li> <a class="dropdown-item" href=" ">Dropdown Item 1</a> </li>
                                    <li> <a class="dropdown-item" href=" ">Dropdown Item 2</a> </li>
                                </ul>
                            </li>


                            <li class="nav-item"><a class="nav-link" href=" ">My Course</a></li>


                            <li class="nav-item"><a class="nav-link" href=" ">Forum Diskusi</a></li>


                        </ul>
                    </div>

                </div>
            </nav> */}

        </header>
    )
}

export default Header3