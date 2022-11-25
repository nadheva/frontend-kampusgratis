import React from 'react'
import Slider from 'react-slick'

const ClientSTART = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    };

    const data = [
        {
            id: 1,
            img: "assets/images/client/coca-cola.svg"
        },
        {
            id: 2,
            img: "assets/images/client/android.svg"
        },
        {
            id: 3,
            img: "assets/images/client/envato.svg"
        },
        {
            id: 4,
            img: "assets/images/client/microsoft.svg"
        },
        {
            id: 5,
            img: "assets/images/client/netflix.svg"
        },
        {
            id: 6,
            img: "assets/images/client/google.svg"
        },
        {
            id: 7,
            img: "assets/images/client/linkedin.svg"
        },
    ]

    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center my-4">
                    <div className="col-12">
                        <Slider {...settings}  >
                            {
                                data.map((x) => (
                                    <div className="item px-4" key={x.id}>
                                        <img src={x.img} alt="" />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSTART 