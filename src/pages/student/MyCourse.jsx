import React from 'react'
import SidebarProfile from '../../components/Profile/Sidebar'
import Banner from '../../components/Profile/Banner'

const MyCourse = () => {
    return (
        <>
            <Banner />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <SidebarProfile />
                        {/* <MainContent /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyCourse