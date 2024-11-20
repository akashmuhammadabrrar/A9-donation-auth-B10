import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main dynamic section */}
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
