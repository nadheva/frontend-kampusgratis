import React from 'react'
import CardList from './CardList'

const MainContent = () => {
    return (
        <section className="position-relative">
            <div className="position-absolute bottom-0 end-0">
                <img src="assets/images/element/30.svg" className="h-300px" alt="img" />
            </div>
            <div className="container">
                <CardList />
            </div>
        </section>
    )
}

export default MainContent