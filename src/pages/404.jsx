import React, { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "404 | Page Not Found";
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="assets/images/element/error404-01.svg"
                className="h-200px h-md-400px mb-4"
                alt=""
              />

              <h1 className="display-1 text-danger mb-0">404</h1>

              <h2>Oopps!...Page not found</h2>

              <p className="mb-4">
                Either something went wrong or this page doesn't exist anymore.
              </p>

              <a href="/" className="btn btn-primary mb-0">
                Go Back
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
