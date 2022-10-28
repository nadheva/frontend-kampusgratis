import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SertifikatItem from './SertifikatItem'

const SertifikatList = ({ data, isLoading }) => {
    return (
        <div className="row g-4">
            {isLoading ? <>
                <>
                    <div className="col-md-12">
                        <SkeletonTheme>
                            <Skeleton height={50} />
                            <Skeleton height={50} />
                            <Skeleton height={50} />
                        </SkeletonTheme>
                    </div>
                </>
            </> : <>
                {Object.values(data).length !== 0 ? <>
                    {data.map((data, i) =>
                        <SertifikatItem
                            key={i}
                            data={data}
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

export default SertifikatList