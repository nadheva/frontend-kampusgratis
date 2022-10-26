import React from 'react'
import SertifikatItem from './SertifikatItem'
import DataArtikel from '../../../json/Artikel'

const SertifikatList = () => {
    return (
        <div className="card-body">
            <div className="row g-4">
                {
                    DataArtikel.map((data) => (
                        <SertifikatItem key={data.id} sertifikat={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default SertifikatList