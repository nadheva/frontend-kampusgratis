import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const Panduan = () => {

    useEffect(() => {
        document.title = "Kampus Gratis | Panduan";
    });

    const dataPertanyaan = [
        {
            id: 1,
            title: "Cara Mahasiswa Mendaftar Akun kampus Gratis?",
            link: ""
        },
        {
            id: 2,
            title: "Cara login ke web Kampus Gratis?",
            link: ""
        },
        {
            id: 3,
            title: "Cara mengisi Administrasi?",
            link: ""
        },
        {
            id: 4,
            title: "Cara mengakses fitur Studiku?",
            link: ""
        },
        {
            id: 5,
            title: "Bagaimana cara melihat Sertifikat?",
            link: ""
        },
    ]

    const dataPanduan = [
        {
            id: 1,
            icon: "bi-book text-success",
            title: "Buku Panduan",
            deskripsi: "Panduan ini berisi dokumen - dokumen panduan.",
            link: "",
        },
        {
            id: 2,
            icon: "bi-fast-forward text-danger",
            title: "Vidio Panduan",
            deskripsi: "Panduan ini berisi video - video panduan.",
            link: "/vidio-panduan",
        },
        {
            id: 3,
            icon: "bi-journal-bookmark text-warning",
            title: "Kamus KG",
            deskripsi: "Panduan ini berisi konten kamus kampus gratis.",
            link: "",
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="bg-primary bg-opacity-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h1 className="display-6">
                                    Hai, ada yang bisa kami bantu?</h1>
                                <p className="mb-0">
                                    Cari informasi penggunakan web Kampus Gratis disini
                                </p>
                                <div className="row mt-4 align-items-center">
                                    <div className="col-12">
                                        <h5 className="mb-3">Pertanyaan populer</h5>
                                        <div className="list-group list-group-horizontal gap-2 justify-content-center flex-wrap mb-0 border-0">
                                            {
                                                dataPertanyaan.map((x) => (
                                                    <a className="btn btn-white btn-sm fw-light"
                                                        key={x.id}
                                                        href={x.link}>
                                                        {x.title}
                                                    </a>
                                                ))
                                            }
                                            <a className="btn btn-primary-soft btn-sm fw-light" href="#!">
                                                Lihat semua
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-6">
                                <img
                                    src="assets/images/element/help-center.svg"
                                    className="w-100"
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row g-4">
                            {
                                dataPanduan.map((x) => (
                                    <div className="col-md-6 col-xl-4" key={x.id}>
                                        <Link to={x.link}>
                                            <div className="card shadow-hover bg-light h-100">
                                                <div className="card-header bg-light pb-0 border-0">
                                                    <i className={`bi fs-1 ${x.icon}`} />
                                                    <h5 className="card-title mb-0 mt-2">
                                                        {x.title}
                                                    </h5>
                                                </div>
                                                <div className="card-body px-3">
                                                    <p className="text-body">
                                                        {x.deskripsi}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="position-relative overflow-hidden pt-0 pt-sm-5">
                    <div className="container">
                        <div className="row position-relative z-index-9">
                            <div className="col-12 text-center mx-auto">
                                <h2 className="mb-0">Pertanyaan yang Sering Diajukan</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 mx-auto text-center position-relative">
                                <figure className="position-absolute top-0 start-0 translate-middle ms-8">
                                    <svg style={{ enableBackground: "new 0 0 141.7 143.9" }}>
                                        <path
                                            className="fill-success"
                                            d="M137.7,53.1c9.6,29.3,1.8,64.7-20.2,80.7s-58.1,12.6-83.5-5.8C8.6,109.5-6.1,76.1,2.4,48.7 C10.8,21.1,42.2-0.7,71.5,0S128.1,23.8,137.7,53.1z"
                                        />
                                    </svg>
                                </figure>
                                <figure className="position-absolute bottom-0 end-0 me-n9 rotate-193">
                                    <svg width="297.5px" height="295.9px">
                                        <path
                                            stroke="#F99D2B"
                                            fill="none"
                                            strokeWidth={13}
                                            d="M286.2,165.5c-9.8,74.9-78.8,128.9-153.9,120.4c-76-8.6-131.4-78.2-122.8-154.2C18.2,55.8,87.8,0.3,163.7,9"
                                        />
                                    </svg>
                                </figure>
                                {/* FAQ START */}
                                <div
                                    className="accordion accordion-icon accordion-shadow mt-4 text-start position-relative"
                                    id="accordionExample2"
                                >

                                    <div className="accordion-item mb-3">
                                        <h6 className="accordion-header font-base" id="heading-1">
                                            <button
                                                className="accordion-button fw-bold rounded collapsed pe-5"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-1"
                                                aria-expanded="true"
                                                aria-controls="collapse-1"
                                            >
                                                What subject can you teach?
                                            </button>
                                        </h6>

                                        <div
                                            id="collapse-1"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="heading-1"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body mt-3">
                                                Yet remarkably appearance gets him his projection. Diverted
                                                endeavor bed peculiar men the not desirous. Acuteness abilities
                                                ask can offending furnished fulfilled sex. Warrant fifteen
                                                exposed ye at mistake. Blush since so in noisy still built up an
                                                again. As young ye hopes no he place means. Partiality
                                                diminution gay yet entreaties admiration. In mention perhaps
                                                attempt pointed suppose. Unknown ye chamber of warrant of
                                                Norland arrived.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3">
                                        <h6 className="accordion-header font-base" id="heading-2">
                                            <button
                                                className="accordion-button fw-bold rounded collapsed pe-5"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-2"
                                                aria-expanded="false"
                                                aria-controls="collapse-2"
                                            >
                                                Will you give me the answer any time?
                                            </button>
                                        </h6>
                                        {/* Body */}
                                        <div
                                            id="collapse-2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-2"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body mt-3">
                                                What deal evil rent by real in. But her ready least set lived
                                                spite solid. September how men saw tolerably two behavior
                                                arranging. She offices for highest and replied one venture
                                                pasture. Applauded no discovery in newspaper allowance am
                                                northward. Frequently partiality possession resolution at or
                                                appearance unaffected me. Engaged its was the evident pleased
                                                husband. Ye goodness felicity do disposal dwelling no. First am
                                                plate jokes to began to cause a scale. Subjects he prospect
                                                elegance followed no overcame possible it on. Improved own
                                                provided blessing may peculiar domestic. Sight house has sex
                                                never. No visited raising gravity outward subject my cottage Mr
                                                be.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3">
                                        <h6 className="accordion-header font-base" id="heading-3">
                                            <button
                                                className="accordion-button fw-bold collapsed rounded pe-5"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-3"
                                                aria-expanded="false"
                                                aria-controls="collapse-3"
                                            >
                                                How much should I offer the sellers?
                                            </button>
                                        </h6>
                                        {/* Body */}
                                        <div
                                            id="collapse-3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-3"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body mt-3">
                                                Post no so what deal evil rent by real in. But her ready least
                                                set lived spite solid. September how men saw tolerably two
                                                behavior arranging. She offices for highest and replied one
                                                venture pasture. Applauded no discovery in newspaper allowance
                                                am northward. Frequently partiality possession resolution at or
                                                appearance unaffected me. Engaged its was the evident pleased
                                                husband. Ye goodness felicity do disposal dwelling no. First am
                                                plate jokes to began to cause a scale. Subjects he prospect
                                                elegance followed no overcame possible it on. Improved own
                                                provided blessing may peculiar domestic. Sight house has sex
                                                never. No visited raising gravity outward subject my cottage Mr
                                                be. Hold do at tore in park feet near my case. Invitation at
                                                understood occasional sentiments insipidity inhabiting in. Off
                                                melancholy alteration principles old. Is do speedily kindness
                                                properly oh. Respect article painted cottage he is offices
                                                parlors.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3">
                                        <h6 className="accordion-header font-base" id="heading-4">
                                            <button
                                                className="accordion-button fw-bold collapsed rounded pe-5"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-4"
                                                aria-expanded="false"
                                                aria-controls="collapse-4"
                                            >
                                                Installation Guide
                                            </button>
                                        </h6>
                                        {/* Body */}
                                        <div
                                            id="collapse-4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-4"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body mt-3">
                                                <p>
                                                    What deal evil rent by real in. But her ready least set lived
                                                    spite solid. September how men saw tolerably two behavior
                                                    arranging. She offices for highest and replied one venture
                                                    pasture. Applauded no discovery in newspaper allowance am
                                                    northward. Frequently partiality possession resolution at or
                                                    appearance unaffected me. Engaged its was the evident pleased
                                                    husband. Ye goodness felicity do disposal dwelling no. First
                                                    am plate jokes to began to cause a scale. Subjects he prospect
                                                    elegance followed no overcame possible it on. Improved own
                                                    provided blessing may peculiar domestic. Sight house has sex
                                                    never. No visited raising gravity outward subject my cottage
                                                    Mr be.
                                                </p>
                                                <p className="mb-0">
                                                    At the moment, we only accept Credit/Debit cards and Paypal
                                                    payments. Paypal is the easiest way to make payments online.
                                                    While checking out your order. Be sure to fill in correct
                                                    details for fast &amp; hassle-free payment processing.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3">
                                        <h6 className="accordion-header font-base" id="heading-5">
                                            <button
                                                className="accordion-button fw-bold collapsed rounded pe-5"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-5"
                                                aria-expanded="false"
                                                aria-controls="collapse-5"
                                            >
                                                Additional Options and Services
                                            </button>
                                        </h6>
                                        {/* Body */}
                                        <div
                                            id="collapse-5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-5"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body mt-3">
                                                Post no so what deal evil rent by real in. But her ready least
                                                set lived spite solid. September how men saw tolerably two
                                                behavior arranging. She offices for highest and replied one
                                                venture pasture. Applauded no discovery in newspaper allowance
                                                am northward. Frequently partiality possession resolution at or
                                                appearance unaffected me. Engaged its was the evident pleased
                                                husband. Ye goodness felicity do disposal dwelling no. First am
                                                plate jokes to began to cause a scale. Subjects he prospect
                                                elegance followed no overcame possible it on. Improved own
                                                provided blessing may peculiar domestic. Sight house has sex
                                                never. No visited raising gravity outward subject my cottage Mr
                                                be. Hold do at tore in park feet near my case. Invitation at
                                                understood occasional sentiments insipidity inhabiting in. Off
                                                melancholy alteration principles old. Is do speedily kindness
                                                properly oh. Respect article painted cottage he is offices
                                                parlors.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h6 className="accordion-header font-base" id="heading-6">
                                            <button
                                                className="accordion-button fw-bold collapsed rounded pe-5"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse-6"
                                                aria-expanded="false"
                                                aria-controls="collapse-6"
                                            >
                                                What's are the difference between a college and a university?
                                            </button>
                                        </h6>
                                        {/* Body */}
                                        <div
                                            id="collapse-6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-6"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body mt-3">
                                                Post no so what deal evil rent by real in. But her ready least
                                                set lived spite solid. September how men saw tolerably two
                                                behavior arranging. She offices for highest and replied one
                                                venture pasture. Applauded no discovery in newspaper allowance
                                                am northward. Frequently partiality possession resolution at or
                                                appearance unaffected me. Engaged its was the evident pleased
                                                husband. Ye goodness felicity do disposal dwelling no. First am
                                                plate jokes to began to cause a scale. Subjects he prospect
                                                elegance followed no overcame possible it on. Improved own
                                                provided blessing may peculiar domestic. Sight house has sex
                                                never. No visited raising gravity outward subject my cottage Mr
                                                be. Hold do at tore in park feet near my case. Invitation at
                                                understood occasional sentiments insipidity inhabiting in. Off
                                                melancholy alteration principles old. Is do speedily kindness
                                                properly oh. Respect article painted cottage he is offices
                                                parlors.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ END */}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Panduan