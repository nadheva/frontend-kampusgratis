import React from 'react'

import Table from '../../components/analitik/analitik-detail/Table'
import DataUser from '../../components/analitik/analitik-detail/DataUser'
import Ipk from '../../components/analitik/analitik-detail/Ipk'

const AnalitikDetail = () => {
    return (
        <main>
            <section className="pt-5 pb-0">
                <div className="container">
                    <div className="card shadow bg-transparent rounded-3">
                        <div className="card-header bg-transparent  text-center">
                            <h3 className="mb-0">Kartu Hasil Studi (KHS) - Gasal 2018</h3>
                        </div>
                        <div className="card-body">
                            <DataUser />
                            <Table />
                            <Ipk />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AnalitikDetail