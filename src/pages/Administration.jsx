import React from 'react'

import Banner from '../components/Profile/Banner';
import Sidebar from '../components/Profile/Sidebar';

const Administration = () => {
  return (
    <>
      <Banner />
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-xl-9">
              <div class="card border bg-transparent rounded-3">
                <div class="card-header bg-transparent border-bottom">
                  <div class="row justify-content-between align-middle">
                    <div class="col-sm-6">
                      <h3 class="card-header-title mb-2 mb-sm-0">Administrasi Kamu</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body mt-2">
                  <div class="col-12">
                    <label class="form-label">Unggah Administrasi</label>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile01" />
                      <label class="input-group-text">.jpg, .jpeg, .png</label>
                    </div>
                    <label class="form-label">Unggah Administrasi</label>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile02" />
                      <label class="input-group-text">.WebM</label>
                    </div>
                    <label class="form-label">Unggah Administrasi</label>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" id="inputGroupFile03" />
                      <label class="input-group-text">.OGG</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Administration