import React from "react";
import aboutImage from "../assets/Image/winter7.jpeg";

const About = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-10">
        This is about section
      </h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={aboutImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">About Our Donation Charity!</h1>
            <p className="py-6">
              This is a Online And Social Donation Portal. There are a lot of
              people actively connected each other and there providing donation
              by there ability. With money, motivational support, networking
              support and so many support we provide for common people. And we
              help common people in every way.
            </p>
            <button className="btn btn-accent">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
