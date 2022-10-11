import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import Iframe from 'react-iframe';
import { useParams } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from "react-redux";
import {
    getDokuments,
    reset,
} from "../../features/dokument/dokumentSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const ViewPDF = () => {
    useEffect(() => {
        document.title = "Kampus Gratis";
    });

    // Get id
    const { dokumenId } = useParams();

    // Redux
    const dispatch = useDispatch();
    const { dokument, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.dokument
    );

    useEffectOnce(() => {
        dispatch(getDokuments(dokumenId));
    });

    useEffect(() => {
        if (isError && !isSuccess) {
            toast.error(message);
            dispatch(reset());
        }
        if (isSuccess && message && !isError) {
            toast.success(message);
            dispatch(reset());
        }
    }, [dokument, isLoading, isError, isSuccess, message, dispatch]);

    return (
        <>
            {isLoading ? (
                <section className="py-0 py-sm-5">
                    <div
                        className="container text-center"
                        style={{ marginTop: "178px", marginBottom: "178px" }}
                    >
                        <div className="row">
                            <div className="col-12">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : dokument == null || dokument == 0 ? (
                <span className='alert alert-danger'>Data kosong</span>
            ) : (
                <Iframe url={dokument.link}
                    id=""
                    className=""
                    display="block"
                    position="relative"
                    frameBorder="0"
                    styles={{ height: '100vh', width: '100%' }}
                />
            )}
        </>
    );
}

export default ViewPDF




