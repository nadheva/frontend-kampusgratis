import React from 'react'

import Footer from '../../../components/default/Footer';
import Header from '../../../components/default/Header';

const Magang = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-light">
          <div className="container">
            <div className="row position-relative pb-4">
              <div className="col-lg-8 position-relative">
                <h1>Magang</h1>
              </div>
            </div>
            <div
              className="h-500px mb-n9 rounded-3"
              style={{
                backgroundImage: "url(assets/images/asset-kg/magang.jpg)",
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
      </main>
      <Footer />
    </>
  )
}

export default Magang