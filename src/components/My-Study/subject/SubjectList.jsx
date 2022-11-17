import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SubjectItem from './SubjectItem';

const SubjectList = ({ isLoading, results }) => {
	return <>
		<div className="row g-4">
			{isLoading ? <>
				<>
					<div className="col-sm-4 col-xl-4">
						<SkeletonTheme>
							<Skeleton height={323} />
							<Skeleton height={50} />
						</SkeletonTheme>
					</div>
					<div className="col-sm-4 col-xl-4">
						<SkeletonTheme>
							<Skeleton height={323} />
							<Skeleton height={50} />
						</SkeletonTheme>
					</div>
					<div className="col-sm-4 col-xl-4">
						<SkeletonTheme>
							<Skeleton height={323} />
							<Skeleton height={50} />
						</SkeletonTheme>
					</div>
				</>
			</> : <>
				{Object.values(results).length !== 0 ? <>
					{results.map((subject, i) => <SubjectItem key={i} subject={subject.item} student={subject.student_count} lecturers={subject.lecturers} progress={subject.progress} />)}
				</> : <>
					<div className="col-md-12">
						<div className="alert alert-info">Kamu belum mengambil mata kuliah atau mata kuliah tidak ditemukan.</div>
					</div>
				</>}
			</>}
		</div>
	</>
}

export default SubjectList;