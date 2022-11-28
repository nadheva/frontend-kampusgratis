import React from 'react'
import KategoriItem from './KategoriItem'

const KategoriList = ({ categoryList }) => {
    return (
        <section>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2>Beberapa Kategori di Kampus Gratis</h2>
                        <p className="mb-0">Sudah siap belajar di Kampus Gratis?</p>
                    </div>
                </div>
                <div className="row g-4">
                    {
                        categoryList.map((category, i) => (
                            <KategoriItem key={i} category={category} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default KategoriList