import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import Logo from '../../assets/images/element/error404-01.svg';

const PageNotFound = () => {
  const location = useNavigate();

  console.log("location");
  return <>
    <Header />
    <main>
      <section className="pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src={Logo} className="h-200px h-md-400px mb-4" alt="" />
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
    <Footer />
  </>
}

export default PageNotFound;