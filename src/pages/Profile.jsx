import React from 'react';

import Banner from '../components/Account/Banner';
import Sidebar from '../components/Account/Sidebar';
import Form from '../components/Account/Form';

import Header from '../components/default/Header';
import Footer from '../components/default/Footer';
// import LinkedAccount from '../components/Profile/LinkedAccount';
// import UpdatePassword from '../components/Profile/UpdatePassword';

const Profile = () => {
  return (
    <>
      <Header />
      <Banner />
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-xl-9">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Profile;