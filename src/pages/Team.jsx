import React from 'react'
import Footer from '../components/default/Footer'
import Header from '../components/default/Header'

const Team = () => {

    const data = [
        {
            name: "Theophilus Lukas Hotasi",
            position: "Back End Developer",
            img: "./assets/images/instructor/01.jpg",
            color: "",
        },
        {
            name: "Lalu Ibnu Hidayatullah",
            position: "Back End Developer",
            img: "./assets/images/instructor/02.jpg",
            color: "three",
        },
        {
            name: "Kenniskiu Fortino Kurniawan",
            position: "Back End Developer",
            img: "./assets/images/instructor/03.jpg",
            color: "four",
        },
        {
            name: "Rizki Pratama",
            position: "Front End",
            img: "./assets/images/instructor/04.jpg",
            color: "five",
        },
        {
            name: "Aryo Bhodro Irawan",
            position: "Front End Developer",
            img: "./assets/images/instructor/08.jpg",
            color: "six",
        },
        {
            name: "Muhamad Azis",
            position: "Front End Developer",
            img: "./assets/images/instructor/06.jpg",
            color: "two",
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section
                    className="d-flex align-items-center pt-0 position-relative overflow-hidden h-700px h-sm-600px h-lg-700px rounded-top-4 mx-2 mx-md-4"
                    style={{
                        backgroundImage: "url(assets/images/asset-kg/web.JPG)",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                >
                    <div className="bg-overlay bg-dark opacity-5" />
                    <figure className="position-absolute bottom-0 left-0 w-100 d-md-block mb-n3 z-index-9">
                        <svg
                            className="fill-body"
                            width="100%"
                            height={150}
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" />
                        </svg>
                    </figure>
                    <div className="container z-index-9 position-relative">
                        <div className="row py-0 py-md-5 align-items-center text-center text-sm-start">
                            <div className="col-12">
                                <div className="text-center ">
                                    <h1 className="text-white display-5">
                                        Our
                                        <span className="text-warning"> Developer </span> Team
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-area-two ptb-100">
                    <div className="container">
                        <div className="row">
                            {
                                data.map((x, i) => (
                                    <div className="col-sm-6 col-lg-4" key={i}>
                                        <div className={`team-item ${x.color}`}>
                                            <div className="top">
                                                <img src={x.img} alt="Team" />
                                            </div>
                                            <div className="bottom">
                                                <h3>{x.name}</h3>
                                                <span>{x.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Team