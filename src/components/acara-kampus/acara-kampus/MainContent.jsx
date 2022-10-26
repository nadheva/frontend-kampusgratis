import React from 'react';

import FilterBar from './FilterBar';
import CardList from './CardList';

const MainContent = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <FilterBar />
                <CardList />
            </div>
        </section>
    )
}

export default MainContent