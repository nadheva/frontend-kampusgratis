import { useState } from "react";
import { Link } from "react-router-dom";
// import {
//   getAuth,
//   createUserWithEmailAndPassword
// } from 'firebase/auth';
// import firebase from '../../config/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FormRegist = () => {
  // const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    full_name: "",
    hp: "",
    email: "",
    password: "",
  });
  const { email, password } = formData;

  // const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   var user = userCredential.user;
    //   console.log(user)
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, errorMessage)
    // });

    // try {
    //   const auth = getAuth()

    //   // const userCredential = await createUserWithEmailAndPassword(
    //   //   auth,
    //   //   email,
    //   //   password
    //   // )

    //   // const user = userCredential.user

    //   // updateProfile(auth.currentUser, {
    //   //   displayName: name,
    //   // })

    //   // // const formDataCopy = { ...formData }
    //   // // delete formDataCopy.password
    //   // // formDataCopy.timestamp = serverTimestamp()

    //   // await setDoc(doc(db, 'users', user.uid), formDataCopy)

    //   // navigate('/')
    // } catch (error) {
    //   // toast.error('Something went wrong with registration')
    // }
  };

  return (
    <div className="col-12 col-lg-6 m-auto bg-white">
      <div className="row my-5">
        <div className="col-sm-10 col-xl-8 m-auto">
          <h2>Registrasi Akun</h2>
          <p className="lead mb-4">
            Selamat Datang, Silahkan Registrasi Akunmu!
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Nama *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="Nama Lengkap"
                  id="full_name"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nomer HP *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="Nomer HP"
                  id="hp"
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </div>
            </div>
            {/* <div className="mb-4">
              <label htmlFor="inputPassword6" className="form-label">
                Confirm Password *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="*********"
                  id="inputPassword6"
                  onChange={onChange}
                />
              </div>
            </div> */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkbox-1"
                />
                <label className="form-check-label" htmlFor="checkbox-1">
                  Dengan Mendaftar, Anda Menyetujui
                  <a href=" "> Persyaratan Layanan</a>
                </label>
              </div>
            </div>
            <div className="align-items-center mt-0">
              <div className="d-grid">
                <button
                  className="btn btn-kg mb-0 text-white"
                  type="button"
                  onClick={onSubmit}
                >
                  Sign Up
                </button>
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
                <i className="fab fa-fw fa-google me-2"></i>Signup
                with Google
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span>Sudah Punya Akun?</span>
            <Link to={"login"} className="">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegist;
