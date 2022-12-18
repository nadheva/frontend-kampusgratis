import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import CardItem from "./CardItem";

const CardList = ({ results, isLoading }) => {
	return (
		<div className="row mt-3 g-4">
			{isLoading ? (
				<div className="row">
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<SkeletonTheme>
							<Skeleton height={189} className="mb-2" />
							<Skeleton height={26} />
							<Skeleton height={22} />
						</SkeletonTheme>
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<SkeletonTheme>
							<Skeleton height={189} className="mb-2" />
							<Skeleton height={26} />
							<Skeleton height={22} />
						</SkeletonTheme>
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<SkeletonTheme>
							<Skeleton height={189} className="mb-2" />
							<Skeleton height={26} />
							<Skeleton height={22} />
						</SkeletonTheme>
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3">
						<SkeletonTheme>
							<Skeleton height={189} className="mb-2" />
							<Skeleton height={26} />
							<Skeleton height={22} />
						</SkeletonTheme>
					</div>
				</div>
			) : Object.values(results).length !== 0 ? (
				results.map((data) => (
					<CardItem key={data.id} data={data} />
				))
			) : (
				<span className='alert alert-danger'>Belum ada acara kampus</span>
			)}
		</div>
	);
};

export default CardList;
