import React from 'react'

import DataKerja from '../../../json/Kerja'
import CardItem from './CardItem'

const CardList = () => {
    return (
        <div className="row g-4 ">
            {
                DataKerja.map((data) => (
                    <CardItem key={data.id} kerja={data} />
                ))
            }
        </div>
    )
}

export default CardList