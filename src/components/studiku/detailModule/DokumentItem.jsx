import React from 'react';

const DokumentItem = ({ dokument }) => {
    return (
        <>
            <div className="d-sm-flex justify-content-sm-between align-items-center">
                <div className="d-flex">
                    <a href={`/studi-ku/pertemuan/modul/detail-modul/view-pdf/${dokument.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-round mb-0 flex-shrink-0">
                        <i className="bi bi-file-earmark-pdf" />
                    </a>
                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                        <h6 className="mb-0">{dokument.content}</h6>
                        {/* <p className="mb-2 mb-sm-0 small">{dokument.description.substring(0, 60)}</p> */}
                    </div>
                </div>
                <a href={`/studi-ku/pertemuan/modul/detail-modul/view-pdf/${dokument.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success mb-0 mt-3">
                    View
                </a>
            </div>
            <hr />
        </>
    )
}

export default DokumentItem