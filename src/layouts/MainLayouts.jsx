import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="min-h-[68px]">
        <Navbar></Navbar>
      </div>
      {/* Main dynamic section */}
      <div className="min-h-[calc(100vh-220px)]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
