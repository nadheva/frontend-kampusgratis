import React from "react";
import BannerProfile from "../component/edit-profile/BannerProfile";
import SidebarProfile from "../component/edit-profile/SidebarProfile";
import FormEdit from "../component/edit-profile/FormEdit";
import LinkedAccount from "../component/edit-profile/LinkedAccount";
import UpdatePassword from "../component/edit-profile/UpdatePassword";
import Footer2 from "../component/partials/Footer2";
import Header2 from "../component/partials/Header2";

const EditProfile = () => {
  return (
    <>
      <Header2 />
      <main>
        <BannerProfile />
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <SidebarProfile/>
                    <div className="col-xl-9">
                      <FormEdit />
                      <div className="row g-4 mt-3">
                      <LinkedAccount />
                      <UpdatePassword />
                      </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
};

export default EditProfile;
