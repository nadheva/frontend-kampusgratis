import React from 'react'
import AccordionList from './AccordionList'

const TableNilai = () => {
    return (
        <div className="card border bg-transparent rounded-3 mt-4">
            <div className="card-header bg-transparent border-bottom px-3">
                <h3 className="card-title mb-0">Rangkuman Nilai</h3>
            </div>
            <div className="card-body p-4">
                <AccordionList />
            </div>
        </div>
    )
}

export default TableNilai