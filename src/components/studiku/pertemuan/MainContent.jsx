import React from 'react'
import AccordionList from './AccordionList'

const MainContent = ({ session, isLoading }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            <AccordionList session={session} isLoading={isLoading} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent