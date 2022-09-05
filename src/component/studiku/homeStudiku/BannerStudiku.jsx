import React from 'react';

const BannerStudiku = () => {
  return (
<section className="bg-dark align-items-center d-flex banner-studiku">
	<div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="text-white text-center">Course List Classic</h1>
        <div className="d-flex">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Courses</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
	</div>
</section>
  );
}

export default BannerStudiku;