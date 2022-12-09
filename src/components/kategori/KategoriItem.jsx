import React from 'react'
import { Link } from 'react-router-dom'

const KategoriItem = ({ category }) => {
    return (
        <div className="col-sm-6 col-md-4 col-xl-4" key={category.id}>
            <div className={`card card-body ${category.disabled ? "bg-dark" : category.background} bg-opacity-10 text-center position-relative btn-transition p-4`}>
                <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img
                        loading="lazy"
                        src={category.src}
                        alt={category.name}
                        style={category.disabled ? { filter: "grayscale(100%)" } : {}}
                    />
                </div>
                <h5 className="mb-2">
                    {category.disabled ? <>
                        <Link to="#" onClick={(e) => e.preventDefault()} className="stretched-link" disabled style={{ "cursor": "not-allowed" }}>
                            {category.name}
                        </Link>
                    </> : <>
                        <Link to={category.url} className="stretched-link" dstyle={{ "cursor": "not-allowed" }}>
                            {category.name}
                        </Link>
                    </>}
                </h5>
            </div>
        </div>
    )
}

export default KategoriItem