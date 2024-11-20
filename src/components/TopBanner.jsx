import React from "react";

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
          <h1 className="mb-5 text-3xl font-bold">
            Let Spread Love With Others. Here we Are For Share Your Donation.
          </h1>
          <p className="mb-5">
            In the every winter season there are a lot of people who impacted by
            cold.Because In Bangladesh most of the people are belongs in a
            privilege family. There is not enough food, money,cloths etc.
          </p>
          <div>
            <button className="btn btn-accent">Donate</button>
            <button className="btn btn-outline btn-warning ml-2 text-white">
              About Our Charity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
