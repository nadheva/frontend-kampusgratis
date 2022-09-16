import React from 'react'
import Intro from '../../components/studiku/vidioPlayer/Intro'
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
                                    <Intro />
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