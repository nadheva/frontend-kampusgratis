import React from 'react'

import SearchBar from './SearchBar';
import CourseList from './CourseList';

const MainContent = ({ course, isLoading, handleSearchFilter, searchValue }) => {
    return (
        <>
            <SearchBar
                handleSearchFilter={handleSearchFilter}
                searchValue={searchValue}
            />
            <CourseList
                course={course}
                isLoading={isLoading}
            />
        </>
    )
}

export default MainContent