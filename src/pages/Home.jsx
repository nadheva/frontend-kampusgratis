import React from "react";
import { Link } from "react-router-dom";

// css
import "../assets/admin/vendor/font-awesome/css/all.min.css";
import "../assets/admin/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/admin/vendor/tiny-slider/tiny-slider.css";
import "../assets/admin/vendor/glightbox/css/glightbox.css";
import "../assets/admin//css/style.css";

// js
// <!-- Bootstrap JS -->
// <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

// <!-- Vendors -->
// <script src="assets/vendor/tiny-slider/tiny-slider.js"></script>
// <script src="assets/vendor/glightbox/js/glightbox.js"></script>
// <script src="assets/vendor/purecounterjs/dist/purecounter_vanilla.js"></script>

// <!-- Template Functions -->
// <script src="assets/js/functions.js"></script>

const Home = () => {
  return (
    <>
      <header class="navbar-light navbar-sticky header-static">
        <nav class="navbar navbar-expand-xl">
          {/* logo */}
          <div class="container-fluid px-3 px-xl-5">
            <a class="navbar-brand" href=" ">
              <img
                class="light-mode-item navbar-brand-item"
                src="../assets/admin/images/logo.svg"
                alt="logo"
              />
              <img
                class="dark-mode-item navbar-brand-item"
                src="../assets/admin/images/logo-light.svg"
                alt="logo"
              />
            </a>

            <div class="navbar-collapse w-100 collapse" id="navbarCollapse">
              {/* dropdown */}
              <ul class="navbar-nav navbar-nav-scroll me-auto">
                <li class="nav-item dropdown dropdown-menu-shadow-stacked">
                  <a
                    class="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0"
                    href="#"
                    id="categoryMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bi bi-ui-radios-grid me-2"></i>
                    <span>Category</span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="categoryMenu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Health & fitness
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Teaching
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Social science
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Math & logic
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* <!-- Nav Main menu START --> */}
              <ul class="navbar-nav navbar-nav-scroll me-auto">
                {/* <!-- Nav item 2 Account --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="accounntMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accounts
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="accounntMenu">
  
                    <li>
                      <a
                        class="dropdown-item"
                        href="instructor-edit-profile.html"
                      >
                        <i class="fas fa-fw fa-edit me-1"></i>Edit Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="instructor-setting.html">
                        <i class="fas fa-fw fa-cog me-1"></i>Settings
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="instructor-delete-account.html"
                      >
                        <i class="fas fa-fw fa-trash-alt me-1"></i>Delete
                        Profile
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <!-- Nav item 3 Account --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="accounntMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accounts
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="accounntMenu">
                    {/* <!-- Dropdown submenu --> */}
                    <li class="dropdown-submenu dropend">
                      <a class="dropdown-item dropdown-toggle" href="#">
                        <i class="fas fa-user-tie fa-fw me-1"></i>Instructor
                      </a>

                      <ul
                        class="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            href="instructor-dashboard.html"
                          >
                            <i class="bi bi-grid-fill fa-fw me-1"></i>Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="instructor-manage-course.html"
                          >
                            <i class="bi bi-basket-fill fa-fw me-1"></i>Courses
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="instructor-create-course.html"
                          >
                            <i class="bi bi-file-earmark-plus-fill fa-fw me-1"></i>
                            Create Course
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="course-added.html">
                            <i class="bi bi-file-check-fill fa-fw me-1"></i>
                            Course Added
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="instructor-earning.html"
                          >
                            <i class="fas fa-chart-line fa-fw me-1"></i>Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="instructor-studentlist.html"
                          >
                            <i class="fas fa-user-graduate fa-fw me-1"></i>
                            Students
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        class="dropdown-item"
                        href="instructor-edit-profile.html"
                      >
                        <i class="fas fa-fw fa-edit me-1"></i>Edit Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="instructor-setting.html">
                        <i class="fas fa-fw fa-cog me-1"></i>Settings
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="instructor-delete-account.html"
                      >
                        <i class="fas fa-fw fa-trash-alt me-1"></i>Delete
                        Profile
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <!-- Nav item 5 link--> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#"
                    id="advanceMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-ellipsis-h"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://support.webestica.com/"
                        target="_blank"
                      >
                        <i class="text-warning fa-fw bi bi-life-preserver me-2"></i>
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="docs/index.html"
                        target="_blank"
                      >
                        <i class="text-danger fa-fw bi bi-card-text me-2"></i>
                        Documentation
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://eduport.webestica.com/rtl/"
                        target="_blank"
                      >
                        <i class="text-info fa-fw bi bi-toggle-off me-2"></i>RTL
                        demo
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://themes.getbootstrap.com/store/webestica/"
                        target="_blank"
                      >
                        <i class="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                        Buy Eduport!
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="docs/alerts.html"
                        target="_blank"
                      >
                        <i class="text-orange fa-fw bi bi-puzzle-fill me-2"></i>
                        Components
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* form */}
              <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <div class="nav-item w-100">
                  <form class="position-relative">
                    <input
                      class="form-control pe-5 bg-transparent"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit"
                    >
                      <i class="fas fa-search fs-6 "></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Home;
