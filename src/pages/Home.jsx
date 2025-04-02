import Footer from "../components/Footer";
import React from "react";
import LeftDrawer from "../components/LeftDrawer";

function Home() {
  return (
    <div className="container mx-auto">
      <p className="flex justify-center items-center gap-3 h-[400px]">
        <span className="loading loading-spinner loading-md"></span>
        <span>Home is process...</span>
      </p>


    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>

      <LeftDrawer />

      <Footer />
    </div>
  );
}

export default Home;
