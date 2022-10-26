import React from 'react'

const Form = () => {
  return (
    <form className="row g-3">
      <div className="col-12">
        <div className="row g-xl-0 align-items-center">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              Nama Lengkap <span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              id="nama_lengkap"
              name="nama_lengkap"
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row g-xl-0 align-items-center">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              Email <span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <input type="email" className="form-control" id="email" name="email" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row g-xl-0 align-items-center">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              Phone <span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <input type="text" className="form-control" id="phone" name="phone" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row g-xl-0 align-items-center">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              Perusahaan sebelumnya <span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              id="perusahaan_sebelumnya"
              name="perusahaan_sebelumnya"
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row g-xl-0 align-items-center">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              linkedin Url<span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              id="linkedin_url"
              name="linkedin_url"
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row g-xl-0">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              Informasi Tambahan <span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <textarea
              className="form-control"
              rows={3}
              placeholder=""
              name="informasi_tambahan"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row g-xl-0 align-items-center">
          <div className="col-lg-4">
            <h6 className="mb-lg-0">
              Resume/CV<span className="text-danger">*</span>
            </h6>
          </div>
          <div className="col-lg-8">
            <input type="file" className="form-control" id="resume" name="resume" />
          </div>
        </div>
      </div>
      <div className="col-12 text-sm-end">
        <button className="btn btn-primary mb-0">Konfirmasi lamaran</button>
      </div>
    </form>
  )
}

export default Form