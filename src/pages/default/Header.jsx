import React from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { reset } from '../../features/auth/authSlice';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    auth.signOut();

    dispatch(reset());

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/');
  }

  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <>
      <header className="navbar-light navbar-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand me-0" to='/'>
              <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
              <img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" />
            </Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                  <ul className="dropdown-menu" aria-labelledby="demoMenu">
                    <li> <a className="dropdown-item" href="index.html">Home Default</a></li>
                    <li> <a className="dropdown-item" href="index-2.html">Home Education</a></li>
                    <li> <a className="dropdown-item" href="index-3.html">Home Academy</a></li>
                    <li> <a className="dropdown-item" href="index-4.html">Home Course</a></li>
                    <li> <a className="dropdown-item" href="index-5.html">Home University</a></li>
                    <li> <a className="dropdown-item active" href="index-6.html">Home Kindergarten</a></li>
                    <li> <a className="dropdown-item" href="index-7.html">Home Landing</a></li>
                    <li> <a className="dropdown-item" href="index-8.html">Home Tutor</a></li>
                    <li> <a className="dropdown-item" href="index-9.html">Home School</a></li>
                    <li> <a className="dropdown-item" href="index-10.html">Home Abroad</a></li>
                    <li> <a className="dropdown-item" href="index-11.html">Home Workshop<span className="badge bg-success ms-2 smaller">New</span></a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Course</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li>
                        <li> <hr className="dropdown-divider" /></li>
                        <li> <a className="dropdown-item" href="course-grid.html">Course Grid Classic</a></li>
                        <li> <a className="dropdown-item" href="course-grid-2.html">Course Grid Minimal</a></li>
                        <li> <hr className="dropdown-divider" /></li>
                        <li> <a className="dropdown-item" href="course-list.html">Course List Classic</a></li>
                        <li> <a className="dropdown-item" href="course-list-2.html">Course List Minimal</a></li>
                        <li> <hr className="dropdown-divider" /></li>
                        <li> <a className="dropdown-item" href="course-detail.html">Course Detail Classic</a></li>
                        <li> <a className="dropdown-item" href="course-detail-min.html">Course Detail Minimal</a></li>
                        <li> <a className="dropdown-item" href="course-detail-adv.html">Course Detail Advance</a></li>
                        <li> <a className="dropdown-item" href="course-detail-module.html">Course Detail Module<span className="badge bg-success ms-2 smaller">New</span></a></li>
                        <li> <a className="dropdown-item" href="course-video-player.html">Course Full Screen Video</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">About</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="about.html">About Us</a></li>
                        <li> <a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                        <li> <a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                        <li> <a className="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
                        <li> <a className="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
                        <li> <a className="dropdown-item" href="pricing.html">Pricing</a></li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Hero Banner</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="docs/snippet-hero-12.html">Hero Form<span className="badge bg-success ms-2 smaller">New</span></a></li>
                        <li> <a className="dropdown-item" href="docs/snippet-hero-13.html">Hero Vector<span className="badge bg-success ms-2 smaller">New</span></a></li>
                        <li> <p className="dropdown-item mb-0">Coming soon....</p></li>
                      </ul>
                    </li>

                    <li> <a className="dropdown-item" href="instructor-list.html">Instructor List</a></li>
                    <li> <a className="dropdown-item" href="instructor-single.html">Instructor Single</a></li>
                    <li> <a className="dropdown-item" href="become-instructor.html">Become an Instructor</a></li>
                    <li> <a className="dropdown-item" href="abroad-single.html">Abroad Single</a></li>
                    <li> <a className="dropdown-item" href="workshop-detail.html">Workshop Detail<span className="badge bg-success ms-2 smaller">New</span></a></li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Shop</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="shop.html">Shop grid</a></li>
                        <li> <a className="dropdown-item" href="shop-product-detail.html">Product detail</a></li>
                        <li> <a className="dropdown-item" href="cart.html">Cart</a></li>
                        <li> <a className="dropdown-item" href="checkout.html">Checkout</a></li>
                        <li> <a className="dropdown-item" href="empty-cart.html">Empty Cart</a></li>
                        <li> <a className="dropdown-item" href="wishlist.html">Wishlist</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Help</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="help-center.html">Help Center</a></li>
                        <li> <a className="dropdown-item" href="help-center-detail.html">Help Center Single</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="sign-in.html">Sign In</a></li>
                        <li> <a className="dropdown-item" href="sign-up.html">Sign Up</a></li>
                        <li> <a className="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Form</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="request-demo.html">Request a demo</a></li>
                        <li> <a className="dropdown-item" href="book-class.html">Book a Class</a></li>
                        <li> <a className="dropdown-item" href="request-access.html">Free Access</a></li>
                        <li> <a className="dropdown-item" href="university-admission-form.html">Admission Form</a></li>
                      </ul>
                    </li>

                    <li> <a className="dropdown-item" href="faq.html">FAQs</a></li>
                    <li> <a className="dropdown-item" href="error-404.html">Error 404</a></li>
                    <li> <a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link" href="#">Course</a></li>
                <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact</a></li>
              </ul>
            </div>
            {user ? (
              <div className="dropdown ms-1 ms-lg-0">
                <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside"
                  data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                </a>
                <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img className="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg" alt="avatar" />
                      </div>
                      <div>
                        <a className="h6" href="#">{user.full_name}</a>
                        <p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      <i className="bi bi-person fa-fw me-2"></i>
                      Edit Profile
                    </NavLink>
                  </li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                  <li>
                    <button className="dropdown-item bg-danger-soft-hover" onClick={onLogout}>
                      <i className="bi bi-power fa-fw me-2"></i>
                      Sign Out
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="modeswitch-wrap" id="darkModeSwitch">
                      <div className="modeswitch-item">
                        <div className="modeswitch-icon"></div>
                      </div>
                      <span>Dark mode</span>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="navbar-nav ms-2">
                <Link className="btn btn-sm btn-dark mb-0" to='/login'>
                  <i className="bi bi-power me-2"></i>Masuk
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
  // return (
  //   <>
  //     <header className="navbar-light navbar-sticky header-static">
  //       <nav className="navbar navbar-expand-xl">
  //         <div className="container-fluid px-3 px-xl-5">
  //           <a className="navbar-brand" href="index.html">
  //             <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
  //             <img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" />
  //           </a>
  //           <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
  //             aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  //             <span className="navbar-toggler-animation">
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //             </span>
  //           </button>
  //           <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
  //             <ul className="navbar-nav navbar-nav-scroll mx-auto">
  //               <li className="nav-item dropdown">
  //                 <a className="nav-link dropdown-toggle active" href="#" id="demoMenu" data-bs-toggle="dropdown"
  //                   aria-haspopup="true" aria-expanded="false">Demos</a>
  //                 <ul className="dropdown-menu" aria-labelledby="demoMenu">
  //                   <li> <a className="dropdown-item active" href="index.html">Home Default</a></li>
  //                   <li> <a className="dropdown-item" href="index-2.html">Home Education</a></li>
  //                   <li> <a className="dropdown-item" href="index-3.html">Home Academy</a></li>
  //                   <li> <a className="dropdown-item" href="index-4.html">Home Course</a></li>
  //                   <li> <a className="dropdown-item" href="index-5.html">Home University</a></li>
  //                   <li> <a className="dropdown-item" href="index-6.html">Home Kindergarten</a></li>
  //                   <li> <a className="dropdown-item" href="index-7.html">Home Landing</a></li>
  //                   <li> <a className="dropdown-item" href="index-8.html">Home Tutor</a></li>
  //                   <li>
  //                     <hr className="dropdown-divider" />
  //                   </li>
  //                   <li> <a className="dropdown-item" href="request-demo.html">Request a demo</a></li>
  //                   <li> <a className="dropdown-item" href="book-class.html">Book a Class</a></li>
  //                   <li> <a className="dropdown-item" href="request-access.html">Free Access</a></li>
  //                   <li> <a className="dropdown-item" href="university-admission-form.html">Admission Form</a></li>

  //                   <li>
  //                     <hr className="dropdown-divider" />
  //                   </li>
  //                   <li className="dropdown-submenu dropend">
  //                     <a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
  //                     <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
  //                       <li className="dropdown-submenu dropend">
  //                         <a className="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
  //                         <ul className="dropdown-menu" data-bs-popper="none">
  //                           <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
  //                           <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
  //                         </ul>
  //                       </li>
  //                       <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
  //                       <li className="dropdown-submenu dropstart">
  //                         <a className="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
  //                         <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
  //                           <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
  //                           <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
  //                         </ul>
  //                       </li>
  //                       <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
  //                     </ul>
  //                   </li>
  //                 </ul>
  //               </li>
  //               <li className="nav-item dropdown">
  //                 <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true"
  //                   aria-expanded="false">Pages</a>
  //                 <ul className="dropdown-menu" aria-labelledby="pagesMenu">
  //                   <li className="dropdown-submenu dropend">
  //                     <a className="dropdown-item dropdown-toggle" href="#">Course</a>
  //                     <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
  //                       <li> <a className="dropdown-item" href="course-grid.html">Course Grid Classic</a></li>
  //                       <li> <a className="dropdown-item" href="course-grid-2.html">Course Grid Minimal</a></li>
  //                       <li>
  //                         <hr className="dropdown-divider" />
  //                       </li>
  //                       <li> <a className="dropdown-item" href="course-list.html">Course List Classic</a></li>
  //                       <li> <a className="dropdown-item" href="course-list-2.html">Course List Minimal</a></li>
  //                       <li>
  //                         <hr className="dropdown-divider" />
  //                       </li>
  //                       <li> <a className="dropdown-item" href="course-detail.html">Course Detail Classic</a></li>
  //                       <li> <a className="dropdown-item" href="course-detail-min.html">Course Detail Minimal</a></li>
  //                       <li> <a className="dropdown-item" href="course-detail-adv.html">Course Detail Advance</a></li>
  //                       <li> <a className="dropdown-item" href="course-video-player.html">Course Full Screen Video</a></li>
  //                     </ul>
  //                   </li>
  //                   <li className="dropdown-submenu dropend">
  //                     <a className="dropdown-item dropdown-toggle" href="#">About</a>
  //                     <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
  //                       <li> <a className="dropdown-item" href="about.html">About Us</a></li>
  //                       <li> <a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
  //                       <li> <a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
  //                       <li> <a className="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
  //                       <li> <a className="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
  //                       <li> <a className="dropdown-item" href="pricing.html">Pricing</a></li>
  //                     </ul>
  //                   </li>

  //                   <li> <a className="dropdown-item" href="instructor-list.html">Instructor List</a></li>
  //                   <li> <a className="dropdown-item" href="instructor-single.html">Instructor Single</a></li>
  //                   <li> <a className="dropdown-item" href="become-instructor.html">Become an Instructor</a></li>
  //                   <li className="dropdown-submenu dropend">
  //                     <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
  //                     <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
  //                       <li> <a className="dropdown-item" href="sign-in.html">Sign In</a></li>
  //                       <li> <a className="dropdown-item" href="sign-up.html">Sign Up</a></li>
  //                       <li> <a className="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
  //                     </ul>
  //                   </li>
  //                   <li> <a className="dropdown-item" href="faq.html">FAQs</a></li>
  //                   <li> <a className="dropdown-item" href="error-404.html">Error 404</a></li>
  //                   <li> <a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
  //                   <li> <a className="dropdown-item" href="cart.html">Cart</a></li>
  //                   <li> <a className="dropdown-item" href="checkout.html">Checkout</a></li>
  //                   <li> <a className="dropdown-item" href="empty-cart.html">Empty Cart</a></li>
  //                   <li> <a className="dropdown-item" href="wishlist.html">Wishlist</a></li>
  //                 </ul>
  //               </li>
  //               <li className="nav-item dropdown">
  //                 <a className="nav-link dropdown-toggle" href="#" id="accounntMenu" data-bs-toggle="dropdown"
  //                   aria-haspopup="true" aria-expanded="false">Accounts</a>
  //                 <ul className="dropdown-menu" aria-labelledby="accounntMenu">
  //                   <li className="dropdown-submenu dropend">
  //                     <a className="dropdown-item dropdown-toggle" href="#"><i
  //                       className="fas fa-user-tie fa-fw me-1"></i>Instructor</a>
  //                     <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
  //                       <li> <a className="dropdown-item" href="instructor-dashboard.html"><i
  //                         className="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-manage-course.html"><i
  //                         className="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-create-course.html"><i
  //                         className="bi bi-file-earmark-plus-fill fa-fw me-1"></i>Create Course</a> </li>
  //                       <li> <a className="dropdown-item" href="course-added.html"><i
  //                         className="bi bi-file-check-fill fa-fw me-1"></i>Course Added</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-earning.html"><i
  //                         className="fas fa-chart-line fa-fw me-1"></i>Earnings</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-studentlist.html"><i
  //                         className="fas fa-user-graduate fa-fw me-1"></i>Students</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-order.html"><i
  //                         className="bi bi-cart-check-fill fa-fw me-1"></i>Orders</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-review.html"><i
  //                         className="bi bi-star-fill fa-fw me-1"></i>Reviews</a> </li>
  //                       <li> <a className="dropdown-item" href="instructor-payout.html"><i
  //                         className="fas fa-wallet fa-fw me-1"></i>Payout</a> </li>
  //                     </ul>
  //                   </li>
  //                   <li className="dropdown-submenu dropend">
  //                     <a className="dropdown-item dropdown-toggle" href="#"><i
  //                       className="fas fa-user-graduate fa-fw me-1"></i>Student</a>
  //                     <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
  //                       <li> <a className="dropdown-item" href="student-dashboard.html"><i
  //                         className="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
  //                       <li> <a className="dropdown-item" href="student-subscription.html"><i
  //                         className="bi bi-card-checklist fa-fw me-1"></i>My Subscriptions</a> </li>
  //                       <li> <a className="dropdown-item" href="student-course-list.html"><i
  //                         className="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
  //                       <li> <a className="dropdown-item" href="student-payment-info.html"><i
  //                         className="bi bi-credit-card-2-front-fill fa-fw me-1"></i>Payment Info</a> </li>
  //                       <li> <a className="dropdown-item" href="student-bookmark.html"><i
  //                         className="fas bi-cart-check-fill fa-fw me-1"></i>Wishlist</a> </li>
  //                     </ul>
  //                   </li>
  //                   <li>
  //                     <a className="dropdown-item" href="#"><i className="fas fa-user-cog fa-fw me-1"></i>Admin (Coming Soon)</a>
  //                   </li>
  //                   <li>
  //                     <hr className="dropdown-divider" />
  //                   </li>
  //                   <li>
  //                     <Link className="dropdown-item" to="/profile">
  //                       <i className="fas fa-fw fa-edit me-1"></i>Edit Profile
  //                     </Link>
  //                   </li>
  //                   <li> <a className="dropdown-item" href="instructor-setting.html"><i
  //                     className="fas fa-fw fa-cog me-1"></i>Settings</a> </li>
  //                   <li> <a className="dropdown-item" href="instructor-delete-account.html"><i
  //                     className="fas fa-fw fa-trash-alt me-1"></i>Delete Profile</a> </li>
  //                 </ul>
  //               </li>
  //               <li className="nav-item dropdown dropdown-fullwidth">
  //                 <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
  //                   aria-expanded="false">Megamenu</a>
  //                 <div className="dropdown-menu dropdown-menu-end pb-0" data-bs-popper="none">
  //                   <div className="row p-4 g-4">
  //                     <div className="col-xl-6 col-xxl-3">
  //                       <h6 className="mb-0">Get started</h6>
  //                       <hr />
  //                       <ul className="list-unstyled">
  //                         <li> <a className="dropdown-item" href="#">Market research</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Advertising</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Social media marketing</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Public relations</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Advertising</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Decision science</a> </li>
  //                         <li> <a className="dropdown-item" href="#">SEO</a> </li>
  //                         <li> <a className="dropdown-item" href="#">Business marketing</a> </li>
  //                       </ul>
  //                     </div>
  //                     <div className="col-xl-6 col-xxl-3">
  //                       <h6 className="mb-0">Degree</h6>
  //                       <hr />
  //                       <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
  //                         <a className="stretched-link h6 mb-0" href="#">Contact management</a>
  //                         <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt
  //                           miles of child.</p>
  //                       </div>
  //                       <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
  //                         <a className="stretched-link h6 mb-0" href="#">Sales pipeline</a>
  //                         <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt
  //                           miles of child.</p>
  //                       </div>
  //                       <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
  //                         <a className="stretched-link h6 mb-0" href="#">Security & Permission</a>
  //                         <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt
  //                           miles of child.</p>
  //                       </div>
  //                     </div>
  //                     <div className="col-xl-6 col-xxl-3">
  //                       <h6 className="mb-0">Certificate</h6>
  //                       <hr />
  //                       <div className="d-flex mb-4 position-relative">
  //                         <h2 className="mb-0"><i className="fab fa-fw fa-google text-google-icon"></i></h2>
  //                         <div className="ms-2">
  //                           <a className="stretched-link h6 mb-0" href="#">Google SEO certificate</a>
  //                           <p className="mb-0 small">No prerequisites</p>
  //                         </div>
  //                       </div>
  //                       <div className="d-flex mb-4 position-relative">
  //                         <h2 className="mb-0"><i className="fab fa-fw fa-linkedin-in text-linkedin"></i></h2>
  //                         <div className="ms-2">
  //                           <a className="stretched-link h6 mb-0" href="#">Business Development Executive(BDE)</a>
  //                           <p className="mb-0 small">No prerequisites</p>
  //                         </div>
  //                       </div>
  //                       <div className="d-flex mb-4 position-relative">
  //                         <h2 className="mb-0"><i className="fab fa-fw fa-facebook text-facebook"></i></h2>
  //                         <div className="ms-2">
  //                           <a className="stretched-link h6 mb-0" href="#">Facebook social media marketing</a>
  //                           <p className="mb-0 small">Expert advice</p>
  //                         </div>
  //                       </div>
  //                       <div className="d-flex mb-4 position-relative">
  //                         <h2 className="mb-0"><i className="fas fa-fw fa-basketball-ball text-dribbble"></i></h2>
  //                         <div className="ms-2">
  //                           <a className="stretched-link h6 mb-0" href="#">Creative graphics design</a>
  //                           <p className="mb-0 small">No prerequisites</p>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="col-xl-6 col-xxl-3">
  //                       <h6 className="mb-0">Download Eduport</h6>
  //                       <hr />
  //                       <img src="assets/images/element/14.svg" alt="" />
  //                       <div className="row g-2 justify-content-center mt-3">
  //                         <div className="col-6 col-sm-4 col-xxl-6">
  //                           <a href="#">
  //                             <img src="assets/images/client/google-play.svg" className="btn-transition"
  //                               alt="google-store" />
  //                           </a>
  //                         </div>
  //                         <div className="col-6 col-sm-4 col-xxl-6">
  //                           <a href="#">
  //                             <img src="assets/images/client/app-store.svg" className="btn-transition"
  //                               alt="app-store" />
  //                           </a>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="col-12">
  //                       <div className="alert alert-success alert-dismissible fade show mt-2 mb-0 rounded-3" role="alert">
  //                         <div className="avatar avatar-xs me-2">
  //                           <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
  //                         </div>
  //                         The personality development class starts at 2:00 pm, click to <a href="#" className="alert-link">Join
  //                           Now</a>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </li>
  //               <li className="nav-item dropdown">
  //                 <a className="nav-link" href="#" id="advanceMenu" data-bs-toggle="dropdown" aria-haspopup="true"
  //                   aria-expanded="false">
  //                   <i className="fas fa-ellipsis-h"></i>
  //                 </a>
  //                 <ul className="dropdown-menu dropdown-menu-end min-w-auto" data-bs-popper="none">
  //                   <li>
  //                     <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
  //                       <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a className="dropdown-item" href="docs/index.html" target="_blank">
  //                       <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <hr className="dropdown-divider" />
  //                   </li>
  //                   <li>
  //                     <a className="dropdown-item" href="https://eduport.webestica.com/rtl/" target="_blank">
  //                       <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
  //                       <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy Eduport!
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <hr className="dropdown-divider" />
  //                   </li>
  //                   <li>
  //                     <a className="dropdown-item" href="docs/alerts.html" target="_blank">
  //                       <i className="text-orange fa-fw bi bi-puzzle-fill me-2"></i>Components
  //                     </a>
  //                   </li>
  //                 </ul>
  //               </li>
  //             </ul>
  //             <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
  //               <div className="nav-item w-100">
  //                 <form className="position-relative">
  //                   <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
  //                   <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
  //                     type="submit"><i className="fas fa-search fs-6 "></i></button>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //           {user ? (
  //             <div className="dropdown ms-1 ms-lg-0">
  //               <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside"
  //                 data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
  //                 <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
  //               </a>
  //               <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
  //                 <li className="px-3">
  //                   <div className="d-flex align-items-center">
  //                     <div className="avatar me-3">
  //                       <img className="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg" alt="avatar" />
  //                     </div>
  //                     <div>
  //                       <a className="h6" href="#">Lori Ferguson</a>
  //                       <p className="small m-0">example@gmail.com</p>
  //                     </div>
  //                   </div>
  //                   <hr />
  //                 </li>
  //                 <li>
  //                   <Link className="dropdown-item" to="profile"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</Link>
  //                 </li>
  //                 <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
  //                 <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
  //                 <li>
  //                   <button className="dropdown-item bg-danger-soft-hover" onClick={onLogout}>
  //                     <i className="bi bi-power fa-fw me-2"></i>
  //                     Sign Out
  //                   </button>
  //                 </li>
  //                 <li>
  //                   <hr className="dropdown-divider" />
  //                 </li>
  //                 <li>
  //                   <div className="modeswitch-wrap" id="darkModeSwitch">
  //                     <div className="modeswitch-item">
  //                       <div className="modeswitch-icon"></div>
  //                     </div>
  //                     <span>Dark mode</span>
  //                   </div>
  //                 </li>
  //               </ul>
  //             </div>
  //           ) : (
  //             <button className="btn btn-sm btn-dark mb-0"><i className="bi bi-power me-2"></i>Sign In</button>
  //           )}
  //         </div>
  //       </nav>
  //     </header>
  //   </>
  // )
}

export default Header;