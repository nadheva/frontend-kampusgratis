import React from 'react';

const MainContent = () => {
  return <>
    <section>
      <div className="container">
        <div className="lead text-center mb-3">Daftar Nama Mahasiswa dengan <strong>nilai terbaik secara global</strong> (dilihat dari setiap mata kuliah).</div>
        <div className="card card-body bg-transparent pb-0 border py-4">
          <div className="table-responsive border-0 mb-4">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th className='border-0 rounded-start text-center'>#</th>
                  <th className='border-0'>Nama Mahasiswa</th>
                  <th className='border-0 rounded-end'>Skor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center h4'>🥇</td>
                  <td>
                    <div class="avatar avatar-xs mb-2 mb-md-0 me-3 border-2">
                      <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="" />
                    </div>
                    <strong>Aryo Bhodro Irawan</strong>
                  </td>
                  <td><strong>100</strong></td>
                </tr>
                <tr>
                  <td className='text-center h4'>🥈</td>
                  <td>
                    <div class="avatar avatar-xs mb-2 mb-md-0 me-3 border-2">
                      <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="" />
                    </div>
                    <strong>Muhammad Azis</strong>
                  </td>
                  <td><strong>97</strong></td>
                </tr>
                <tr>
                  <td className='text-center h4'>🥉</td>
                  <td>
                    <div class="avatar avatar-xs mb-2 mb-md-0 me-3 border-2">
                      <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="" />
                    </div>
                    <strong>Rizki Pratama</strong>
                  </td>
                  <td><strong>92</strong></td>
                </tr>
                <tr>
                  <td className='text-center h6'>4.</td>
                  <td>
                    <div class="avatar avatar-xs mb-2 mb-md-0 me-3 border-2">
                      <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="" />
                    </div>
                    Lalu Ibnu
                  </td>
                  <td>88</td>
                </tr>
                <tr>
                  <td className='text-center h6'>5.</td>
                  <td>
                    <div class="avatar avatar-xs mb-2 mb-md-0 me-3 border-2">
                      <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="" />
                    </div>
                    Kenniskiu
                  </td>
                  <td>82</td>
                </tr>
                <tr>
                  <td className='text-center h6'>6.</td>
                  <td>
                    <div class="avatar avatar-xs mb-2 mb-md-0 me-3 border-2">
                      <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="" />
                    </div>
                    Theopillus Lukas
                  </td>
                  <td>81</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default MainContent;