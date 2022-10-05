import React from 'react'
// import DataPertemuan from '../../../json/Pertemuan'
import AccordionItem from './AccordionItem'


const AccordionList = ({ session }) => {

    return (
        <div className="card-body p-sm-4">
            <div className="tab-content" id="course-pills-tabContent">
                <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                    aria-labelledby="course-pills-tab-1">
                    <div className="accordion accordion-icon accordion-border" id="accordionExample2">

                        {session.map((Data) => (
                            <AccordionItem key={Data.id} session={Data} />
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AccordionList