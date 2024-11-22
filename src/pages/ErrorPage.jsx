import React from "react";
import errImg from "../assets/Image/1-10.webp";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold text-center my-10">
        Page Not Found
      </h2>
      <img className="w-2/4" src={errImg} alt="" />

      <Link to="/" className="btn btn-accent">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
