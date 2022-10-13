import React from 'react'

import SearchBar from './SearchBar';
import CourseList from './CourseList';

const MainContent = ({ course, isLoading }) => {
    return (
        <>
            <SearchBar
            />
            <CourseList
                course={course}
                isLoading={isLoading}
            />
        </>
    )
}

export default MainContent