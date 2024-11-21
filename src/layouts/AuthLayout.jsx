import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      AuthLayout
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
