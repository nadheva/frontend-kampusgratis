import React from 'react'

import SearchBar from './SearchBar';
import CourseList from './CourseList';

const MainContent = ({ course, isLoading, handleSearchFilter, searchValue }) => {
    return (
        <div className="col-lg-8 col-xl-9 col-12">
            <SearchBar
                handleSearchFilter={handleSearchFilter}
                searchValue={searchValue}
            />
            <CourseList
                course={course}
                isLoading={isLoading}
            />
        </div>
    )
}

export default MainContent