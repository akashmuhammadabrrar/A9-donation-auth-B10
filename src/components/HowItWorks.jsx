import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { LiaDonateSolid } from "react-icons/lia";
import { SiGooglecampaignmanager360 } from "react-icons/si";

const HowItWorks = () => {
  return (
    <div className="container mx-auto lg:pl-0 md:pl-0 pl-20">
      <h2 className="text-4xl text-center py-10 font-bold">How It Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 space-y-2">
        <div className="card bg-base-300 w-80 rounded-md">
          <div className="card-body items-center">
            <h2 className=" text-center text-2xl font-semibold">Campaigning</h2>
            <SiGooglecampaignmanager360 className="text-5xl" />
            <p className="text-center text-balance">
              To Gather all the people in the society and social media platform,
              we are united a certain community.Then we are going to collection
              for donation.
            </p>
            <div className="card-actions justify-center mt-2">
              <button className="btn btn-accent">Explore</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 w-80 rounded-md">
          <div className="card-body items-center">
            <h2 className=" text-center text-2xl font-semibold">Collection</h2>
            <BsCollectionFill className="text-5xl" />
            <p className="text-center">
              After Start the campaign people starting to Collecting All the
              donation from everywhere in the country or outside of the country.
            </p>
            <div className="card-actions justify-center mt-2">
              <button className="btn btn-accent">explore</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 w-80 rounded-md">
          <div className="card-body items-center">
            <h2 className=" text-center text-2xl font-semibold">Donation</h2>
            <LiaDonateSolid className="text-5xl" />

            <p className="text-center">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-center mt-2">
              <button className="btn btn-accent">explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
