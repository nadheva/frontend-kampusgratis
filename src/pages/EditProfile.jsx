import React from "react";
import BannerProfile from "../component/edit-profile/BannerProfile";
import SidebarProfile from "../component/edit-profile/SidebarProfile";
import FormEdit from "../component/edit-profile/FormEdit";
import LinkedAccount from "../component/edit-profile/LinkedAccount";
import UpdatePassword from "../component/edit-profile/UpdatePassword";
import _Footer from "../component/partials/_Footer";
import Header from "../component/partials/Header";

const EditProfile = () => {
  return (
    <>
      <Header />
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
      <_Footer />
    </>
  );
};

export default EditProfile;
