import React from 'react'
import Header2 from '../../component/partials/Header2'
import Footer2 from '../../component/partials/Footer2'
import Intro from '../../component/studiku/vidioPlayer/Intro'
import MainContent from '../../component/studiku/vidioPlayer/MainContent'
import RightSidebar from '../../component/studiku/vidioPlayer/RightSidebar'

const VidioPlayer = () => {
    return (
        <>
            <Header2 />

            <main>
                <section className="pt-3 pt-xl-5 mt-8">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <div className="col-xl-8">
                                <div className="row g-4">
                                    <Intro />
                                    <MainContent />
                                </div>
                            </div>
                            <RightSidebar />

                        </div>
                    </div>
                </section>
            </main>

            <Footer2 />
        </>
    )
}

export default VidioPlayer