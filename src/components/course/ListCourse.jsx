import React from "react";

const ListCourse = () => {
  return (
    <div className="card border bg-transparent rounded-3">
      <div className="card-header bg-transparent border-bottom">
        <div class="col d-md-flex justify-content-between align-items-center mt-2 mb-2">
          <div>
		  <h3 className="mb-0">My Courses List</h3>
          </div>
          <div class="d-flex align-items-center mt-2 mt-md-0">
            <a
              href="instructor-create-course.html"
              class="btn btn-success mb-0"
            >
              Create a course
            </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row g-3 align-items-center justify-content-between mb-4">
          <div className="col-md-8">
            <form className="rounded position-relative">
              <input
                className="form-control pe-5 bg-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit"
              >
                <i className="fas fa-search fs-6 "></i>
              </button>
            </form>
          </div>
          <div className="col-md-3">
            <form>
              <select
                className="form-select js-choice border-0 z-index-9 bg-transparent"
                aria-label=".form-select-sm"
              >
                <option value="">Sort by</option>
                <option>Free</option>
                <option>Newest</option>
                <option>Most popular</option>
                <option>Most Viewed</option>
              </select>
            </form>
          </div>
        </div>
        <div className="table-responsive border-0">
          <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col" className="border-0 rounded-start">
                  Course Title
                </th>
                <th scope="col" className="border-0">
                  Enrolled
                </th>
                <th scope="col" className="border-0">
                  Status
                </th>
                <th scope="col" className="border-0">
                  Price
                </th>
                <th scope="col" className="border-0 rounded-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/08.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Building Scalable APIs with GraphQL</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>18
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          6 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">125</td>
                <td>
                  <div className="badge bg-success bg-opacity-10 text-success">
                    Live
                  </div>
                </td>
                <td>$250</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/10.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Bootstrap 5 From Scratch</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>0
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          0 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">145</td>
                <td>
                  <div className="badge bg-secondary bg-opacity-10 text-secondary">
                    Disable
                  </div>
                </td>
                <td>$350</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/06.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Angular – The Complete Guider</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>37
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          20 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">145</td>
                <td>
                  <div className="badge bg-success bg-opacity-10 text-success">
                    Live
                  </div>
                </td>
                <td>$652</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/02.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Graphic Design Masterclass</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>58
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          0 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">0</td>
                <td>
                  <div className="badge bg-info bg-opacity-10 text-info">
                    Applied
                  </div>
                </td>
                <td>$245</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/04.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Learn Invision</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>16
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          0 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">0</td>
                <td>
                  <div className="badge bg-danger bg-opacity-10 text-danger">
                    Rejected
                  </div>
                </td>
                <td>$365</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/03.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Create a Design System in Figma</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>25
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          0 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">0</td>
                <td>
                  <div className="badge bg-info bg-opacity-10 text-info">
                    Applied
                  </div>
                </td>
                <td>$135</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/07.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Deep Learning with React-Native</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>18
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          10 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">186</td>
                <td>
                  <div className="badge bg-success bg-opacity-10 text-success">
                    Live
                  </div>
                </td>
                <td>$256</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/11.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    <div className="mb-0 ms-2">
                      <h6>
                        <a href=" ">Build Responsive Websites with HTML</a>
                      </h6>
                      <div className="d-sm-flex">
                        <p className="h6 fw-light mb-0 small me-3">
                          <i className="fas fa-table text-orange me-2"></i>42
                          lectures
                        </p>
                        <p className="h6 fw-light mb-0 small">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          25 Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm-start">345</td>
                <td>
                  <div className="badge bg-success bg-opacity-10 text-success">
                    Live
                  </div>
                </td>
                <td>$222</td>
                <td>
                  <a
                    href=" "
                    className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                  >
                    <i className="far fa-fw fa-edit"></i>
                  </a>
                  <button className="btn btn-sm btn-danger-soft btn-round mb-0">
                    <i className="fas fa-fw fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
          <p className="mb-0 text-center text-sm-start">
            Showing 1 to 8 of 20 entries
          </p>
          <nav
            className="d-flex justify-content-center mb-0"
            aria-label="navigation"
          >
            <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
              <li className="page-item mb-0">
                <a className="page-link" href=" " tabindex="-1">
                  <i className="fas fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href=" ">
                  1
                </a>
              </li>
              <li className="page-item mb-0 active">
                <a className="page-link" href=" ">
                  2
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href=" ">
                  3
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href=" ">
                  <i className="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
