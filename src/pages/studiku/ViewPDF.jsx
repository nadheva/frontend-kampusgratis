import React from 'react';
import Iframe from 'react-iframe';

const ViewPDF = () => {
    return (
        <Iframe url="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
            allowFullscreen
            id="myId"
            className=""
            display="block"
            position="relative"
        />
    );
}

export default ViewPDF




