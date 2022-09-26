import React from 'react';

const DetailArtikel = () => {
    return (
        <main>
            {/* ======================= Main Banner START */}
            <section className="bg-light">
                <div className="container">
                    {/* Title */}
                    <div className="row position-relative pb-4">
                        <div className="col-lg-8 position-relative">
                            {/* Title */}
                            <h1>Study in Canada for international students</h1>
                            <p className="small">Rizki | 13 September 2022</p>
                        </div>
                    </div>
                    {/* Image */}
                    <div
                        className="h-300px mb-n9 rounded-3"
                        style={{
                            backgroundImage: "url(assets/images/bg/05.jpg)",
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                        }}
                    ></div>
                </div>
            </section>
            {/* ======================= Main Banner END */}

            {/* ======================= Detail START */}
            <section className="pt-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Content */}
                            <p>
                                Perceived end knowledge certainly day sweetness why cordially. On
                                forth doubt miles of child. Exercise joy man children rejoiced. Yet
                                uncommonly his ten who diminution astonished. Demesne had new
                                manners savings staying had. Under folly balls, death own point now
                                men. Match way these she avoids seeing death. She who drift their
                                fat off. Ask a quick six seven offer see among. Handsome met
                                debating sir dwelling age material. As style lived he worse dried.
                                Offered related so visitors we private removed.
                            </p>
                            <p>
                                Yet uncommonly his ten who diminution astonished. Demesne had new
                                manners savings staying had. Under folly balls, death own point now
                                men. Match way these she avoids seeing death. She who drift their
                                fat off. Ask a quick six seven offer see among. As style lived he
                                worse dried. Offered related so visitors we private removed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= Detail END */}

        </main>
    )
}

export default DetailArtikel