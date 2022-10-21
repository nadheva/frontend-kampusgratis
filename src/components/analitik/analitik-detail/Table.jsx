import React from 'react'

const Table = () => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle p-4 mb-0 table-hover">
        <thead>
          <tr>
            <th scope="col" className=" rounded-start">
              No
            </th>
            <th scope="col">Kode</th>
            <th scope="col">Nama Matkul</th>
            <th scope="col">Kelas</th>
            <th scope="col">SKS</th>
            <th scope="col">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>U017013</td>
            <td>B Inggris</td>
            <td>B5</td>
            <td>20</td>
            <td>80</td>
          </tr>
          <tr>
            <td>2</td>
            <td>U017013</td>
            <td>Pemograman Dasar</td>
            <td>B5</td>
            <td>20</td>
            <td>80</td>
          </tr>
          <tr>
            <td>3</td>
            <td>U017013</td>
            <td>Pemograman Bergerak</td>
            <td>B5</td>
            <td>20</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table