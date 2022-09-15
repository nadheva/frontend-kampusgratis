import React from 'react';

import Header from '../pages/default/Header';
import Banner from '../components/Profile/Banner';
import Sidebar from '../components/Profile/Sidebar';
import Form from '../components/Profile/Form';
// import LinkedAccount from '../components/Profile/LinkedAccount';
// import UpdatePassword from '../components/Profile/UpdatePassword';

const Profile = () => {
  return (
    <>
      <Banner />
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-xl-9">
              <Form />
              <div className="row g-4 mt-3">
                {/* <LinkedAccount />
                <UpdatePassword /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile