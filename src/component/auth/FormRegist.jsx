import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addUser } from "../../redux/actions/AuthAction";

const FormRegist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const { addUserLoading } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // add kontak
    dispatch(
      addUser({
        email: email,
        password: password,
        full_name: full_name,
        phone: phone,
        gender: gender,
      })
    );
  };

  return (
    <div className="col-12 col-lg-6 m-auto bg-white">
      <div className="row my-5">
        <div className="col-sm-10 col-xl-8 m-auto">
          <h2>Registrasi Akun</h2>
          <p className="lead mb-4">
            Selamat Datang, Silahkan Registrasi Akunmu!
          </p>

          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Nama *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="Nama Lengkap"
                  id="fullName"
                  name="fullName"
                  value={full_name}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Jenis Kelamin *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-people-fill"></i>
                </span>
                <select
                  className="form-select border-0 bg-light rounded-end ps-1"
                  aria-label="Default select example"
                  onChange={(event) => {
                    const selectedGender = event.target.value;
                    setGender(selectedGender);
                  }}
                >
                  <option value="0">Tidak Ingin Memberitahu</option>
                  <option value="1">Laki - Laki</option>
                  <option value="2">Perempuan</option>
                  <option value="9">Lainnya</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nomer Handphone *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="Masukkan Nomer Handphone"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="E-mail"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="inputPassword5" className="form-label">
                Password *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="*********"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="align-items-center mt-0">
              <div className="d-grid">
                {addUserLoading ? (
                  <button className="btn btn-kg mb-0 text-white" type="submit">
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button className="btn btn-kg mb-0 text-white" type="submit">
                    Sign Up
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="row">
            <div className="position-relative my-4">
              <hr />
              <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                Or
              </p>
            </div>
            <div className="col-xxl-12 d-grid">
              <a href=" " className="btn btn-outline-secondary mb-2 mb-xxl-0">
                <img
                  src="assets/images/googleicon.png"
                  alt=""
                  className="googleicon"
                />
                Daftar Dengan Akun Google
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span>Sudah Punya Akun?</span>
            <Link to="/login" className="">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegist;
