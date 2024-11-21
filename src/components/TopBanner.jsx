import React from "react";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div
      className="hero min-h-[350px]"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/4KWw2SW/banner-1.webp)",
      }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            Let Spread Love With Others.With Your Helping Hand.
          </h1>
          <p className="mb-5">
            In the every winter season there are a lot of people who impacted by
            cold.Because In Bangladesh most of the people are belongs in a
            privilege family. There is not enough food, money,cloths etc.
          </p>
          <div>
            <Link to="/details" className="btn btn-accent">
              Donate
            </Link>
            <Link
              to="/about"
              className="btn btn-outline btn-warning ml-2 text-white">
              About Our Charity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
