import React from 'react';

const FormForgot = () => {
  return (
    <div class="col-12 col-lg-6 d-flex justify-content-center bg-white">
        <div class="row my-5">
            <div class="col-sm-10 col-xl-12 m-auto">
                <span class="mb-0 fs-1">🤔</span>
                <h1 class="fs-2">Lupa Password?</h1>
                <h5 class="fw-light mb-4">Untuk menerima kata sandi baru, masukkan alamat email Anda di bawah ini</h5>
                <form>
                    <div class="mb-4">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address *</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>
                            <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" id="exampleInputEmail1" />
                        </div>
                    </div>
                    <div class="align-items-center">
                        <div class="d-grid">
                            <button class="btn btn-kg mb-0 text-white" type="button">Reset password</button>
                        </div>
                    </div>	
                </form>
            </div>
        </div>
    </div>
  );
}

export default FormForgot;