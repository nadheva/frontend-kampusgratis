import React from 'react'
import Header3 from '../../component/partials/Header3';
import Footer2 from '../../component/partials/Footer2';
import Intro from '../../component/studiku/pertemuan/Intro';
import MainContent from '../../component/studiku/pertemuan/MainContent';
import RightSidebar from '../../component/studiku/pertemuan/RightSidebar';

import "../../assets/user/css-custom/studiku.css";

const PertemuanStudiku = () => {
    return (
        <>
            <Header3 />
            <main>
                <Intro />
                <section className="pb-0 py-lg-5">
                    <div className="container">
                        <div className="row">
                            <MainContent />
                            <RightSidebar />
                        </div>
                    </div>
                </section>
            </main>
            <Footer2 />
        </>
    )
}

export default PertemuanStudiku