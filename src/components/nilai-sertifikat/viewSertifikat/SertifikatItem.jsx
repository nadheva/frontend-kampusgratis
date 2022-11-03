import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SertifikatItem = ({ currentCertificate , isLoading}) => {
    return (
        <section className="pb-0 py-sm-0 mt-n9">
            <div className="container">
                <div className="row g-4 g-md-5">
                    <div className="col-md-7 text-center mx-auto overflow-auto pb-5">
                        {isLoading ? (
                            <SkeletonTheme>
                                <Skeleton height={300} />
                            </SkeletonTheme>
                        ) : currentCertificate.link === undefined || currentCertificate.link === null ? (
                            <div className="card card-body img-object shadow p-2 h-300px h-sm-400px h-md-500px h-lg-500px  position-relative overflow-hidden"
                                style={{
                                    backgroundImage: `url(/assets/images/about/29.jpg)`,
                                    backgroundPosition: "center left",
                                    backgroundSize: "cover"
                                }}>
                                <div className="bg-overlay bg-dark opacity-6" />
                            </div>
                        ) : (
                            <iframe src={currentCertificate.link}
                                title='x'
                                frameBorder="0"
                                width="100%"
                                height="555px"
                                display="block"
                                position="relative" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SertifikatItem