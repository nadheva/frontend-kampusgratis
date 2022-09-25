import React from 'react'
import AccordionList from './AccordionList'

const MainContent = () => {

    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            {/* Card header */}
                            <div className="card-header border-bottom px-4 pt-3 pb-0">
                                <h6 >Lembaga Keuangan - 000372</h6>
                            </div>

                            {/* Card body */}
                            <AccordionList />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent