import React from 'react'
import MainContent from '../../components/studiku/vidioPlayer/MainContent'
import RightSidebar from '../../components/studiku/vidioPlayer/RightSidebar'

const VidioPlayer = () => {
    return (
        <>
            <main>
                <section className="pt-3 pt-xl-5">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <div className="col-xl-8">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <h2>Lembaga Keuangan - 000372</h2>
                                    </div>
                                    <MainContent />
                                </div>
                            </div>
                            <RightSidebar />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default VidioPlayer