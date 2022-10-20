import React from 'react'
import AccordionItem from './AccordionItem'
import DataPertemuan from '../../../json/Pertemuan'

const AccordionList = () => {
    return (
        <div className="tab-content" id="course-pills-tabContent">
            <div className="tab-pane fade show active"
                id="course-pills-1"
                role="tabpanel"
                aria-labelledby="course-pills-tab-1">
                <div className="accordion accordion-icon accordion-border" id="accordionExample2">
                    {
                        DataPertemuan.map((data) => (
                            <AccordionItem key={data.id} nilai={data} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AccordionList