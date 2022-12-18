import React from 'react'

import DataKerja from '../../../json/Kerja'
import CardItem from './CardItem'

const CardList = ({ results, isLoading }) => {
    return (
        <div className="row g-4 ">
            {
                results.map((data) => (
                    <CardItem key={data.id} kerja={data} />
                ))
            }
        </div>
    )
}

export default CardList