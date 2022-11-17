import React from 'react'
import NotifikasiItem from './NotifikasiItem'

const NotifikasiList = () => {
    const data = [
        {
            id: '1',
            title: 'Back-End Web Curriculum Developer',
            date: '18 Agu 2022 - 31 Des 2022'
        },
        {
            id: '2',
            title: 'Jangan lupa untuk membuat laporan harian Kamis, 03 November 2022, ya!',
            date: '19 Agu 2022 - 31 Des 2022'
        },
        {
            id: '3',
            title: 'Web Curriculum Developer',
            date: '12 Agu 2022 - 31 Des 2022'
        },
        {
            id: '4',
            title: 'Jangan lupa ngoding bro ',
            date: '12 Agu 2022 - 31 Des 2022'
        },
    ]

    return (
        <section className="pt-0 ">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="card bg-transparent shadow h-100">
                            <div className="card-body pb-0">
                                <div className="table-responsive border-0">
                                    <table className="table table-hover p-4 mb-0 ">
                                        <tbody>
                                            {
                                                data.map((x) => (
                                                    <NotifikasiItem key={x.id} data={x} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotifikasiList