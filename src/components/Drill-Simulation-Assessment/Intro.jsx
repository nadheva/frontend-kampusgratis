import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="bg-light p-4 text-center rounded-3">
      <section className="py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="m-0">Latihan Simulasi dan Penilaian</h1>
            <div className="d-flex justify-content-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/kategori">Fitur</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Simulasi Drill Assessment
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro;