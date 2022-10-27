import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import CourseItem from "./CourseItem";

const CoureList = ({ isLoading, results }) => {
	return (
		<div className="table-responsive border-0">
			<table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
				<thead>
					<tr>
						<th className="border-0 rounded-start">
							Mata Kuliah
						</th>
						<th>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? <>
						<>
							<tr className="col-sm-6 col-xl-4">
								<td>
									<SkeletonTheme>
										<Skeleton height={50} />
									</SkeletonTheme>
								</td>
								<td>
									<SkeletonTheme>
										<Skeleton height={50} />
									</SkeletonTheme>
								</td>
							</tr>
							<tr className="col-sm-6 col-xl-4">
								<td>
									<SkeletonTheme>
										<Skeleton height={50} />
									</SkeletonTheme>
								</td>
								<td>
									<SkeletonTheme>
										<Skeleton height={50} />
									</SkeletonTheme>
								</td>
							</tr>
						</>
					</> : <>
						{Object.values(results).length !== 0 ? <>
							{results.map((subject, i) =>
								<CourseItem
									key={i}
									subject={subject.item}
									progress={subject.progress}
								/>)
							}
						</> : <>
							<div className="col-md-12">
								<div className="alert alert-info">Data kosong</div>
							</div>
						</>}
					</>}
				</tbody>
			</table>
		</div>
	);
};

export default CoureList;
