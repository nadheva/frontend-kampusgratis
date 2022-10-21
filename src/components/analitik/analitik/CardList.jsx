import React from 'react'

import CardItem from './CardItem'

const data = [
    {
        id: '1',
        title: 'KHS - Gasal 2021',
        semester: 'Semester 1',
        sks: '22',
        ip: '3.2',
        ipk: '3.1'
    },
    {
        id: '2',
        title: 'KHS - Gasal 2022',
        semester: 'Semester 2',
        sks: '44',
        ip: '3',
        ipk: '4'
    },
    {
        id: '3',
        title: 'KHS - Gasal 2021',
        semester: 'Semester 3',
        sks: '55',
        ip: '4',
        ipk: '4'
    },
    {
        id: '4',
        title: 'KHS - Gasal 2022',
        semester: 'Semester 4',
        sks: '100',
        ip: '3',
        ipk: '3.5'
    },
    {
        id: '5',
        title: 'KHS - Gasal 2022',
        semester: 'Semester 5',
        sks: '110',
        ip: '4',
        ipk: '3.5'
    },
    {
        id: '6',
        title: 'KHS - Gasal 2022',
        semester: 'Semester 6',
        sks: '120',
        ip: '3',
        ipk: '3'
    },
];

const CardList = () => {
    return (
        <div className="row g-4">
            {
                data.map((data) => (
                    <CardItem key={data.id} data={data} />
                ))
            }
        </div>
    )
}

export default CardList