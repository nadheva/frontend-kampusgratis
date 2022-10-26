import React from 'react'
// import Iframe from 'react-iframe'

const Modal = () => {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-body">
                        <img src="assets/images/about/12.jpg" alt="" width="100%" />
                        {/* <Iframe url="./video.pdf"
                            id=""
                            className=""
                            display="block"
                            position="relative"
                            frameBorder="0"
                            styles={{ height: '75vh', width: '100%' }}
                        /> */}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Unduh
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal