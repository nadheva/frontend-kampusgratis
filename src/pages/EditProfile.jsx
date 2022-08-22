import React from "react";
import BannerProfile from "../component/edit-profile/BannerProfile";
import SidebarProfile from "../component/edit-profile/SidebarProfile";
import Footer from "../component/partials/Footer";
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
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EditProfile;
