import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return <>
    <main>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src="assets/images/element/error404-01.svg" className="h-200px h-md-400px mb-4" alt="" />
              <h1 className="display-1 text-danger mb-0">Ooopss</h1>
              <h2>Sepertinya ada yang salah.</h2>
              <p className="mb-4">
                Kita tidak bisa menampilkan halaman yang kamu cari.
              </p>
              <Link to="/" className="btn btn-primary mb-0">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default PageNotFound;