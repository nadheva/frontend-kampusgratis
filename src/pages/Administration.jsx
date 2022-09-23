import React from 'react'
import { useState } from 'react';

import Banner from '../components/Account/Banner';
import Sidebar from '../components/Account/Sidebar';

const Administration = () => {
  const [administrationData, setAdministrationData] = useState({
    full_name: "", nin: "", address: "", phone: "",
    birth_place: "", birth_date: "", domicile: "", financier: "",
    father_name: "", mother_name: "", father_occupation: "", mother_occupation: ""
  });

  const {
    full_name, nin, address, phone,
    birth_place, birth_date, domicile, financier,
    father_name, mother_name, father_occupation, mother_occupation
  } = administrationData;

  const [administrationDataFile, setAdministrationDataFile] = useState({
    photo: null, nin_card: null, family_card: null,
    certificate: null, transcript: null,
    recommendation_letter: null, integrity_pact: null
  });

  const onFormChange = (e) => {
    setAdministrationData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <>
      <Banner />
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-xl-9">
              <div className="card border bg-transparent rounded-3">
                <div className="card-header bg-transparent border-bottom">
                  <div className="row justify-content-between align-middle">
                    <div className="col-sm-6">
                      <h3 className="card-header-title mb-2 mb-sm-0">Administrasi</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body mt-2">
                  <div class="accordion accordion-icon accordion-bg-light" id="accordionExample">
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="headingOne">
                        <button class="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <span class="text-secondary fw-bold me-3">01</span>
                          <span class="fw-bold">Biodata Kamu</span>
                          {/* &nbsp;<span class="badge text-bg-danger">5 data belum terverifikasi</span> */}
                          {/* &nbsp;<span class="badge text-bg-info">3 data sudah terverifikasi</span> */}
                        </button>
                      </h6>
                      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                        <div class="accordion-body mt-3">
                          <div className="row">
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> NIK</label>
                              <input type="text" className="form-control mb-3" name="nin" value={nin} placeholder="NIK" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Nama Lengkap</label>
                              <input type="text" className="form-control mb-3" name="full_name" value={full_name} placeholder="Nama Lengkap" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Program Studi</label>
                              <input type="text" className="form-control mb-3" name="nin" value={nin} placeholder="Program Studi" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Semester</label>
                              <input type="text" className="form-control mb-3" name="nin" value={nin} placeholder="Semester" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Alamat Lengkap</label>
                              <input type="text" className="form-control mb-3" name="address" value={address} placeholder="Alamat Lengkap" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Alamat Domisili</label>
                              <input type="text" className="form-control mb-3" name="address" value={address} placeholder="Alamat Domisili" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Tempat Lahir</label>
                              <input type="text" className="form-control mb-3" name="birth_place" value={birth_place} placeholder="Tempat Lahir" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Tanggal Lahir</label>
                              <input type="text" className="form-control mb-3" name="birth_date" value={birth_date} placeholder="Tanggal Lahir" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Jenis Kelamin</label>
                              <input type="text" className="form-control mb-3" name="domicile" value={domicile} placeholder="Jenis Kelamin" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Nomor Handphone</label>
                              <input type="text" className="form-control mb-3" name="phone" value={phone} placeholder="Nomor Handphone" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Universitas Asal</label>
                              <input type="text" className="form-control mb-3" name="phone" value={phone} placeholder="Universitas Asal" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> NIM atau NPM</label>
                              <input type="text" className="form-control mb-3" name="domicile" value={domicile} placeholder="NIM atau NPM" onChange={onFormChange} />
                            </div>
                          </div>
                          <div class="d-sm-flex justify-content-end mt-2">
                            <button type="button" class="btn btn-primary mb-0">Simpan Biodata</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="headingTwo">
                        <button class="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <span class="text-secondary fw-bold me-3">02</span>
                          <span class="fw-bold">Data Keluarga Kamu</span>
                          {/* &nbsp;<span class="badge text-bg-danger">5 data belum terverifikasi</span> */}
                          {/* &nbsp;<span class="badge text-bg-info">3 data sudah terverifikasi</span> */}
                        </button>
                      </h6>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                        <div class="accordion-body mt-3">
                          <div className="row">
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Nama Ayah</label>
                              <input type="text" className="form-control mb-3" name="father_name" value={father_name} placeholder="Nama Ayah" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Pekerjaan Ayah</label>
                              <input type="text" className="form-control mb-3" name="father_occupation" value={father_occupation} placeholder="Pekerjaan Ayah" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Penghasilan Ayah Perbulan</label>
                              <input type="text" className="form-control mb-3" name="father_occupation" value={father_occupation} placeholder="Pekerjaan Ayah" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Nama Ibu</label>
                              <input type="text" className="form-control mb-3" name="mother_name" value={mother_name} placeholder="Nama Ibu" />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Pekerjaan Ibu</label>
                              <input type="text" className="form-control mb-3" name="mother_occupation" value={mother_occupation} placeholder="Pekerjaan Ibu" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Penghasilan Ibu Perbulan</label>
                              <input type="text" className="form-control mb-3" name="mother_occupation" value={mother_occupation} placeholder="Penghasilan Ibu Perbulan" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Pekerjaan Sendiri</label>
                              <input type="text" className="form-control mb-3" name="mother_name" value={mother_name} placeholder="Pekerjaan Sendiri" />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Penghasilan Sendiri</label>
                              <input type="text" className="form-control mb-3" name="mother_occupation" value={mother_occupation} placeholder="Penghasilan Sendiri" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Tinggal Dengan</label>
                              <input type="text" className="form-control mb-3" name="mother_occupation" value={mother_occupation} placeholder="Tinggal Dengan" onChange={onFormChange} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label"><span className='text-danger'><sup>*</sup></span> Biaya Kuliah Ditanggung Oleh</label>
                              <input type="text" className="form-control mb-3" name="mother_occupation" value={mother_occupation} placeholder="Biaya Kuliah Ditanggung Oleh" onChange={onFormChange} />
                            </div>
                          </div>
                          <div class="d-sm-flex justify-content-end mt-2">
                            <button type="button" class="btn btn-primary mb-0">Simpan Data Keluarga</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="headingThree">
                        <button class="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <span class="text-secondary fw-bold me-3">03</span>
                          <span class="fw-bold">Berkas Kamu</span>
                          {/* &nbsp;<span class="badge text-bg-danger">5 data belum terverifikasi</span> */}
                          {/* &nbsp;<span class="badge text-bg-info">3 data sudah terverifikasi</span> */}
                        </button>
                      </h6>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
                        <div class="accordion-body mt-3">
                          <div className="col-12">
                            <label className="form-label">Unggah Pas Foto</label>
                            <div className="input-group mb-3">
                              <input type="file" className="form-control" id="inputGroupFile03" />
                              <label className="input-group-text">.jpg, .jpeg, .png</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Unggah Kartu Tanda Penduduk (KTP)</label>
                            <div className="input-group mb-3">
                              <input type="file" className="form-control" id="inputGroupFile01" />
                              <label className="input-group-text">.jpg, .jpeg, .png</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Unggah Kartu Keluarga (KK)</label>
                            <div className="input-group mb-3">
                              <input type="file" className="form-control" id="inputGroupFile02" />
                              <label className="input-group-text">.jpg, .jpeg, .png</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Unggah Sertifikat</label>
                            <div className="input-group mb-3">
                              <input type="file" className="form-control" id="inputGroupFile03" />
                              <label className="input-group-text">.pdf</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Unggah Transkrip Nilai Terbaru</label>
                            <div className="input-group mb-3">
                              <input type="file" className="form-control" id="inputGroupFile03" />
                              <label className="input-group-text">.pdf</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Unggah Surat Rekomendasi</label>
                            <div className="input-group mb-3">
                              <input type="file" className="form-control" id="inputGroupFile03" />
                              <label className="input-group-text">.pdf</label>
                            </div>
                          </div>
                          <div class="d-sm-flex justify-content-end mt-2">
                            <button type="button" class="btn btn-primary mb-0">Simpan Berkas</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h6 class="accordion-header" id="headingFour">
                        <button class="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <span class="text-secondary fw-bold me-3">04</span>
                          <span class="fw-bold">Jenjang Pendidikan Kamu</span>
                          {/* &nbsp;<span class="badge text-bg-danger">5 data belum terverifikasi</span> */}
                          {/* &nbsp;<span class="badge text-bg-info">3 data sudah terverifikasi</span> */}
                        </button>
                      </h6>
                      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour">
                        <div class="accordion-body mt-3">
                          <div className="col-md-6">
                            <label className="form-label"><span className='text-danger'><sup>*</sup></span> Jenjang Pendidikan</label>
                            <input type="text" className="form-control mb-3" name="mother_name" value={mother_name} placeholder="Jenjang Pendidikan" />
                          </div>
                          <div class="d-sm-flex justify-content-end mt-2">
                            <button type="button" class="btn btn-primary mb-0">Simpan Jenjang</button>
                          </div>
                        </div>
                      </div>
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