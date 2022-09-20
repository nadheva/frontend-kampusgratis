import React from 'react';

import Banner from '../components/Profile/Banner';
import Sidebar from '../components/Profile/Sidebar';

const Dashboard = () => {
  return <>
    <Banner />
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-xl-9">

          </div>
        </div>
      </div>
    </section>
  </>
}

export default Dashboard