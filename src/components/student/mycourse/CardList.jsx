import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import CardItem from './CardItem'

const CardList = ({ isLoading, results }) => {

  return (
    <div className="row g-4">
      {isLoading ? <>
        <>
          <div className="col-sm-6 col-xl-4">
            <SkeletonTheme>
              <Skeleton height={323} />
              <Skeleton height={50} />
            </SkeletonTheme>
          </div>
          <div className="col-sm-6 col-xl-4">
            <SkeletonTheme>
              <Skeleton height={323} />
              <Skeleton height={50} />
            </SkeletonTheme>
          </div>
          <div className="col-sm-6 col-xl-4">
            <SkeletonTheme>
              <Skeleton height={323} />
              <Skeleton height={50} />
            </SkeletonTheme>
          </div>
        </>
      </> : <>
        {Object.values(results).length !== 0 ? <>
          {results.map((subject, i) =>
            <CardItem
              key={i}
              subject={subject.item}
              student={subject.student_count}
              lecturers={subject.lecturers}
              progress={subject.progress}
            />)
          }
        </> : <>
          <div className="col-md-12">
            <div className="alert alert-info">Data kosong</div>
          </div>
        </>}
      </>}
    </div>
  )
}

export default CardList