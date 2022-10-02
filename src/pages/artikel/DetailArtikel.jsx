import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import moment from 'moment/moment'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { artikelAll, reset } from '../../features/artikel/artikelSlice'

const DetailArtikel = () => {

    // redux
    const dispatch = useDispatch()
    const { artikels, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.artikel
    );

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(artikelAll())

        return () => {
            dispatch(reset())
        }
    }, [artikels, isLoading, isError, isSuccess, message, dispatch])


    // Get id
    const { artikelId } = useParams()
    const thisArtikel = artikels.find(prod => prod.id === artikelId)

    // moment
    const timeago = moment(thisArtikel.created_at).fromNow();

    return (
        <main>
            <section className="bg-light">
                <div className="container">
                    <div className="row position-relative pb-4">
                        <div className="col-lg-8 position-relative">
                            <h1>{thisArtikel.title}</h1>
                            <p className="small">{timeago}</p>
                        </div>
                    </div>

                    <div
                        className="h-300px mb-n9 rounded-3"
                        style={{
                            backgroundImage: `url(${thisArtikel.image_link})`,
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                        }}
                    ></div>
                </div>
            </section>
            <section className="pt-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Content */}
                            <p>{thisArtikel.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailArtikel