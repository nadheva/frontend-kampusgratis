import React from 'react'

const Footer1 = () => {
  return (
    <footer className="pt-5 footer-kg1">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <h5 className="mb-2 mb-md-4">About Us</h5>
            <p className="my-3">KampusGratis merupakan sistem
              manajemen E-learning yang mencantumkan laporan peningkatan
              atau progres pembelajaran mahasiswa
              layaknya seperti perguruan tinggi.
            </p>
            <p className="my-3">
              Pengembangan platform pembelajaran
              ini merupakan salah satu inisiasi dari
              pendiri PT. Menara Indonesia atau M-Knows Consulting, yang ingin
              memberikan solusi pendidikan tinggi
              yang gratis, berkualitas, bisa diakses
              siapapun khususnya kaum marginal,
              dan selalu update layaknya platform Wikipedia.</p>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-2 mb-md-4">Kontak Kami</h5>
            <p className="my-3">Jl. Radio IV No.8 B, RT.4/RW.4, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12130</p>
            <p className="my-3">
              WhatsApp: 0812-1046 8281
            </p>
          </div>
          <div className="col-lg-3">
            <h5 className="mb-2 mb-md-4">More</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link" href=" ">Terms and Conditions</a></li>
              <li className="nav-item"><a className="nav-link" href=" ">Privacy policy</a></li>
              <li className="nav-item"><a className="nav-link" href=" ">Press Kit</a></li>
              <li className="nav-item"><a className="nav-link" href=" ">Help</a></li>
            </ul>

            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-facebook"
                href=" "><i className="fab fa-fw fa-facebook-f"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-instagram"
                href=" "><i className="fab fa-fw fa-instagram"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-twitter"
                href=" "><i className="fab fa-fw fa-twitter"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-linkedin"
                href=" "><i className="fab fa-fw fa-linkedin-in"></i></a> </li>
            </ul>
          </div>
        </div>
        <hr className="mt-4 mb-0" />
        <div className="py-3">
          <div className="container px-0">
            <div className="text-center align-items-center py-3 text-center text-md-left">
              <div className="text-primary-hover"> © 2022 Kampus Gratis. All Rights Reserved PT. MENARA INDONESIA
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer1