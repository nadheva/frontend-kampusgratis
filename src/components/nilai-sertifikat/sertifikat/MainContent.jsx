import React from 'react'
import SertifikatList from './SertifikatList'

const MainContent = () => {
    return (
        <div className="card-body">
            <div className="row mb-4 align-items-center">
                <div className="col-xl-12">
                    <form className="border rounded p-2" >
                        <div className="input-group input-borderless">
                            <input className="form-control me-1" type="search" placeholder="Cari Sertifikat" />
                            <button type="submit" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
            <SertifikatList />
        </div>
    )
}

export default MainContent