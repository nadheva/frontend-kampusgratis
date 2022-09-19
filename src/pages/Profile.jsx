import React from 'react';

import Banner from '../components/Account/Banner';
import Sidebar from '../components/Account/Sidebar';
import Form from '../components/Account/Form';
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

export default Profile;